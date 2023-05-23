import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter className="footer">
      <div className="wrapper">
        <div className="footer_cont pb-16">
          <div className="ftr_top">
            <h2>
              How Can We Help? <span>Send Us a Message</span>
            </h2>
          </div>
          <div className="ftr_sections">
            <div className="ftr_form">
              <p>Need to get in touch with us, just fill up the form below.</p>
              <form action="">
                <div className="form_row">
                  <label htmlFor="firstname">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="First Name"
                    />
                  </label>
                  <label htmlFor="lastname">
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Last Name"
                    />
                  </label>
                </div>
                <div className="form_row">
                  <label htmlFor="email">
                    <input
                      type="email"
                      name="email"
                      id="lastname"
                      placeholder="Email Address"
                    />
                  </label>
                </div>
                <div className="form_row">
                  <label htmlFor="message">
                    <textarea name="message" id="message"></textarea>
                  </label>
                </div>
                <div className="form_row">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
            <div className="ftr_map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.4168541622529!2d124.96489250905469!3d10.605154848551635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307a7ab590cf8ed%3A0xb1c00d20c5a99172!2sJ-SYNC!5e0!3m2!1sen!2sph!4v1660145955071!5m2!1sen!2sph"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[300px] bg-white py-16">
        <div className="wrapper">
          <div className="flex flex-row gap-6">
            <div className="flex flex-col max-w-[30%]">
              <a href="#" className="w-[85px] h-[85px]">
                <img
                  className="block "
                  src={require("../../assets/images/logo.png")}
                  alt="JSYNC"
                />
              </a>
              <p className="text-sm pt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae magni dolorem porro dicta debitis. Repudiandae error
                inventore incidunt dolor non
              </p>
            </div>
            <div className="flex flex-col w-[245px]">
              <h3 className="font-bold text-[18px] text-[#044862]">Address</h3>
              <div className="my-4 mb-8">
                <address className="whitespace-pre-line not-italic text-sm">
                  Brgy. Poblacion Mahaplag Leyte Philippines, 6512
                </address>
              </div>
              <h3 className="font-bold text-[18px] text-[#044862]">
                Contact Information
              </h3>
              <div className="mt-2 text-sm">
                <div className="flex flex-row gap-2 items-center">
                  <span className="text-lg">
                    <i className="fas fa-phone"></i>
                  </span>
                  <a href="tel:09058927403" className="font-bold">
                    +639058927403
                  </a>
                </div>
                <div className="flex flex-row gap-2 items-center mt-1">
                  <span className="text-lg">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <a href="mailto:jsync@gmail.com" className="font-bold">
                    jsync@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[20px] text-[#044862]">Links</h3>
            </div>
            <div>
              <h3 className="font-bold text-[20px] text-[#044862]">
                Newsletter
              </h3>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: #d5d5d5;
  min-height: 300px;
  padding: 4rem 0 0;
  .ftr_top {
    text-align: center;
    h2 {
      font-weight: bold;
      font-size: 30px;
      span {
        display: block;
        font-weight: normal;
        font-size: 20px;
      }
    }
  }
  .ftr_sections {
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    .ftr_form {
      width: 100%;
      form {
        margin-right: 8rem;
        margin-top: 2rem;
      }
      .form_row {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1rem;
      }
      label {
        display: block;
        width: 100%;
      }
      input {
        display: block;
        padding: 9px;
        border: 1px solid #cbcbcb;
        width: 100%;
      }
      button {
        display: block;
        width: 100%;
        padding: 9px;
        font-family: inherit;
        background-color: #859f5b;
        color: #fff;
        text-transform: uppercase;
        border: none;
      }
      textarea {
        display: block;
        padding: 9px;
        border: 1px solid #cbcbcb;
        width: 100%;
        resize: none;
        font-family: inherit;
      }
    }
    .ftr_map {
      width: 500px;
      height: 350px;
      flex-shrink: 0;
      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    }
  }
`;

export default Footer;
