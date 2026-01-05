import React from "react";
import styles from "./styling/sections.module.css";

function Sections({ position, company, point1, point2, point3, point4 }) {
  return (
    <div className={styles.main}>
      <h4 className={styles.position}>{position}</h4>
      <span className={styles.company}>{company}</span>
      <ul>
        <li className={styles.list}>{point1}</li>
        <li className={styles.list}>{point2}</li>
        <li className={styles.list}>{point3}</li>
        <li className={styles.list}>{point4}</li>
      </ul>
    </div>
  );
}

export default Sections;
