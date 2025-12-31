import styles from "./MidCta.module.scss";

type Props = {
    onSignupClick: () => void;
};

const MidCta = ({ onSignupClick }: Props) => {
    return (
        <section className={styles.wrap} aria-label="קריאה לפעולה">
            <div className={styles.inner}>
                <p className={styles.topText}>העניקו לילדכם את ההתחלה שמגיעה לו</p>

                <div className={styles.ctaRow}>
                    <span className={styles.arrow} aria-hidden="true">
                        ←
                    </span>

                    <button type="button" className={styles.button} onClick={onSignupClick}>
                        <span className={styles.buttonLine}>הירשמו עכשיו</span>
                        <span className={styles.buttonLine}>לסדנת מוכנות להורים</span>
                    </button>

                    <span className={styles.arrow} aria-hidden="true">
                         →
                    </span>
                </div>

                <p className={styles.bottomText}>
                    התחלה טובה לא קורית במקרה.
                    <br />
                    היא נוצרת מהכנה נכונה ומהובלה הורית מודעת.
                </p>
            </div>
        </section>
    );
};

export default MidCta;
