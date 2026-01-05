import React from "react";
import styles from "./styling/skills.module.css";
import Work from "./work";
import Skills from "./skills";

function index() {
  return (
    <div className={styles.main} id="work">
      <div style={{ textAlign: "center" }}>
        <p className="text">What I have done so far</p>
        <h3 className="title">Work Experience.</h3>
      </div>
      <Work />
      <Skills />
    </div>
  );
}

export default index;
