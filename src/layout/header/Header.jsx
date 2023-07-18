import React, { useEffect } from "react";
import styles from "./header.module.css";
import HeaderImg from "../../assets/header.jpg";
import socialLinks from "./data";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <header id="header" className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.imgBox} data-aos="fade-up">
          <img src={HeaderImg} alt="portrait" />
        </div>
        <h3 className={styles.fullName} data-aos="fade-up">
          Mohadeseh <br />
          Mousavisaeid
        </h3>
        <p className={styles.desc} data-aos="fade-up">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro earum
          quae eos id reiciendis similique doloribus accusamus
        </p>
        <div className={styles.contact} data-aos="fade-up">
          <a className="btn primary" href="#contact">
            Let's Talk
          </a>
          <a className="btn light" href="#portfolio">
            My Work
          </a>
        </div>
        <div className={styles.social}>
          {socialLinks.map((link) => (
            <a href={link.link} key={link.id}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
