import styles from "../app/styles/footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          Contact us at:{" "}
          <a href="mailto:wdaa47495@gmail.com">wdaa47495@gmail.com</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/warda-athar-493a96274"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/warda-athar
          </a>
        </p>
      </div>
     
      <p className={styles.footerCopy}>
        &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
