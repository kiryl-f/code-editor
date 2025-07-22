import React from "react";
import styles from "./Footer/Footer.module.scss";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { FOOTER_LINKS, FOOTER_ABOUT, FOOTER_SOCIALS, FooterLink, FooterSocial } from "../consts/footer";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>About</h4>
          <p>{FOOTER_ABOUT}</p>
        </div>
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            {FOOTER_LINKS.map((link: FooterLink) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            {FOOTER_SOCIALS.map((social: FooterSocial) => (
              <a key={social.href} href={social.href} target="_blank" rel="noreferrer">
                {social.icon()}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Code-Arena. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
