import React from "react";
import styles from "./testimonial.module.css";
import Image from "next/image";
import Client1 from "../../../public/Images/client1.jpeg";
import Client2 from "../../../public/Images/client2.jpg";
import Client3 from "../../../public/Images/client3.jpeg";
import { Row, Col } from "antd";
import { MdOutlineRateReview } from "react-icons/md";

function Testimonial() {
  const testimonials = [
    {
      name: "Daniel",
      position: "Project Manager, TechSolutions",
      description:
        "Ansab is a highly skilled developer with a versatile background in front-end and back-end development. His attention to detail, clean coding practices, and timely delivery make him a dependable collaborator on any project. I highly recommend him for web and app development projects!",
      image: Client1,
    },
    {
      name: "Kellay",
      position: "CTO, eworks Digital",
      description:
        "Working with Ansab has been an excellent experience! His expertise in Laravel, React, and modern web technologies, coupled with his dedication to quality, ensures every project exceeds expectations. A professional and reliable developer I would gladly work with again.",
      image: Client2,
    },
    {
      name: "Chris",
      position: "Lead Designer,, TechNova",
      description:
        "Ansab demonstrates exceptional technical skills and problem-solving ability. From complex backend logic to polished frontend interfaces, his work is always top-notch. He is highly recommended for any development work requiring precision and creativity.",
      image: Client3,
    },
  ];

  return (
    <div id="testimonials" className="myContainer">
      <div className={styles.testimonial_main}>
        <div>
          <p className="text">What my Client's say</p>
          <h3 className="title">Testimonials.</h3>
        </div>

        {/* testimonial */}

        <Row className={styles.testimonial_section}>
          {testimonials.map((testimonial) => (
            <Col xl={7} lg={7} className={styles.testimonial_single}>
              <p className={styles.testimonial_icon}>"</p>
              <p className={styles.description}>{testimonial.description}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <span className={styles.name}>{testimonial.name}</span>
                  <p style={{ margin: "0" }}>{testimonial.position}</p>
                </div>
                <div>
                  <Image
                    src={testimonial.image}
                    width={60}
                    height={60}
                    className={styles.image}
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* testimonial */}
      </div>
    </div>
  );
}

export default Testimonial;
