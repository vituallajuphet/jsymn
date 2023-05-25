import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
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
