import React from "react";
import styles from "./card.module.css";

const Card = ({ lighter, modal, children }) => {
  return (
    <div
      className={` ${styles.container} ${modal && styles.modal} ${
        lighter && styles.lighter
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
