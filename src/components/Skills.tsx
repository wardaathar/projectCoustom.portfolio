import React from 'react';
import styles from "../app/styles/skills.module.css"; // Corrected import path

const Skills = () => {
  return (
    <div id='skills' className={styles.skillsContainer}>
      <h4 className={styles.skillsHeading}>Technologies I Work With</h4>
      <p className={styles.skillsText}>
        I am begnnier at coding with languages like HTML, CSS, JavaScript for front-end development, and Python, Java for back-end programming.
      </p>
      <div className={styles.skillsGrid}>
        {/* First column */}
        <div className={styles.skillsColumn}>
          <h2>Microsoft Office</h2>
          <h2>TypeScript</h2>
          <h2>React.js</h2>
          <h2>Next.js</h2>
        </div>

        {/* Second column */}
        <div className={styles.skillsColumn}>
          <h2>Tailwind</h2>
          <h2>CSS</h2>
          <h2>Node.js</h2>
          <h2>Mehandi</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
