import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/photo.png")}
          alt="Me sitting with a laptop"
          className={styles.photo}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I have hands-on experience creating dynamic and responsive user interfaces using modern web technologies.</p> 
              <p>Proficient in HTML, CSS, JavaScript, and popular frameworks like React.</p>
              <p>I enjoy transforming complex design concepts into intuitive and engaging web experiences.</p>
              </div>
              </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>My software development journey includes designing, coding, and testing robust applications.</p> 
              <p>I am well-versed in various programming languages, such as Java and Python.</p>
              <p>Have a solid understanding of data structures, algorithms, and software engineering principles.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
