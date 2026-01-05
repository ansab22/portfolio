import React, { useEffect } from "react";
import styles from "./contact.module.css";
import { Row, Col } from "antd";
import Form from "./form";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import contactImg from "../../../public/Images/contact.png";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div id="contact" className="myContainer">
      <Row className={styles.contact_main}>
        <Col
          className={styles.img_section}
          data-aos="fade-right"
          data-aos-delay="0"
          xl={11}
          lg={12}
        >
          <Image src={contactImg} style={{ widows: "100%", height: "auto" }} />
        </Col>
        <Col
          data-aos="fade-left"
          data-aos-delay="0"
          className={styles.contact_section}
          xl={11}
          lg={16}
          md={24}
          sm={24}
          xs={24}
        >
          <div>
            <p className="text">Get in touch</p>
            <h3 className="title">Contact.</h3>
          </div>
          <div>
            <Form />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
