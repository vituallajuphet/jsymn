import React, { FC } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getImage } from "../../utils";
import { PortableText } from "@portabletext/react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { motion } from "framer-motion";
import { Content } from "../../pageContent";
import { Helmet } from "react-helmet-async";

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
  const { title, bannerImage, body, customContent, customBodyContent} = props;

  const hasImage = !!getImage(bannerImage?.asset?._ref);
  const Component = customContent ? Content[customContent] : undefined;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        < meta name="description" content="Unlock the full potential of your digital presence with Jsync's premier services in graphics design, video editing, photography, computer services, and web and app development."/> 
          <meta name='keywords' content="graphics design, video editing, photography, computer services, web development, app development, digital marketing, logo design, motion graphics, photo retouching, IT support, UI/UX design, social media management, content creation, website maintenance, software development, branding, image editing, responsive web design, mobile app development"/>
        <title>JSYNC | {title}</title>
    </Helmet>
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
              : { background: "#263136" }
          }
          className={`w-full lg:h-[500px] h-[300px] overflow-hidden bg-no-repeat bg-cover no-repeat bg-center relative  flex flex-row items-center justify-center`}
        >
          {!hasImage && (
            <p className="text-white text-[30px] font-thin italic">
              No image preview
            </p>
          )}
          <div className="absolute bottom-0 left-0 bg-[#22222284] py-6 w-full xl:px-0 px-4">
            <div className="wrapper">
              <h1 className="text-white text-[33px]">{title}</h1>
            </div>
          </div>
        </div>
        <div className=" mt-6">
          <div className="wrapper xl:px-0 px-4">
            <Breadcrumbs current={title} />
          </div>
        </div>
        <div id="main">
          <div className="wrapper py-6 min-h-[400px] xl:px-0 px-4">
            {Component ? (
              <Component {...props} />
            ) : (
              <PortableText
                value={body}
                components={myPortableTextComponents}
              />
            )}
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default NonHomePages;
