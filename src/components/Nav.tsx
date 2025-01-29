import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from '../app/styles/nav.module.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <div className={styles.navbarBrand}>Syeda warda</div>
        
        {/* Desktop Navigation */}
        <div className={styles.navbarLinks}>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </div>

        {/* Hamburger Menu Icon */}
        <div className={styles.navbarMenuIcon} onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.navbarMenu}>
          <ul>
            <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
