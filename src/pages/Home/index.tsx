import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Helmet } from 'react-helmet-async';
import {
  Section1,
  Section2,
  Section4,
  Section5,
  Section6,
  Events,
} from "./Sections";
import { motion } from "framer-motion";

const Home: React.FC<any> = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        < meta name="description" content="Unlock the full potential of your digital presence with Jsync's premier services in graphics design, video editing, photography, computer services, and web and app development."/> 
        <meta name='keywords' content="graphics design, video editing, photography, computer services, web development, app development, digital marketing, logo design, motion graphics, photo retouching, IT support, UI/UX design, social media management, content creation, website maintenance, software development, branding, image editing, responsive web design, mobile app development"/>
        <title>JSYNC | Home</title>
        
    </Helmet>
      <Header />
      <motion.div
        className="homepage main_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Banner />
        <Events />
        <Section1 />
        <Section2 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
