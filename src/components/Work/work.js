import React, { useEffect } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Work1 from "../../../public/Images/work1.jpg";
import Work2 from "../../../public/Images/work2.png";
import Work3 from "../../../public/Images/work3.png";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./styling/work.module.css";

/**Components */

import Sections from "./sections";

function Work() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="myContainer">
      <div className={styles.laptop}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                color: "#bfbfbf",
              }}
            >
              December 2022 - October 2024
            </TimelineOppositeContent>
            <TimelineSeparator
              sx={{
                "& .MuiTimelineConnector-root": {
                  backgroundColor: "white",
                },
                "& .MuiTimelineDot-root": {
                  backgroundColor: "white",
                },
              }}
            >
              <TimelineConnector />
              <TimelineDot>
                <Image
                  src={Work2}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                data-aos="fade"
                data-aos-delay="0"
                variant="h6"
                component="span"
              >
                <Sections
                  position="Trisage solutions"
                  company="Trisaege solutions"
                  point1="Worked as a WordPress and Laravel Developer, delivering both custom-built solutions from scratch and enhancements to existing projects."
                  point2="Collaborated with designers, project managers, and QA teams to deliver projects within deadlines."
                  point3="Deployed and maintained projects on shared and cloud hosting environments."
                  point4="Converted Figma / UI designs into responsive, pixel-perfect layouts using HTML, CSS, JavaScript, Tailwind, and Bootstrap."
                />
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              style={{
                display: "flex",
                alignItems: "center",
                color: "#bfbfbf",
              }}
            >
              October 2024 - Augest 2025
            </TimelineOppositeContent>
            <TimelineSeparator
              sx={{
                "& .MuiTimelineConnector-root": {
                  backgroundColor: "white",
                },
                "& .MuiTimelineDot-root": {
                  backgroundColor: "white",
                },
              }}
            >
              <TimelineConnector />
              <TimelineDot color="primary">
                <Image
                  src={Work1}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                data-aos="fade"
                data-aos-delay="200"
                style={{ display: "flex", justifyContent: "end  " }}
                variant="h6"
                component="span"
              >
                <Sections
                  position="Freelance"
                  company="Nevada Project"
                  point1="Built and deployed a complete web solution for a Nevada-based client from scratch."
                  point2="Implemented a responsive and user-friendly UI using Laravel."
                  point3="Optimized application performance and database queries to enhance overall efficiency."
                  point4="Collaborated with the client to gather requirements, implement revisions, and ensure timely delivery of the project."
                />
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                color: "#bfbfbf",
              }}
            >
              January 2025
            </TimelineOppositeContent>
            <TimelineSeparator
              sx={{
                "& .MuiTimelineConnector-root": {
                  backgroundColor: "white",
                },
                "& .MuiTimelineDot-root": {
                  backgroundColor: "white",
                },
              }}
            >
              <TimelineConnector />
              <TimelineDot color="primary">
                <Image
                  src={Work1}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography data-aos="fade" variant="h6" component="span">
                <Sections
                  position="Freelance"
                  company="Advent Calendar Game Project"
                  point1="Developed a fully interactive advent calendar game featuring 25 clickable doors, each revealing dynamic riddles and content."
                  point2="Designed and implemented a Laravel-based backend to manage game content, riddles, and activation logic through an admin panel."
                  point3="Built a responsive and engaging user interface using JavaScript, HTML, and CSS to ensure smooth user interaction across devices."
                  point4="Implemented real-time UI updates and state management, enhancing user experience without page reloads."
                />
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              style={{
                display: "flex",
                alignItems: "center",
                color: "#bfbfbf",
              }}
            >
              April 2025
            </TimelineOppositeContent>
            <TimelineSeparator
              sx={{
                "& .MuiTimelineConnector-root": {
                  backgroundColor: "white",
                },
                "& .MuiTimelineDot-root": {
                  backgroundColor: "white",
                },
              }}
            >
              <TimelineConnector />
              <TimelineDot color="primary">
                <Image
                  src={Work1}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                data-aos="fade"
                data-aos-delay="200"
                style={{ display: "flex", justifyContent: "end  " }}
                variant="h6"
                component="span"
              >
                <Sections
                  position="Freelance"
                  company="Available Traders Platform"
                  point1="Developed a Laravel-based platform enabling traders to list and manage their businesses efficiently."
                  point2="Integrated Stripe monthly subscription payments for premium features and services."
                  point3="Implemented role-based authentication and customized dashboards for admin, traders, and users."
                  point4="Designed scalable and secure backend architecture, ensuring smooth multi-role access and feature management."
                />
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className={styles.mobile}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          className={styles.mobile_main}
        >
          <div>
            <Sections
              position="Trisage solutions"
              company="Trisaege solutions"
              point1="Worked as a WordPress and Laravel Developer, delivering both custom-built solutions from scratch and enhancements to existing projects."
              point2="Collaborated with designers, project managers, and QA teams to deliver projects within deadlines."
              point3="Deployed and maintained projects on shared and cloud hosting environments."
              point4="Converted Figma / UI designs into responsive, pixel-perfect layouts using HTML, CSS, JavaScript, Tailwind, and Bootstrap."
            />
          </div>
          <div>
            <Sections
              position="Freelance"
              company="Nevada Project"
              point1="Built and deployed a complete web solution for a Nevada-based client from scratch."
              point2="Implemented a responsive and user-friendly UI using Laravel."
              point3="Optimized application performance and database queries to enhance overall efficiency."
              point4="Collaborated with the client to gather requirements, implement revisions, and ensure timely delivery of the project."
            />
          </div>
          <div>
            <Sections
              position="Freelance"
              company="Advent Calendar Game Project"
              point1="Developed a fully interactive advent calendar game featuring 25 clickable doors, each revealing dynamic riddles and content."
              point2="Designed and implemented a Laravel-based backend to manage game content, riddles, and activation logic through an admin panel."
              point3="Built a responsive and engaging user interface using JavaScript, HTML, and CSS to ensure smooth user interaction across devices."
              point4="Implemented real-time UI updates and state management, enhancing user experience without page reloads."
            />
          </div>
          <div>
            <Sections
              position="Freelance"
              company="Available Traders Platform"
              point1="Developed a Laravel-based platform enabling traders to list and manage their businesses efficiently."
              point2="Integrated Stripe monthly subscription payments for premium features and services."
              point3="Implemented role-based authentication and customized dashboards for admin, traders, and users."
              point4="Designed scalable and secure backend architecture, ensuring smooth multi-role access and feature management."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
