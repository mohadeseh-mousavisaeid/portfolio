import React from "react";
import styles from "./footer.module.css";
import socialLinks from "../header/data";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <ul>
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#services">Our Services</a>
        </li>
        .
        <br />
        .
        <br />.
      </ul>
      <div className={styles.social}>
        {socialLinks.map((link) => (
          <a href={link.link} key={link.id}>
            {link.icon}
          </a>
        ))}
      </div>
      <div className={styles.rights}>All rights reserved</div>
    </footer>
  );
};

export default Footer;
