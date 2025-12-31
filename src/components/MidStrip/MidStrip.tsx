// src/components/MidStrip/MidStrip.tsx
import styles from "./MidStrip.module.scss";

type MidStripProps = {
    ctaHref?: string;
};

const MidStrip = ({ ctaHref = "#signup" }: MidStripProps) => {
    return (
        <section className={styles.midStrip} aria-label="הסבר מעבר לכיתה א">
            <div className={styles.inner}>
                <div className={styles.explain}>
                    <p className={styles.text}>
                        כיתה א היא הרבה מעבר ללימוד קריאה וכתיבה.
                        <br />
                        <strong>זה מעבר רגשי, חברתי ולימודי -</strong>
                        <br />
                        וכשההכנה נעשית נכון, הילד מגיע רגוע, בטוח
                        <br />
                        ופתוח ללמידה.
                    </p>

                    <span className={styles.arrow} aria-hidden="true">
                        ←
                    </span>
                </div>

                <a href={ctaHref} className={styles.cta}>
                    בסדנה בגישה רב־תחומית ונוירופדגוגית תקבלו
                    <br />
                    כלים מעשיים וברורים
                    <br />
                    שיאפשרו לכם ללוות את ילדכם בצורה מדויקת
                    <br />
                    ובטוחה אל תוך השלב החדש.
                </a>
            </div>
        </section>
    );
};

export default MidStrip;
