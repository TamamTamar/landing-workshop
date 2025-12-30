import styles from "./Hero.module.scss";
import logo from "../../assets/Logo-Shalhavot.png";
import girlPencil from "../../assets/girl-pencil.png";


const Hero = () => {
    return (
        <section className={styles.hero} id="top">
            <div className={styles.inner}>
                <div className={styles.topRow}>
                    <div className={styles.bh}>ב״ה</div>

                    <div className={styles.brand}>
                        <img
                            src={logo}
                            alt="לוגו שלהבות חב״ד"
                            className={styles.logo}
                        />
                    </div>

                </div>

                <div className={styles.content}>
                
                    <div className={styles.text}>
                        <h1 className={styles.title}>
                            <span className={styles.titleLineSmall}>כך תובילו את הילד שלכם</span>
                            <span className={styles.titleLineLarge}>לכיתה א</span>
                            <span className={styles.titleLineSmall}>בביטחון ובהצלחה</span>
                        </h1>
                        <p className={styles.paragraph}>
                            הורה, הכניסה לכיתה א היא רגע מכריע. החוויה הראשונית של ילדכם בבית הספר תשפיע על
                            הביטחון העצמי, על היחס ללמידה ועל תחושת ההצלחה שלו — לא רק השנה, אלא לשנים קדימה.
                        </p>

                        <p className={styles.emphasis}>
                            אין הזדמנות שנייה לחוויה ראשונית.
                            <br />
                            והאחריות — בידיים שלכם.
                        </p>

                        <div className={styles.actions}>
                            <a className={styles.cta} href="#register">
                                הירשמו עכשיו
                            </a>
                        </div>
                    </div>
                    <div className={styles.media}>
                        <img
                            src={girlPencil}
                            alt="ילדה נשענת על עיפרון – מוכנות לכיתה א"
                        />
                    </div>

                    
                    <div className={styles.media} aria-hidden="true">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
