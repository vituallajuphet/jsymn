import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../../data";
import axios from 'axios'

function Footer() {

  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [sendingStatus, setSendingStatus] = useState({
    message:'',
    type: 'error'
  });

  const nameRef = useRef<any>('')
  const lastRef = useRef<any>('')
  const emailref = useRef<any>('')
  const messageRef = useRef<any>('')
  const emailSubRef = useRef<any>('')

  const handleSubmit = (e: any) => {
      setErr('')
      e.preventDefault()
      if(
        !nameRef?.current?.value || !lastRef?.current?.value || !emailref?.current?.value ||  !messageRef?.current?.value
      ) {
        setErr('Fields are required!')
        return
      }
      
      setLoading(true)
      sendEmail();
  }

  const handleSubmitSubscribe = (e: any) => {
    e.preventDefault()
    if(
      !emailSubRef?.current?.value
    ) {
      return
    }
    
    setLoading(true)
    sendSubscribe();
}

  const sendSubscribe = async () => {
    const fdata = new FormData();
    fdata.append('email', emailref?.current?.value)
    axios({
      method: 'post',
      url: 'https://jsync.online/api/subscribe.php',
      data:fdata,
    }).then(res=> {
      setLoading(false)
      setSendingStatus(() => {
        if(res.data['sent-email']=== 'success') {
          return {
            message: "Email sent Successfully!",
            type: 'success'
          }
        }
        return {
          message: "Sending email failed!",
          type: 'error'
        }
      })
    }).catch(err => {
      return {
        message: "there is an error in sending email",
        type: 'error'
      }
    })

  }



  const sendEmail = async () => {
    const fdata = new FormData();
    fdata.append('fname', nameRef?.current?.value)
    fdata.append('lname', lastRef?.current?.value)
    fdata.append('email', emailref?.current?.value)
    fdata.append('message', messageRef?.current?.value)
    axios({
      method: 'post',
      url: 'https://jsync.online/api/sendemail.php',
      data:fdata,
    }).then(res=> {
      setLoading(false)
      setSendingStatus(() => {
        if(res.data['sent-email']=== 'success') {
          return {
            message: "Email sent Successfully!",
            type: 'success'
          }
        }
        return {
          message: "Sending email failed!",
          type: 'error'
        }
      })
    }).catch(err => {
      return {
        message: "there is an error in sending email",
        type: 'error'
      }
    })

  }

  const messgeCls = sendingStatus.type === 'error' ? 'border-red-400 border rounded-md text-red-400 p-4 py-3' : 'border-green-700 border rounded-md text-green-700 p-4 py-3'
  
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
              <form action="#" onSubmit={handleSubmit}>
                <div className="form_row">
                  <label htmlFor="firstname">
                    <input
                      ref={nameRef}
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="First Name"
                    />
                  </label>
                  <label htmlFor="lastname">
                    <input
                    ref={lastRef}
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
                    ref={emailref}
                      type="email"
                      name="email"
                      id="lastname"
                      placeholder="Email Address"
                    />
                  </label>
                </div>
                <div className="form_row">
                  <label htmlFor="message">
                    <textarea ref={messageRef} placeholder="Message" name="message" id="message"></textarea>
                  </label>
                </div>
                <div className="form_row">
                  <button disabled={loading} type="submit">Submit</button>
                </div>
                {!!err ? (
                  <div className="border-red-400 border rounded-md text-red-400 p-4 py-3">
                  Fields are required!
                </div>
                ) : null}
                {!!sendingStatus.message ? (
                  <div className={messgeCls}>
                    {sendingStatus.message}
                </div>
                ) : null}
              </form>
            </div>
            <div className="ftr_map">
              <iframe
                title="map"
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
              <div className="flex flex-row items-center">
                <a href="#" className="w-[85px] h-[85px]">
                  <img
                    className="block "
                    src={require("../../assets/images/logo.png")}
                    alt="JSYNC"
                  />
                </a>
                <h3 className="ml-3 text-[38px] text-[#044862]">JSYNC</h3>
              </div>

              <p className="text-sm pt-6 leading-6">
              Experience the synergy of creativity and precision with <strong>JSYNC</strong>. Contact us today to unlock the full potential of graphics design and photography for your brand or personal project. Let us synchronize our talents to create visuals that leave a lasting impression.
              </p>
            </div>
            <div className="flex flex-col w-[245px]">
              <h3 className="font-bold text-[18px] text-[#044862]">Address</h3>
              <div className="my-4 mb-8">
                <address className="whitespace-pre-line not-italic text-sm leading-6">
                  Brgy. Poblacion Mahaplag Leyte Philippines, 6512
                </address>
              </div>
              <h3 className="font-bold text-[18px] text-[#044862]">
                Contact Information
              </h3>
              <div className="mt-2 text-sm">
                <div className="flex flex-row gap-2 ">
                  <span className="text-lg text-[#323232] mr-1">
                    <i className="fas fa-phone"></i>
                  </span>
                  <div className="flex-col flex">
                  <a href="tel:09058927403" className="font-bold">
                    0955 375 8132
                  </a>
                  <a href="tel:09058927403" className="font-bold">
                   0956 005 9255
                  </a>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center mt-1 ">
                  <span className="text-lg text-[#323232] mr-1">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <a href="mailto:jsync28@gmail.com" className="font-bold">
                  jsync28@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="min-w-[150px]">
              <h3 className="font-bold text-[20px] text-[#044862] mb-2">
                Links
              </h3>
              <div>
                <ul className="text-sm flex-col gap-[7px] flex">
                  {navLinks.map((nav) => {
                    return (
                      <li>
                        <NavLink
                          className={({ isActive, isPending }) =>
                            isActive ? "text-[#0ab2cc]" : "text-gray-700"
                          }
                          key={nav.id}
                          to={nav.path}
                        >
                          {nav.label}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <h3 className="font-bold text-[20px] text-[#044862] mb-4">
                Newsletter
              </h3>
              <div>
                <form action="#" onSubmit={handleSubmitSubscribe}>
                  <label htmlFor="email">
                    <input
                      required
                      className="border p-2 w-full"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email Address"
                      ref={emailSubRef}
                    />
                  </label>
                  <button
                    type="submit"
                    className="bg-[#859f5b] p-2 rounded-full mt-4 px-4 text-white transition-opacity duration-1000 ease-out opacity-100 hover:opacity-40"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
              <div className="mt-6">
                <span className="flex flex-row items-center gap-4 text-[23px] pl-2">
                  <a target="_blank" rel="noreferrer"  href="https://www.facebook.com/profile.php?id=100087108311774&mibextid=ZbWKwL">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a target="_blank" rel="noreferrer"  href="https://www.instagram.com">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a target="_blank" rel="noreferrer"  href="https://www.twitter.com">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white py-6 bg-[#044862]">
        <span>Copyright &copy; 2022 JSYNC - All Rights Reserved</span>
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
