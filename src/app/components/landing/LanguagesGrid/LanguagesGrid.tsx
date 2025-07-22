import styles from "./LanguagesGrid.module.scss";
import { LANGUAGES } from "../../../consts/languages";

const LanguagesGrid = () => {
    return (
        <section className={styles.gridSection}>
            <h2>Programming Languages</h2>
            <div className={styles.grid}>
                {LANGUAGES.map((lang, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.icon}>{lang.icon()}</div>
                        <h3>{lang.name}</h3>
                        <p>{lang.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LanguagesGrid;
