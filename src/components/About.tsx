import React from "react";

import styles from "../app/styles/about.module.css";

function About() {
  return (
    <div id="about" className={styles.aboutContainer}>
      <h2 className={styles.aboutHeading}>About Me</h2>
      <p className={styles.aboutParagraph}>
        I am a Student at GIAIC, pursuing a course in AI. I am a beginner web
        developer eager to learn and grow in the field of web development. I
        have a basic understanding of HTML, CSS, and JavaScript and enjoy
        creating simple and functional websites. I am passionate about
        improving my skills, exploring new technologies, and building projects
        that help me gain practical experience.
      </p>
      
    </div>
  );
}

export default About;
