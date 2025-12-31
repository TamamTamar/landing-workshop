import { forwardRef, useMemo, useState } from "react";
import styles from "./SignupForm.module.scss";

type FormValues = {
    fullName: string;
    email: string;
    phone: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type SignupFormProps = {
    isOpen: boolean;
    onClose?: () => void;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneDigitsMin = 9;

const validateField = (name: keyof FormValues, value: string): string => {
    const v = value.trim();

    if (name === "fullName") {
        if (!v) return "שדה חובה";
        if (v.length < 2) return "נא להזין שם מלא תקין";
    }

    if (name === "email") {
        if (!v) return "שדה חובה";
        if (!emailRegex.test(v)) return "נא להזין אימייל תקין";
    }

    if (name === "phone") {
        if (!v) return "שדה חובה";
        const digitsOnly = v.replace(/\D/g, "");
        if (digitsOnly.length < phoneDigitsMin) return "נא להזין טלפון תקין";
    }

    return "";
};

// הפרדה כדי שיהיה קל להחליף בעתיד ל-paymentService
const submitSignup = async (payload: FormValues) => {
    // TODO: בעתיד:
    // return paymentService.startCheckout(payload)
    console.log(payload);
};

const SignupForm = forwardRef<HTMLElement, SignupFormProps>(
    ({ isOpen, onClose }, ref) => {
        const [values, setValues] = useState<FormValues>({
            fullName: "",
            email: "",
            phone: "",
        });

        const [touched, setTouched] = useState<Record<keyof FormValues, boolean>>({
            fullName: false,
            email: false,
            phone: false,
        });

        const [isSubmitting, setIsSubmitting] = useState(false);
        const [submitSuccess, setSubmitSuccess] = useState(false);

        const errors: FormErrors = useMemo(() => {
            return {
                fullName: validateField("fullName", values.fullName) || undefined,
                email: validateField("email", values.email) || undefined,
                phone: validateField("phone", values.phone) || undefined,
            };
        }, [values]);

        const isFormValid = useMemo(() => {
            return !errors.fullName && !errors.email && !errors.phone;
        }, [errors]);

        const setFieldValue = (name: keyof FormValues, value: string) => {
            setSubmitSuccess(false);
            setValues((prev) => ({ ...prev, [name]: value }));
        };

        const setFieldTouched = (name: keyof FormValues) => {
            setTouched((prev) => ({ ...prev, [name]: true }));
        };

        const getFieldErrorId = (name: keyof FormValues) => `signup-${name}-error`;

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            setTouched({ fullName: true, email: true, phone: true });
            setSubmitSuccess(false);

            if (!isFormValid || isSubmitting) return;

            try {
                setIsSubmitting(true);
                await submitSignup({
                    fullName: values.fullName.trim(),
                    email: values.email.trim(),
                    phone: values.phone.trim(),
                });
                setSubmitSuccess(true);
            } finally {
                setIsSubmitting(false);
            }
        };

        if (!isOpen) return null;

        return (
            <section
                ref={ref}
                id="signup"
                className={styles.signup}
                dir="rtl"
                aria-label="טופס הרשמה"
            >
                <div className={styles.inner}>
                    <div className={styles.headerRow}>
                        <h2 className={styles.title}>הירשמו עכשיו לסדנת מוכנות להורים</h2>

                        {onClose && (
                            <button
                                type="button"
                                className={styles.close}
                                onClick={onClose}
                                aria-label="סגירת טופס"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit} noValidate>
                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="fullName">
                                שם מלא
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                className={styles.input}
                                value={values.fullName}
                                onChange={(e) => setFieldValue("fullName", e.target.value)}
                                onBlur={() => setFieldTouched("fullName")}
                                aria-invalid={Boolean(touched.fullName && errors.fullName)}
                                aria-describedby={
                                    touched.fullName && errors.fullName
                                        ? getFieldErrorId("fullName")
                                        : undefined
                                }
                                autoComplete="name"
                                required
                            />
                            {touched.fullName && errors.fullName && (
                                <p className={styles.error} id={getFieldErrorId("fullName")} role="alert">
                                    {errors.fullName}
                                </p>
                            )}
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="email">
                                אימייל
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className={styles.input}
                                value={values.email}
                                onChange={(e) => setFieldValue("email", e.target.value)}
                                onBlur={() => setFieldTouched("email")}
                                aria-invalid={Boolean(touched.email && errors.email)}
                                aria-describedby={
                                    touched.email && errors.email ? getFieldErrorId("email") : undefined
                                }
                                autoComplete="email"
                                inputMode="email"
                                required
                            />
                            {touched.email && errors.email && (
                                <p className={styles.error} id={getFieldErrorId("email")} role="alert">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="phone">
                                טלפון
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                className={styles.input}
                                value={values.phone}
                                onChange={(e) => setFieldValue("phone", e.target.value)}
                                onBlur={() => setFieldTouched("phone")}
                                aria-invalid={Boolean(touched.phone && errors.phone)}
                                aria-describedby={
                                    touched.phone && errors.phone ? getFieldErrorId("phone") : undefined
                                }
                                autoComplete="tel"
                                inputMode="tel"
                                required
                            />
                            {touched.phone && errors.phone && (
                                <p className={styles.error} id={getFieldErrorId("phone")} role="alert">
                                    {errors.phone}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className={styles.submit}
                            disabled={!isFormValid || isSubmitting}
                        >
                            להרשמה ותשלום
                        </button>

                        {submitSuccess && (
                            <p className={styles.success} role="status">
                                הפרטים נקלטו, ניצור קשר בהמשך
                            </p>
                        )}

                        <p className={styles.footer}>מחכים לכם ♥ צוות שלהבות חב״ד</p>
                    </form>
                </div>
            </section>
        );
    }
);

export default SignupForm;
