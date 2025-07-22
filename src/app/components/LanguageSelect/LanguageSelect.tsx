import React, { useState, useRef } from 'react';
import { FaJsSquare, FaPython } from 'react-icons/fa';
import styles from "./LanguageSelect.module.scss";
import { Language } from '@/app/types/language';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import { AVALIABLE_LANGUAGES } from '@/app/consts/languages';


interface LanguageSelectProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const currentLanguage = AVALIABLE_LANGUAGES.find(lang => lang.value === language) || AVALIABLE_LANGUAGES[0];

  return (
    <div className={styles.languageSelectContainer} ref={dropdownRef}>
       <button
        className={styles.languageSelect}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.languageSelectIcon}>
          {currentLanguage.icon}
        </span>
        <span className={styles.languageSelectLabel}>
          {currentLanguage.name}
        </span>
        <span className={styles.languageSelectArrow}>
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdownOptions}>
          {AVALIABLE_LANGUAGES.map((lang) => (
            <div
              key={lang.value}
              className={styles.dropdownOption}
              onClick={() => {
                setLanguage(lang.value);
                setIsOpen(false);
              }}
            >
              <span className={styles.dropdownOptionIcon}>{lang.icon}</span>
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;