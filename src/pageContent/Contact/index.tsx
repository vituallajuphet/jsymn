import axios from "axios";
import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {

  
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

  const messgeCls = sendingStatus.type === 'error' ? 'border-red-400 mt-4 border rounded-md text-red-400 p-4 py-3 bg-white' : 'border-green-700 bg-white border rounded-md mt-4 text-green-700 p-4 py-3'

  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        < meta name="description" content="Get in touch with us to explore how our top-notch services in graphics design, video editing, photography, computer services, web and app development can elevate your digital presence and meet your specific needs."/> 
        <meta name='keywords' content="graphics design, video editing, photography, computer services, web development, app development, digital marketing, logo design, motion graphics, photo retouching, IT support, UI/UX design, social media management, content creation, website maintenance, software development, branding, image editing, responsive web design, mobile app development"/>
        <title>JSYNC | Contact Us</title>
    </Helmet>
      <div>
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
      <p>Or you amy submit a form below</p>
    </div>
    <div>
    <form action="#" onSubmit={handleSubmit} className="max-w-[900px] mt-8 mx-auto p-8  rounded-lg bg-[#185d75]">
      <div className="flex flex-col gap-4 justify-between">
        <div className="form_row sm:mb-4 mb-0  flex-col sm:flex-row flex w-full  justify-between gap-4">
          <label htmlFor="firstname" className="w-full">
            <input
              ref={nameRef}
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              className="w-full border border-gray-200 p-2 rounded-lg w-full"
            />
          </label>
          <label htmlFor="lastname" className="w-full">
            <input
            ref={lastRef}
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              className="w-full border border-gray-200 p-2 rounded-lg"
            />
          </label>
        </div>
        <div className="form_row mb-4 flex-col sm:flex-row flex w-full justify-between gap-4">
          <label htmlFor="firstname" className="w-full">
            <input
            ref={emailref}
              type="email"
              name="email"
              id="lastname"
              placeholder="Email Address"
              className="w-full border border-gray-200 p-2 rounded-lg"
            />
          </label>
          <label htmlFor="firstname" className="w-full">
            <input
            ref={emailref}
              type="text"
              name="phone"
              id="phone"
              placeholder="Contact Number"
              className="w-full border border-gray-200 p-2 rounded-lg"
            />
          </label>
        </div>
      </div>
      <div className="form_row mt-4">
        <label htmlFor="message">
          <textarea className="w-full border border-gray-200 p-2 rounded-lg resize-none h-[170px]" ref={messageRef} placeholder="Message" name="message" id="message"></textarea>
        </label>
      </div>
      <div className="form_row">
        <button disabled={loading} type="submit" className="w-full font-bold uppercase text-white mt-8 bg-[#859f5b] rounded-lg p-3">Submit <span className="inline-block ml-4 text-[19px]"><i className="fas fa-check"></i></span></button>
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
  </div>
    </>
  )
};

export default ContactUs;
