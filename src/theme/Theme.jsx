import React from "react";
import Modal from "./../components/modal/Modal";
import PrimaryColors from "./PrimaryColors";
import BgColors from "./BgColors";
import styles from "./theme.module.css";
import { primaryColors, backgroundColors } from "./data";

const Theme = () => {
  return (
    <>
      {/* <Modal className={styles.themeModal}> */}
      <Modal>
        <h3 className={styles.title}>Customize you theme</h3>
        <small>pick the primary and background color as you want</small>
        <div className={styles.primaryColorWrapper}>
          <h5>Primary color palette</h5>
          <div className={styles.primaryColors}>
            {primaryColors.map((pColor) => (
              <PrimaryColors
                key={pColor.className}
                className={pColor.className}
              />
            ))}
          </div>
        </div>

        <div className={styles.bgColorWrapper}>
          <h5>Background color palette</h5>
          <div className={styles.bgColors}>
            {backgroundColors.map((bgColor) => (
              <BgColors key={bgColor.className} className={bgColor.className} />
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Theme;
