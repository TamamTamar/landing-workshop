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
                        <img src={logo} alt="לוגו שלהבות חב״ד" className={styles.logo} />
                    </div>
                </div>

                <div className={styles.stage}>
                    {/* ✅ העוגן: טקסט+תמונה יחד, כדי שהתמונה תזוז ביחד עם הטקסט */}
                    <div className={styles.heroCenter}>
                        <div className={styles.text}>
                            <h1 className={styles.title}>
                                <span className={styles.titleLineSmall}>כך תובילו את הילד שלכם</span>
                                <span className={styles.titleLineLarge}>לכיתה א</span>
                                <span className={styles.titleLineSmall}>בביטחון ובהצלחה</span>
                            </h1>

                            <p className={styles.paragraph}>
                                הורה, הכניסה לכיתה א היא רגע מכריע.<br />
                                החוויה הראשונית של ילדכם בבית הספר תשפיע על הביטחון העצמי,
                                <br />
                                על היחס ללמידה ועל תחושת ההצלחה שלו —<br />
                                לא רק השנה, אלא לשנים קדימה.
                            </p>

                            <p className={styles.emphasis}>
                                אין הזדמנות שנייה לחוויה ראשונית.
                                <br />
                                והאחריות — בידיים שלכם.
                            </p>
                        </div>

                        <div className={styles.media} aria-hidden="true">
                            <img src={girlPencil} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
