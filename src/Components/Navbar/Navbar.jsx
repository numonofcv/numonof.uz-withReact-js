import { useRef,useEffect, useState } from 'react';
import '../../index.css';
import './Navbar.css';

export default function Navbar() {
  const menuBtnRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    if (!menuOpen) {
      menuBtnRef.current.classList.add('active');
      setMenuOpen(true);
    } else {
      menuBtnRef.current.classList.remove('active');
      setMenuOpen(false);
    }
  };

  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">Numonof.uz</div>

      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button ref={menuBtnRef} className="menu-btn" onClick={handleMenuClick}>
        <span></span>
      </button>
    </nav>
  );
}
