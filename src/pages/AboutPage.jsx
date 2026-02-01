import React from "react";
import About from "../components/About";
import AboutStatsSection from "../components/AboutStatsSection";
import WorldClassSection from "../components/WorldClassSection";
import ContactFormSection from "../components/ContactFormSection";
import Review from "../components/Review";

const AboutPage = () => {
  return (
    <div>
      <About />
      <AboutStatsSection />
      <WorldClassSection />
      <ContactFormSection />
      <Review />
    </div>
  );
};

export default AboutPage;
