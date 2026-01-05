import React, { useEffect } from "react";
import styles from "./about.module.css";
import Image from "next/image";
import One from "../../../public/Images/one.png";
import Two from "../../../public/Images/two.png";
import Three from "../../../public/Images/three.png";
import Four from "../../../public/Images/four.png";
import AOS from "aos";
import "aos/dist/aos.css";

import { Row, Col } from "antd";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div id="about" className="myContainer">
      <div className={styles.about_main}>
        <div>
          <p className="text">Introduction</p>
          <h2 className="title">Overview.</h2>
          <p className={styles.text2}>
            Full Stack Web Developer with practical experience in building
            modern web applications, Chrome extensions, and custom WordPress
            solutions. Proficient in React, Next.js, Node.js, Laravel, and
            WordPress, with a strong focus on creating scalable, responsive, and
            high-performance applications. Passionate about clean code,
            user-centric design, and delivering reliable digital solutions that
            add real business value.
          </p>
        </div>
        <Row className={styles.sections_main}>
          <Col
            data-aos="fade-right"
            data-aos-delay="0"
            xl={5}
            lg={5}
            md={11}
            sm={10}
            className={styles.sections}
          >
            <Image style={{ width: "5rem", height: "5rem" }} src={One} />
            <span className={styles.section_text}>Web Developer</span>
          </Col>
          <Col
            data-aos="fade-right"
            data-aos-delay="300"
            xl={5}
            lg={5}
            md={11}
            sm={10}
            className={styles.sections}
          >
            <Image style={{ width: "5rem", height: "5rem" }} src={Two} />
            <span className={styles.section_text}>Database</span>
          </Col>
          <Col
            data-aos="fade-right"
            data-aos-delay="600"
            xl={5}
            lg={5}
            md={11}
            sm={10}
            className={styles.sections}
          >
            <Image style={{ width: "5rem", height: "5rem" }} src={Three} />
            <span className={styles.section_text}>Backend Developer</span>
          </Col>
          {/* <Col
            data-aos="fade-right"
            data-aos-delay="900"
            xl={5}
            lg={5}
            md={11}
            sm={10}
            className={styles.sections}
          >
            <Image style={{ width: "5rem", height: "5rem" }} src={Four} />
            <span className={styles.section_text}>Dev Ops</span>
          </Col> */}
        </Row>
      </div>
    </div>
  );
}

export default About;
