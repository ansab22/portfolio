import React from "react";
import styles from "./background.module.css";
import Image from "next/image";
import Computer from "../../../public/Images/computer.png";

function Background() {
  return (
    <div className={styles.background_main}>
      <div className="myContainer">
        <h1 className={styles.name}>
          Hi, I'm <span style={{ color: "#DD2A24" }}>Muhammad </span>
          <span style={{ color: "#273DBC" }}>Ansab</span>
        </h1>
        <p className={styles.intro}>
          I develop great
          <span style={{ color: "#DD2A24" }}> user interfaces</span>
          <br />
          and full stack
          <span style={{ color: "#273DBC" }}> Web Applications</span>
        </p>
        <Image src={Computer} style={{ width: "100%", height: "auto" }} />
      </div>
    </div>
  );
}

export default Background;
