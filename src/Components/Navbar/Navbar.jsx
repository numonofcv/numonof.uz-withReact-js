import { useEffect, useState } from 'react';
import '../../index.scss';
import './Navbar.scss';
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
 const [darkMode, setDarkMode] = useState(() => {
    // 🔹 Boshlanishda localStorage’ni tekshiramiz
    return localStorage.getItem('theme') === 'dark';
  });

  const { t, i18n } = useTranslation();
  
  // 📱 Menu toggle
  const handleMenuClick = () => setMenuOpen(prev => !prev);

  // 🔒 Scroll boshqarish (mobil menu ochilganda scrollni bloklaymiz)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  // 🌗 Dark mode qo‘llash
  useEffect(() => {
    if(darkMode){
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // 🌞/🌙 Dark-Light toggle
  const toggleTheme = () => setDarkMode(!darkMode);

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem('lang', selectedLang);
  };

  // 🌐 Boshlang‘ich tilni localStorage’dan olish
  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    i18n.changeLanguage(savedLang);
  }, [i18n]);

  return (
    <nav className="navbar">
      {/* 🔹 Brend nomi */}
      <div className="navbar-brand">
        Islom.<span>dev</span>
      </div>

         {/* 🔹 Sahifa linklari */}
      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <li><a href="#home">{t("navbar.home")}</a></li>
        <li><a href="#about">{t("navbar.about")}</a></li>
        <li><a href="#projects">{t("navbar.projects")}</a></li>
        <li><a href="#contact">{t("navbar.contact")}</a></li>
      </ul>


      {/* 🔹 O'ng taraf boshqaruv elementlari */}
      <div className="navbar-controls">
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
          value={i18n.language}
          onChange={handleLanguageChange}
          aria-label="Language select"
        >
          <option value="en">English</option>
          <option value="uz">O'zbek</option>
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
