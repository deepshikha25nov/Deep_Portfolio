import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey👋</h1>
        <h1 className={styles.title}>I'm Deepshikha</h1>
        <p className={styles.description}>Currently a final-year B.Tech student specializing in Computer Science and Engineering from PSIT kanpur, with a strong passion for both frontend development and software engineering. </p>
        <p className={styles.description}>Reach out if you'd like to learn more!</p>
        <a href="mailto:deepshikha252000@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/deepphoto.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
