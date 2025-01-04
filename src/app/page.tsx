"use client"

import { useRouter } from "next/navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LanguagesGrid from "./components/LanguagesGrid";
import styles from "./styles/components/Landing.module.scss";

const Home = () => {


  const router = useRouter();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.welcome}>Welcome to Code-Arena!</h1>
          <p>
            Your ultimate platform to practice programming tasks in various
            languages.
          </p>
          <button className={styles.getStarted} onClick={() => {router.push('/solve')}}>Get Started</button>
          <p className={styles.subtitle}>
            Join us and enhance your coding skills.
          </p>
        </section>

        <section className={styles.challenges}>
          <h2>Challenging Tasks</h2>
          <p>Improve your skills with our diverse set of tasks.</p>
        </section>

        <section className={styles.newSection}>
          <h2>Collaborate and Compete</h2>
          <p>
            Join our community of programmers to share knowledge, solve problems, and compete with the best.
          </p>
          <button className={styles.joinNow} onClick={() => {router.push('/solve')}}>Join Now</button>
        </section>

        <LanguagesGrid/>
        <Footer/>
      </main>
    </>
  );
};

export default Home;
