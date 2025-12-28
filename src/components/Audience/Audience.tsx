import styles from "./Audience.module.scss";

const Audience = () => {
    return (
        <section className={styles.section} id="details" aria-labelledby="audience-title">
            <div className={styles.inner}>
                <h2 className={styles.mainTitle} id="audience-title">
                    למי הסדנה מתאימה?
                </h2>

                <div className={styles.grid}>
                    {/* פחות מתאימה */}
                    <article className={styles.card} aria-labelledby="audience-not-for">
                        <h3 className={styles.cardTitle} id="audience-not-for">
                            למי הסדנה פחות מתאימה?
                        </h3>

                        <ul className={styles.list}>
                            <li>למי שמאמין ש“יהיה בסדר, נזרום”</li>
                            <li>להורים שמעדיפים להשאיר את כל האחריות בידי בית הספר</li>
                            <li>למי שלא פנוי להשקיע רגע בהכנה מוקדמת שתחסוך הרבה תסכול בהמשך</li>
                        </ul>
                    </article>

                    {/* מתאימה */}
                    <article className={styles.card} aria-labelledby="audience-for">
                        <h3 className={styles.cardTitle} id="audience-for">
                            למי הסדנה מתאימה?
                        </h3>

                        <p className={styles.lead}>הסדנה מתאימה להורים ש:</p>

                        <ul className={styles.list}>
                            <li>רוצים שהילד שלהם ייכנס לכיתה א עם ביטחון ולא עם חשש</li>
                            <li>מבינים שכיתה א היא בסיס רגשי וחברתי, לא רק לימודי</li>
                            <li>רוצים לדעת מה באמת חשוב להכין – ומה פחות</li>
                            <li>מחפשים כלים פרקטיים שאפשר ליישם כבר בבית</li>
                            <li>לא רוצים לגלות בדיעבד ש“חבל שלא ידענו קודם”</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Audience;
