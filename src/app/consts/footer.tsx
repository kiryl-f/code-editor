import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export const FOOTER_ABOUT =
  "Code-Arena is your ultimate platform to enhance your programming skills with challenging tasks and projects.";

export interface FooterLink {
  label: string;
  href: string;
}

export const FOOTER_LINKS: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export interface FooterSocial {
  href: string;
  icon: () => React.ReactNode;
}

export const FOOTER_SOCIALS: FooterSocial[] = [
  { href: "https://facebook.com", icon: () => <FaFacebook /> },
  { href: "https://twitter.com", icon: () => <FaTwitter /> },
  { href: "https://instagram.com", icon: () => <FaInstagram /> },
  { href: "https://github.com", icon: () => <FaGithub /> },
]; 