"use client"

import { useRouter } from "next/navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LanguagesGrid from "./components/landing/LanguagesGrid/LanguagesGrid";
import LandingHero from "./components/landing/LandingHero";
import LandingChallenges from "./components/landing/LandingChallenges";
import LandingCommunity from "./components/landing/LandingCommunity";
import styles from "./components/landing/Landing.module.scss";

const Home = () => {


  const router = useRouter();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <LandingHero onGetStarted={() => router.push('/solve')} />
        <LandingChallenges />
        <LandingCommunity onJoinNow={() => router.push('/solve')} />
        <LanguagesGrid/>
        <Footer/>
      </main>
    </>
  );
};

export default Home;
