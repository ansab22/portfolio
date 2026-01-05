import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import HeroBanner from "../HeroBackground/background";

/**Icons */
import { RxDividerVertical } from "react-icons/rx";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${styles["header_main"]} ${
          scrolled ? styles.scrolled : ""
        } myContainer`}
      >
        {["lg"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className={`${styles["header_back"]} ${
              scrolled ? styles.scrolledNav : ""
            } bg-body-tertiary mb-3`}
          >
            <Container fluid className="myContainer" style={{ padding: "0 " }}>
              <Navbar.Brand className={styles.logo} href="#">
                Ansab
                <span>
                  <RxDividerVertical />
                </span>
                Full STACK DEVELOPER
              </Navbar.Brand>
              <Navbar.Toggle
                className={styles.icon}
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header
                  style={{
                    backgroundColor: "rgb(34, 33, 33)",
                    color: "white",
                  }}
                  closeButton
                >
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={styles.offcanvas_body}>
                  <Nav
                    className={`${styles["menu"]} justify-content-end flex-grow-1 pe-3`}
                  >
                    <Link className={styles.menu_links} href="#about">
                      About
                    </Link>
                    <Link className={styles.menu_links} href="#work">
                      Work
                    </Link>
                    <Link className={styles.menu_links} href="#project">
                      Projects
                    </Link>
                    <Link className={styles.menu_links} href="#testimonials">
                      Testimonials
                    </Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
      <div>
        <HeroBanner />
      </div>
    </>
  );
}

export default Header;
