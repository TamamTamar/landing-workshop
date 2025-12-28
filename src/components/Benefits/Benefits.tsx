import styles from "./Benefits.module.scss";

const Benefits = () => {
    return (
        <section
            className={styles.section}
            id="details"
                        aria-labelledby="benefits-title"
        >
            {/* ===== חלק עליון – הסבר ===== */}
            <div className={styles.explainWrapper}>
                <div className={styles.explainInner}>
                    <div className={styles.explainText}>
                        <p>
                            כיתה א היא הרבה מעבר ללימוד קריאה וכתיבה.
                            <br />
                            זה מעבר רגשי, חברתי ולימודי –
                            <br />
                            וכשההכנה נעשית נכון, הילד מגיע רגוע, בטוח
                            <br />
                            ופתוח ללמידה.
                        </p>
                    </div>

                    <div className={styles.arrow} aria-hidden="true">
                        ←
                    </div>

                    <div className={styles.explainBox}>
                        <p>
                            בסדנה בגישה רב־תחומית ונוירופדגוגית תקבלו
                            כלים מעשיים וברורים שיאפשרו לכם ללוות את
                            ילדכם בצורה מדויקת ובטוחה אל תוך השלב החדש.
                        </p>
                    </div>
                </div>
            </div>

            {/* ===== חלק תחתון – Benefits ===== */}
            <div className={styles.inner}>
                <div className={styles.cardsArea}>
                    <h2 className={styles.cardsTitle} id="benefits-title">
                        מה תקבלו בסדנה?
                    </h2>

                    <ul className={styles.cards}>
                        <li className={styles.card}>
                            <span className={styles.icon} aria-hidden="true" />
                            <p>פרוטוקול ברור לחיזוק ביטחון עצמי ורכישת הרגלי למידה נכונים</p>
                        </li>

                        <li className={`${styles.card} ${styles.cardOffset}`}>
                            <span className={styles.icon} aria-hidden="true" />
                            <p>כלים ליצירת חוויית מעבר חיובית, רגועה ובטוחה</p>
                        </li>

                        <li className={styles.card}>
                            <span className={styles.icon} aria-hidden="true" />
                            <p>טיפים והכוונה להכנת הילד להיכרות עם ידע חדש ודרכי למידה</p>
                        </li>

                        <li className={`${styles.card} ${styles.cardOffset}`}>
                            <span className={styles.icon} aria-hidden="true" />
                            <p>דרכים לפיתוח מסוגלות גבוהה ליצירת קשרים חברתיים מיטיבים</p>
                        </li>
                    </ul>
                </div>

                <div className={styles.textArea}>
                    <h3 className={styles.bigTitle}>
                        סדנת מוכנות
                        <br />
                        להורים
                    </h3>

                    <p className={styles.bigSubtitle}>
                        סדנת חובה לכל הורה
                        <br />
                        לילד העולה לכיתה א
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
