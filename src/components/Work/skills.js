import React from "react";
import styles from "./styling/skills.module.css";
import { GrHtml5 } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io";
import { SiLaravel } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Row, Col } from "antd";

function Skills() {
  return (
    <div className="myContainer">
      <div className={styles.section_main}>
        <Row className={styles.section}>
          <Col xl={3} lg={4} md={4} xs={9} className={styles.skills}>
            <GrHtml5 className={styles.skills_icons} />
            <p className={styles.skills_text}>95%</p>
          </Col>
          <Col xl={3} lg={4} md={4} xs={9} className={styles.skills}>
            <IoLogoCss3 className={styles.skills_icons} />
            <p className={styles.skills_text}>90%</p>
          </Col>
          <Col xl={3} lg={4} md={4} xs={9} className={styles.skills}>
            <SiMysql className={styles.skills_icons} />
            <p className={styles.skills_text}>90%</p>
          </Col>
          <Col xl={3} lg={4} md={4} xs={9} className={styles.skills}>
            <SiLaravel className={styles.skills_icons} />
            <p className={styles.skills_text}>90%</p>
          </Col>
        </Row>
        <Row className={styles.section}>
          <Col xl={3} lg={4} md={4} xs={9} className={styles.skills}>
            <FaReact className={styles.skills_icons} />
            <p className={styles.skills_text}>92%</p>
          </Col>
          <Col xl={3} lg={4} md={4} xs={9} className={styles.skills}>
            <SiPostman className={styles.skills_icons} />
            <p className={styles.skills_text}>95%</p>
          </Col>
          <Col xl={3} lg={4} md={4} xs={9} className={styles.skills}>
            <FaWordpress className={styles.skills_icons} />
            <p className={styles.skills_text}>95%</p>
          </Col>
          <Col xl={3} lg={4} md={4} xs={9} className={styles.skills}>
            <FaGithub className={styles.skills_icons} />
            <p className={styles.skills_text}>90%</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Skills;
