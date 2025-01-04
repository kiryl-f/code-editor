import styles from "../styles/components/LanguagesGrid.module.scss";
import {
    JavascriptOriginal,
    PythonOriginal,
    JavaOriginal,
    CplusplusOriginal,
    RubyOriginal,
    GoOriginal,
    PhpOriginal,
    KotlinOriginal,
    SwiftOriginal,
    RustOriginal,
} from "devicons-react";

const LanguagesGrid = () => {
    const languages = [
        {
            name: "Java",
            description: "A versatile language for building cross-platform applications.",
            icon: <JavaOriginal size={50} color="#007396" />,
        },
        {
            name: "Python",
            description: "Ideal for data science, AI, and web development.",
            icon: <PythonOriginal size={50} color="#3776AB" />,
        },
        {
            name: "JavaScript",
            description: "The backbone of modern web applications.",
            icon: <JavascriptOriginal size={50} color="#F7DF1E" />,
        },
        {
            name: "C++",
            description: "Perfect for system programming and high-performance apps.",
            icon: <CplusplusOriginal size={50} color="#00599C" />,
        },
        {
            name: "PHP",
            description: "Popular for creating dynamic web pages and applications.",
            icon: <PhpOriginal size={50} color="#777BB4" />,
        },
        {
            name: "Ruby",
            description: "Focuses on simplicity and productivity in web development.",
            icon: <RubyOriginal size={50} color="#CC342D" />,
        },
        {
            name: "Go",
            description: "Optimized for simplicity and performance in distributed systems.",
            icon: <GoOriginal size={50} color="#00ADD8" />,
        },
        {
            name: "Kotlin",
            description: "Modern language for Android and multiplatform development.",
            icon: <KotlinOriginal size={50} color="#7F52FF" />,
        },
        {
            name: "Swift",
            description: "A powerful language for iOS and macOS app development.",
            icon: <SwiftOriginal size={50} color="#FA7343" />,
        },
        {
            name: "Rust",
            description: "Memory-safe language for high-performance and reliable software.",
            icon: <RustOriginal size={50} color="#DEA584" />,
        },
    ];

    return (
        <section className={styles.gridSection}>
            <h2>Programming Languages</h2>
            <div className={styles.grid}>
                {languages.map((lang, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.icon}>{lang.icon}</div>
                        <h3>{lang.name}</h3>
                        <p>{lang.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LanguagesGrid;
