import React from "react";
import Header from "@/components/Header/header";
import About from "@/components/About/about";
import Work from "@/components/Work/index";
import Project from "@/components/Projects/project";
import Testimonial from "@/components/Testimonial/testimonial";
import Contact from "@/components/Contact/contact";

function index() {
  return (
    <div>
      <Header />
      <About />
      <Work />
      <Project />
      <Testimonial />
      {/* <Contact /> */}
    </div>
  );
}

export default index;
