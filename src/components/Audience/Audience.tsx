// src/components/Audience/Audience.tsx
import styles from "./Audience.module.scss";

import iconX from "../../assets/icon-x.png";
import iconTarget from "../../assets/icon-target.png";

const Audience = () => {
    return (
        <section className={styles.root} id="details">
            <div className={styles.grid}>
                <div className={`${styles.card} ${styles.good}`}>
                    <div className={styles.icon} aria-hidden="true">
                        <img
                            src={iconTarget}
                            alt="icon target"
                            className={styles.iconImg}
                            draggable={false}
                        />
                    </div>
                    <h3 className={styles.title}>למי הסדנה מתאימה?</h3>

                    <p className={styles.lead}>
                        הסדנה מתאימה להורים ש:
                    </p>

                    <ul className={styles.list}>
                        <li>רוצים שהילד שלהם ייכנס לכיתה א עם ביטחון ולא עם חשש</li>
                        <li>מבינים שכיתה א היא בסיס רגשי וחברתי, לא רק לימודי</li>
                        <li>רוצים לדעת מה באמת חשוב להכין – ומה פחות</li>
                        <li>מחפשים כלים פרקטיים שאפשר ליישם כבר בבית</li>
                        <li>לא רוצים לגלות בדיעבד ש“חבל שלא ידענו קודם”</li>
                    </ul>

                </div>

                <div className={`${styles.card} ${styles.bad}`}>
                    <div className={styles.icon} aria-hidden="true">
                        <img
                            src={iconX}
                            alt="icon X"
                            className={styles.iconImg}
                            draggable={false}
                        />
                    </div>

                    <h3 className={styles.title}>למי הסדנה פחות מתאימה?</h3>

                    <ul className={styles.list}>
                        <li>למי שמאמין ש“יהיה בסדר, נזרום”</li>
                        <li>להורים שמעדיפים להשאיר את כל האחריות בידי בית הספר</li>
                        <li>
                            למי שלא פנוי להשקיע רגע בהכנה מוקדמת שתחסוך הרבה תסכול
                            בהמשך
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Audience;
