import React from 'react';
import '../styles/components/header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>CodeArena</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">Home</a>
          </li>
          <li>
            <a href="/tasks" className="nav-link">Tasks</a>
          </li>
          <li>
            <a href="/leaderboard" className="nav-link">Leaderboard</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
