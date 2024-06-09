import AboutSection from "@/components/frontend/home/AboutSection/AboutSection";
import Banner from "@/components/frontend/home/Banner/Banner";
import Client from "@/components/frontend/home/Client/Client";
import Faq from "@/components/frontend/home/Faq/Faq";
import HomePortfolio from "@/components/frontend/home/HomePortfolio/HomePortfolio";
import Services from "@/components/frontend/home/Services/Services";
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
      {/* Faq */}
      <Faq />
      {/* Contact */}
    </div>
  );
};

export default HomePage;
