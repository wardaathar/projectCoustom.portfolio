import React from "react";
import styles from "../app/styles/heading.module.css";

interface PropsType {
  title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
  return (
    <div className={styles.headingContainer}>
      <h1 className={styles.headingTitle}>{title}</h1>
    </div>
  );
};

export default Heading;
