import React, { FC } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageNotfound: FC<any> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <div className="">
        <div className="wrapper  h-[600px]">
          <main className="h-full flex-1 items-center flex flex-col justify-center text-center">
            <h1 className="text-[80px] text-[#185d75]">
              404
              <span className="block text-[#185d75] text-[40px]">
                Opps! Page Not Found
              </span>
            </h1>
            <p className="mt-12">
              Sorry, the page you're looking for doesn't exist. If you think
              something is broken, report a problem.
            </p>
            <Link
              to="/"
              className="inline-block bg-[#185d75] p-2 rounded-full text-white px-6 mt-8 transition-opacity duration-1000 ease-out opacity-100 hover:opacity-40"
            >
              Back To Home
            </Link>
          </main>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default PageNotfound;
