import Link from "next/link";
import styles from "../styles/components/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Code-Arena</div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/tasks">Tasks</Link>
      </nav>
      <div className={styles.authButtons}>
        <button className={styles.login}>Log In</button>
        <button className={styles.signup}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
