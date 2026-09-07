import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState('none'); // 'up', 'down', 'none'
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // التأكد من أن التمرير في أعلى الصفحة
      setScrolledToTop(currentScrollY < 50);

      // إذا كانت القائمة الجانبية مفتوحة في الموبايل، لا تخفي الشريط
      if (menuOpen) return;

      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        // تمرير للأسفل -> إخفاء
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        // تمرير للأعلى -> إظهار
        setScrollDirection('up');
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  // منع السكرول عند فتح قائمة الموبايل
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // تحديد الكلاسات بناءً على الحالة
  const getNavClass = () => {
    if (menuOpen) return 'navbar-header visible scrolled';
    if (scrolledToTop) return 'navbar-header';
    if (scrollDirection === 'down') return 'navbar-header hidden scrolled';
    if (scrollDirection === 'up') return 'navbar-header visible scrolled';
    return 'navbar-header';
  };

  return (
    <header className={getNavClass()}>
      <nav className="navbar-container">
        {/* اللوغو */}
        <div className="navbar-logo">
            <a href="#hero" aria-label="Home" onClick={closeMenu}>
                <div className="custom-logo">
                <span className="logo-text">AM</span>
                </div>
            </a>
        </div>

        {/* زر الهامبرغر */}
        <button
          className={`hamburger-button ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="ham-box">
            <span className="ham-line line-1"></span>
            <span className="ham-line line-2"></span>
            <span className="ham-line line-3"></span>
          </div>
        </button>

        {/* القائمة الجانبية / الروابط */}
        <aside className={`nav-sidebar ${menuOpen ? 'active' : ''}`}>
          <ol className="nav-list">
            <li>
              <a href="#about" onClick={closeMenu}>
                <span className="nav-number">01.</span> About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                <span className="nav-number">02.</span> Work
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                <span className="nav-number">03.</span> Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                <span className="nav-number">04.</span> Contact
              </a>
            </li>
          </ol>

          <div className="resume-btn-wrapper">
            <a
              href="/Al_Ghieth_Melhem_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-button"
              onClick={closeMenu}
            >
              Resume
            </a>
          </div>
        </aside>

        {/* طبقة التغبيش */}
        <div
          className={`menu-backdrop ${menuOpen ? 'active' : ''}`}
          onClick={closeMenu}
        ></div>
      </nav>
    </header>
  );
}