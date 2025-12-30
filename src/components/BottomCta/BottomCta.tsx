import styles from "./BottomCta.module.scss";

type Props = {
    onSignupClick: () => void;
};

const BottomCta = ({ onSignupClick }: Props) => {
    return (
        <section className={styles.wrap} aria-label="קריאה לפעולה נוספת">
            <div className={styles.inner}>
                <button type="button" className={styles.button} onClick={onSignupClick}>
                    הירשמו עכשיו
                </button>
            </div>
        </section>
    );
};

export default BottomCta;
