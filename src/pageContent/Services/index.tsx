import React from "react";
import { Helmet } from "react-helmet-async";
import ReactHtmlParser from 'html-react-parser'

const Services = (props: any) => {

  const { customBodyContent } = props

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        < meta name="description" content="Explore our comprehensive range of services, including graphics design, video editing, photography, computer services, web and app development. Partner with us to elevate your digital presence and achieve your business goals in touch with us to explore how our top-notch services in graphics design, video editing, photography, computer services, web and app development can elevate your digital presence and meet your specific needs."/> 
        <meta name='keywords' content="graphics design, video editing, photography, computer services, web development, app development, digital marketing, logo design, motion graphics, photo retouching, IT support, UI/UX design, social media management, content creation, website maintenance, software development, branding, image editing, responsive web design, mobile app development"/>
        <title>JSYNC | Services</title>
    </Helmet>
    <div>
    <span className="md:max-w-[49%]" />
      {/* {ReactHtmlParser(customBodyContent)} */}
      <div className="flex md:flex-row flex-col gap-4 justify-between flex-wrap">
<div className="md:max-w-[49%]">
  <h2 className="mb-4 font-bold text-[#053a33]">Web and App Development:</h2>
  <p>At <strong>JSYNC</strong>, we specialize in crafting cutting-edge websites and mobile applications that engage your audience and drive growth. Our expert developers combine innovation, functionality, and user-centric design to deliver seamless digital experiences tailored to your specific needs. <span className="italic"> (Coming soon)</span></p>
</div>
<div className="md:max-w-[49%]">
  <h2 className="mb-4 font-bold text-[#053a33]">Graphics Design:</h2>
  <p>Unleash your brand's potential with our captivating graphics design services. Our talented designers create visually striking logos, branding materials, and digital designs that leave a lasting impression. We infuse creativity, strategic thinking, and attention to detail to ensure your brand stands out in a crowded marketplace.</p>
</div>
<div className="md:max-w-[49%]">
  <h2 className="mb-4 font-bold text-[#053a33]">Computer Repair:</h2>
  <p> Experience fast and reliable computer repair services to keep your devices running smoothly. Our expert technicians diagnose and resolve hardware and software issues efficiently, ensuring optimal performance and minimal downtime. Trust us to handle your computer repair needs with professionalism and expertise.</p>
</div>
<div className="md:max-w-[49%]">
  <h2 className="mb-4 font-bold text-[#053a33]">Video Editing: </h2>
  <p> Transform your raw footage into compelling visual stories with our professional video editing services. Our skilled editors bring creativity and precision to every project, combining seamless transitions, captivating effects, and engaging storytelling techniques to create videos that captivate and resonate with your audience.</p>
</div>
<div className="md:max-w-[49%]">
  <h2 className="mb-4 font-bold text-[#053a33]">Software Installation: </h2>
  <p> Simplify your technology setup with our hassle-free software installation services. Our knowledgeable technicians ensure the smooth installation and configuration of software, optimizing functionality and compatibility. Trust us to handle the technical aspects, allowing you to focus on your core business without interruptions.</p>
</div>
<div className="md:max-w-[49%]">
  <h2 className="mb-4 font-bold text-[#053a33]">Photography:  </h2>
  <p> Preserve your precious memories and capture the essence of special moments with our exceptional photography services. Our skilled photographers have an eye for detail and a passion for storytelling. From events and portraits to product photography, we create stunning visuals that evoke emotion and tell your unique story.</p>
</div>
</div>

<div className="mt-8">
  <p> At <strong>JSYNC</strong>, we are committed to delivering exceptional services in web and app development, graphics design, photography, computer repair, video editing, and software installation. Let us bring your ideas to life and provide solutions that enhance your digital presence and streamline your technology experience.</p>
</div>
</div>
    </>
  );
};

export default Services;

