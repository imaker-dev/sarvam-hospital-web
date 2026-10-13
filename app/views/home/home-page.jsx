import React from "react";
import Hero from "./components/hero";
import OurServices from "./components/our-services";
import FaqSection from "./components/faq-section";
import DoctorsSection from "./components/doctors-section";
import TestimonialSection from "./components/testimonial-section";
import AboutSection from "./components/about-section";
import ButtonExamples from "./components/ButtonExamples";
import StaffSection from "./components/staff-section";

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* <ButtonExamples /> */}
      <AboutSection />
      <OurServices />
      <DoctorsSection />
      <StaffSection />
      <TestimonialSection />
      <FaqSection />
    </>
  );
};

export default HomePage;
