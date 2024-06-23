import AboutSection from "@/components/frontend/home/AboutSection/AboutSection";
import Banner from "@/components/frontend/home/Banner/Banner";
import Client from "@/components/frontend/home/Client/Client";
import ContactSection from "@/components/frontend/home/ContactSection/ContactSection";
import Faq from "@/components/frontend/home/Faq/Faq";
import HomePortfolio from "@/components/frontend/home/HomePortfolio/HomePortfolio";
import HomeTestimonial from "@/components/frontend/home/HomeTestimonial/HomeTestimonial";
import Services from "@/components/frontend/home/Services/Services";
import WorkFlow from "@/components/frontend/home/WorkFlow/WorkFlow";

import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Client */}
      <Client />
      {/* Services */}
      <Services />

      {/* About Section */}
      <AboutSection />

      {/* PortFolio */}
      <HomePortfolio />
      <WorkFlow />
      {/* Faq */}
      <Faq />
      {/* Testimonial */}
      <HomeTestimonial />
      {/* Contact */}
      <ContactSection />
    </div>
  );
};

export default HomePage;
