import React, { FC } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getImage } from "../../utils";
import { PortableText } from "@portabletext/react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { motion } from "framer-motion";

type pageProps = {
  _id?: string;
  title?: string;
  slug?: string;
  published?: boolean;
  body?: any;
  [key: string]: any;
  bannerImage?: any;
};

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const image = getImage(value.asset._ref);
      return <img src={image} alt="image" />;
    },
    callToAction: ({ value, isInline }: any) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

const NonHomePages: FC<pageProps> = (props) => {
  const { title, bannerImage, body } = props;

  const hasImage = !!getImage(bannerImage?.asset?._ref);

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          style={
            hasImage
              ? {
                  backgroundImage: `url(${getImage(bannerImage?.asset?._ref)})`,
                }
              : {}
          }
          className={`w-full h-[500px] overflow-hidden bg-no-repeat bg-cover no-repeat bg-center relative`}
        >
          <div className="absolute bottom-0 left-0 bg-[#22222284] py-6 w-full">
            <div className="wrapper">
              <h1 className="text-white text-[33px]">{title}</h1>
            </div>
          </div>
        </div>
        <div className=" mt-6">
          <div className="wrapper">
            <Breadcrumbs current={title} />
          </div>
        </div>
        <div id="main">
          <div className="wrapper py-6 min-h-[400px]">
            <PortableText value={body} components={myPortableTextComponents} />
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default NonHomePages;
