import React, { useState } from 'react';
import { FaJsSquare } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import '../styles/components/language-select.scss';

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
    <div className="language-select-container">
      <button className="language-select" onClick={toggleDropdown}>
        <span className="language-icon">
          {language === 'javascript' ? <FaJsSquare /> : <FaPython />}
        </span>
        <span className="language-label">{language === 'javascript' ? 'JavaScript' : 'Python'}</span>
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="dropdown-options">
          <div
            className="dropdown-option"
            onClick={() => handleSelectLanguage('javascript')}
          >
            <FaJsSquare style={{marginRight: '12px'}}/> JavaScript
          </div>
          <div
            className="dropdown-option"
            onClick={() => handleSelectLanguage('python')}
          >
            <FaPython style={{marginRight: '12px'}}/> Python
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
