import React, { useEffect } from "react";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import Card from "../../components/card/Card";
import styles from "./about.module.css";
import { BiHappyHeartEyes } from "react-icons/bi";
import { SlBadge } from "react-icons/sl";
import { MdTaskAlt } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section id="about">
      <div className={`${styles.container} container`}>
        <div className={styles.mainTitle}>
          <h3>About Me</h3>
          <p className={styles.desc}>
            Lorem ipsum dolor sit ametolor sit amet c
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.startSide} data-aos="fade-right">
            <div className={styles.imgBox}>
              <img src={AboutImg} alt="about" />
            </div>
          </div>
          <div className={styles.endSide}>
            <div className={styles.innerContainer}>
              <div className={styles.cards}>
                <Card lighter>
                  <SlBadge />
                  <h6>Experience</h6>
                  <span>+3 Years</span>
                </Card>

                <Card lighter>
                  <MdTaskAlt />
                  <h6>Projects</h6>
                  <span>+180</span>
                </Card>

                <Card lighter>
                  <BiHappyHeartEyes />
                  <h6>Clients</h6>
                  <span>+70</span>
                </Card>
              </div>
              <p data-aos="fade-in" data-aos-duration="2000">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In eos
                cumque dolorum. Quis, nostrum nulla officiis facere modi
                consectetur, expedita accusamus dicta. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Veniam repellendus cumque
                aliquam aut, alias laborum fugit quis, temporibus excepturi
                maiores corrupt quam!
              </p>
              <a href={CV} download className="btn primary">
                Download CV <HiDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
