import React from "react";

const ContactUs = () => {
  return <div>
    <h3 className="mb-4">Get in Touch with Us </h3>
    <div>
     <p>We would love to hear from you! If you have any questions, inquiries, or want to discuss a project, feel free to reach out to us. Our team at <strong>JSYNC</strong> is here to provide you with the assistance you need.</p>
    </div>
    <div className="mt-4 flex flex-col gap-1">
      <div>
        Contact Number: <strong>0955 375 8132</strong> or <strong>0956 005 9255</strong>
      </div>

      <div>Email: <strong><a href="mailto:jsync28@gmail.com">jsync28@gmail.com</a></strong></div>
      <div>
      Address: <strong><address className="inline">Brgy. Poblacion Mahaplag Leyte, Philippines, 6512</address></strong>
      </div>
    </div>
    <div className="mt-4">
      <p>Or you submit a form below</p>
    </div>
  </div>;
};

export default ContactUs;
