import React, { useEffect } from "react";
import services from "./data";
import styles from "./ourServices.module.css";
import Card from "./../../components/card/Card";
import AOS from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section id="services">
      <div className={`${styles.container} container`}>
        <div className={styles.mainTitle}>
          <h3>Our Services</h3>
          <p className={styles.desc}>
            Lorem ipsum dolor sit ametolor sit amet c
          </p>
        </div>
        <div className={styles.innerContainer}>
          {services.map((service) => (
            <div
              className={styles.serviceItem}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Card key={service.id}>
                <div className={styles.heading}>
                  {service.icon}
                  <div>{service.title}</div>
                </div>
                <div>{service.desc}</div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
