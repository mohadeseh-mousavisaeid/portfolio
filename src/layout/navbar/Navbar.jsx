import React from "react";
import styles from "./navbar.module.css";
import Logo from "../../assets/logo.jpg";
import { MdOutlineColorLens } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import links from "./data";
import { useModalContext } from "../../context/ModalContext";

const Navbar = () => {
  const { showModalHandler } = useModalContext();
  return (
    <nav id="navbar" className={styles.nav}>
      <div className={`${styles.container} container`}>
        <a href="index.html">
          <img className={styles.logo} src={Logo} alt="logo" />
        </a>
        <ul className={styles.menu}>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.link}>{link.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme" className={styles.themeBtn}>
          <MdOutlineColorLens onClick={showModalHandler} />
        </button>
        <button className={styles.hamburgerBtn}>
          <RxHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
