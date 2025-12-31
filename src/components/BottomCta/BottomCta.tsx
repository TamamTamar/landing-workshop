import styles from "./BottomCta.module.scss";
import girlImg from "../../assets/girl-bag.png";

const BottomCta = () => {
    return (
        <div className={styles.root}>
            <div className={styles.imageWrap} aria-hidden="true">
                <img
                    src={girlImg}
                    alt=""
                    className={styles.image}
                    loading="lazy"
                />
                <svg
                    className={styles.arc}
                    viewBox="0 0 200 120"
                    aria-hidden="true"
                >
                    <path
                        id="arcPath"
                        d="M 20 20 A 80 80 0 0 0 180 20"
                        fill="none"
                    />

                    <text className={styles.arcText} direction="rtl">
                        <textPath
                            href="#arcPath"
                            startOffset="50%"
                            textAnchor="middle"
                        >
                            העניקו לילדכם את ההתחלה שמגיעה לו
                        </textPath>
                    </text>
                </svg>



            </div>

            <div className={styles.content}>
                <h2 className={styles.title}>
                    לא משנה לאיזה בית ספר הילד נרשם –
                    <br />
                    ההכנה הזו קריטית לכל ילד.
                </h2>

                <a href="#signup" className={styles.button}>
                    הירשמו עכשיו
                    <br />
                    לסדנת מוכנות להורים
                </a>

                <p className={styles.note}>מחכים לכם ♥ צוות שלהבות חב״ד</p>
            </div>
        </div>
    );
};

export default BottomCta;
