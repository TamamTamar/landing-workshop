import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <section className={styles.hero} id="top">
            <div className={styles.inner}>
                <div className={styles.topRow}>
                    <div className={styles.bh}>ב״ה</div>

                    <div className={styles.brand}>
                        {/* TODO: להחליף ללוגו אמיתי מהפיגמה */}
                        <div className={styles.logoPlaceholder}>LOGO</div>
                    </div>

                </div>

                <div className={styles.content}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>כך תובילו את הילד שלכם לכיתה א</h1>
                        <p className={styles.subtitle}>בביטחון ובהצלחה</p>

                        <p className={styles.paragraph}>
                            הורה, הכניסה לכיתה א היא רגע מכריע. החוויה הראשונית של ילדכם בבית הספר תשפיע על
                            הביטחון העצמי, על היחס ללמידה ועל תחושת ההצלחה שלו — לא רק השנה, אלא לשנים קדימה.
                        </p>

                        <p className={styles.emphasis}>
                            אין הזדמנות שנייה לחוויה ראשונית.
                            <br />
                            והאחריות — בידיים שלכם.
                        </p>  
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
