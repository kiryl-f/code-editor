import React, { useState } from 'react';
import { FaJsSquare } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import styles from "./LanguageSelect.module.scss";

interface LanguageSelectProps {
  language: 'javascript' | 'python';
  setLanguage: (language: 'javascript' | 'python') => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectLanguage = (lang: 'javascript' | 'python') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSelectContainer}>
      <button
        className={styles.languageSelect}
        onClick={toggleDropdown}
        aria-expanded={isOpen} 
      >
        <span className={styles.languageSelectIcon}>
          {language === 'javascript' ? <FaJsSquare /> : <FaPython />}
        </span>
        <span className={styles.languageSelectLabel}>
          {language === 'javascript' ? 'JavaScript' : 'Python'}
        </span>
        <span className={styles.languageSelectArrow}>
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdownOptions}>
          <div
            className={styles.dropdownOption}
            onClick={() => handleSelectLanguage('javascript')}
          >
            <FaJsSquare style={{ marginRight: '12px' }} /> JavaScript
          </div>
          <div
            className={styles.dropdownOption}
            onClick={() => handleSelectLanguage('python')}
          >
            <FaPython style={{ marginRight: '12px' }} /> Python
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;