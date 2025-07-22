import React from "react";
import styles from "./Landing.module.scss";

interface LandingHeroProps {
  onGetStarted: () => void;
}

const LandingHero: React.FC<LandingHeroProps> = ({ onGetStarted }) => (
  <section className={styles.hero}>
    <h1 className={styles.welcome}>Welcome to Code-Arena!</h1>
    <p>Your ultimate platform to practice programming tasks in various languages.</p>
    <button className={styles.getStarted} onClick={onGetStarted}>Get Started</button>
    <p className={styles.subtitle}>Join us and enhance your coding skills.</p>
  </section>
);

export default LandingHero; 