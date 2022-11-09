import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Layout/Banner/Banner";
import Brands from "../Layout/Brands/Brands";
import Contact from "../Layout/Contact/Contact";
import Portfolio from "../Layout/Portfolio/Portfolio";
import Pricing from "../Layout/Pricing/Pricing";
import Specialization from "../Layout/Specialization/Specialization";
import Testimonials from "../Layout/Testimonials/Testimonials";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <Brands />
      <Specialization />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
