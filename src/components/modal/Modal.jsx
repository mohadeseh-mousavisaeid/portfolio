import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import Card from "../card/Card";
import styles from "./modal.module.css";
import { useModalContext } from "../../context/ModalContext";
import { useThemeContext } from "../../context/ThemeContext";

const Modal = ({ className, children }) => {
  const { showModal, closeModalHandler } = useModalContext();
  const { themeState } = useThemeContext();

  return (
    <Fragment>
      {showModal &&
        createPortal(
          <>
            <main className={`${themeState.primary} ${themeState.background}`}>
              <section
                id="backdrop"
                className={styles.backdrop}
                onClick={closeModalHandler}
              ></section>
              <Card modal className={className}>
                {children}
              </Card>
            </main>
          </>,
          document.getElementById("portal")
        )}
    </Fragment>
  );
};

export default Modal;
