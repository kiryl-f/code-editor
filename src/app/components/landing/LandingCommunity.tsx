import React from "react";
import styles from "./Landing.module.scss";

interface LandingCommunityProps {
  onJoinNow: () => void;
}

const LandingCommunity: React.FC<LandingCommunityProps> = ({ onJoinNow }) => (
  <section className={styles.newSection}>
    <h2>Collaborate and Compete</h2>
    <p>
      Join our community of programmers to share knowledge, solve problems, and compete with the best.
    </p>
    <button className={styles.joinNow} onClick={onJoinNow}>Join Now</button>
  </section>
);

export default LandingCommunity; 