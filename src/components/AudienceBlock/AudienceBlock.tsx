import styles from "./AudienceBlock.module.scss";
import Audience from "../Audience/Audience";
import BottomCta from "../BottomCta/BottomCta";

const AudienceBlock = () => {
    return (
        <section className={styles.section} id="audience" dir="rtl">
            <div className={styles.inner}>
                <Audience />
                <BottomCta />
            </div>
        </section>
    );
};

export default AudienceBlock;
