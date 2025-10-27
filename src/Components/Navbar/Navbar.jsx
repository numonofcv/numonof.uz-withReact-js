import { useEffect, useState } from 'react';
import '../../index.scss';
import './Navbar.scss';
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  // 📱 Menu toggle
  const handleMenuClick = () => setMenuOpen(prev => !prev);

  // 🔒 Scroll boshqarish
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  // 🌗 Dark mode qo‘llash
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // 🌞/🌙 Dark-Light icon click
  const toggleTheme = () => setDarkMode(!darkMode);

  // 🌐 Tilni o‘zgartirish
  const handleLanguageChange = (e) => setLanguage(e.target.value);

  return (
    <nav className="navbar">
      {/* 🔹 Brend nomi */}
      <div className="navbar-brand">
        Islom.<span>dev</span>
      </div>

      {/* 🔹 Sahifa linklari */}
      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <li><a href="#home">{language === 'en' ? 'Home' : 'Bosh sahifa'}</a></li>
        <li><a href="#about">{language === 'en' ? 'About' : 'Haqimda'}</a></li>
        <li><a href="#projects">{language === 'en' ? 'Projects' : 'Loyihalar'}</a></li>
        <li><a href="#contact">{language === 'en' ? 'Contact' : 'Aloqa'}</a></li>
      </ul>

      {/* 🔹 O'ng taraf boshqaruv elementlari */}
      <div className="navbar-controls">
        {/* 🌗 Faqat iconlar bilan toggle */}
        {darkMode ? (
          <MdOutlineLightMode
            className="theme-icon light"
            title="Light Mode"
            onClick={toggleTheme}
          />
        ) : (
          <FaRegMoon
            className="theme-icon dark"
            title="Dark Mode"
            onClick={toggleTheme}
          />
        )}

        {/* 🌐 Til tanlash */}
        <select
          className="lang-select"
          value={language}
          onChange={handleLanguageChange}
          aria-label="Language select"
        >
          <option value="en">EN</option>
          <option value="uz">UZ</option>
        </select>

        {/* 📱 Mobil menyu icon */}
        {menuOpen ? (
          <FiX className="menu-icon close" onClick={handleMenuClick} title="Yopish" />
        ) : (
          <FiMenu className="menu-icon open" onClick={handleMenuClick} title="Menyu" />
        )}
      </div>
    </nav>
  );
}
