import styles from "../app/styles/hero.module.css";
import React from "react";
import Nav from "./Nav";

const Hero = () => {
  return (
    <main>
      <Nav/>

    <div id='hero' className={styles.heroContainer}>
 
      <div className={styles.heroContent}>
        <div className={styles.heroMain}>
      
          <p>I`m</p>
          <p>Wardah</p>
          <p>Athar</p>
        </div>
        <div className={styles.heroSub}>
          <p>Frontend Developer | React Enthusiast | Tech Explorer</p>
        </div>
      </div>
    </div>
    </main>
    
 
  );
};

export default Hero;
