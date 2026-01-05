import React from "react";
import styles from "./project.module.css";
import { Row, Col } from "antd";
import Link from "next/link";

/**Images */

import Image from "next/image";
import Project1 from "../../../public/Images/project1.png";
import Project2 from "../../../public/Images/project2.png";
import Project3 from "../../../public/Images/project3.png";

function Project() {
  return (
    <div id="project" className="myContainer">
      <div className={styles.project_main}>
        <div>
          <p className="text">My work</p>
          <h3 className="title">Projects.</h3>
          <p className={styles.text2}>
            These projects demonstrate my practical expertise and hands-on
            experience through real-world applications. Each project includes a
            brief overview, along with links to live demos and code
            repositories. They highlight my ability to solve complex challenges,
            adapt to diverse technologies, and efficiently manage end-to-end
            development projects.
          </p>
        </div>
        <Row className={styles.projects_section}>
          <Col xl={7} lg={7} md={11} className={styles.projects_container}>
            <Link
              className={styles.project_links}
              href="https://adventsearch.net/"
              target="_blank"
            >
              <div
                style={{
                  overflow: "hidden",
                  marginBottom: "1rem",
                  borderRadius: "30px",
                }}
              >
                <Image
                  className={styles.projects_img}
                  src={Project1}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "30px",
                  }}
                />
              </div>
              <div>
                <h4 className={styles.project_name}>Advent Calendar Game</h4>
                <p>
                  An interactive web-based advent calendar game allowing users
                  to click on doors to reveal riddles, surprises, and festive
                  content. Built with Laravel backend and JavaScript frontend
                  for dynamic, responsive, and engaging user experience.
                </p>
                <p style={{ fontWeight: "500" }}>
                  <span style={{ color: "black" }}>#Laravel</span>
                  <span style={{ color: "green" }}>#JavaScript</span>
                  #MySql
                </p>
              </div>
            </Link>
          </Col>
          <Col xl={7} lg={7} md={11} className={styles.projects_container}>
            <Link
              className={styles.project_links}
              href="https://gray-crow-442114.hostingersite.com/"
              target="_blank"
            >
              <div
                style={{
                  overflow: "hidden",
                  marginBottom: "1rem",
                  borderRadius: "30px",
                }}
              >
                <Image
                  className={styles.projects_img}
                  src={Project2}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "30px",
                  }}
                />
              </div>
              <div>
                <h4 className={styles.project_name}>Nevada Memory Care</h4>
                <p>
                  A modern, professional web platform for a Nevada-based client,
                  showcasing services and providing appointment management.
                  Designed with Laravel to ensure a seamless, responsive user
                  experience and optimized backend performance.
                </p>
                <p style={{ fontWeight: "500" }}>
                  <span style={{ color: "black" }}>#Laravel</span>
                  <span style={{ color: "green" }}>#JavaScript</span> #MySql
                </p>
              </div>
            </Link>
          </Col>
          <Col xl={7} lg={7} md={11} className={styles.projects_container}>
            <Link
              className={styles.project_links}
              href="https://availabletrader.co.uk/"
              target="_blank"
            >
              <div
                style={{
                  overflow: "hidden",
                  marginBottom: "1rem",
                  borderRadius: "30px",
                }}
              >
                <Image
                  className={styles.projects_img}
                  src={Project3}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "30px",
                  }}
                />
              </div>
              <div>
                <h4 className={styles.project_name}>
                  Available Traders Platform
                </h4>
                <p>
                  A dynamic platform for traders to list and manage businesses,
                  featuring Stripe subscription integration and role-based
                  dashboards for admin, traders, and users. Developed with
                  Laravel for secure, scalable, and user-friendly operations.
                </p>
                <p style={{ fontWeight: "500" }}>
                  <span style={{ color: "black" }}>#Laravel</span>
                  <span style={{ color: "green" }}>#RoleBasedAccess</span>{" "}
                  #ResponsiveUI{" "}
                </p>
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Project;
