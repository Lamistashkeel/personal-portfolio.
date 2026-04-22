'use client';  // ← ADD THIS (line 1, brand new)

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";          // ← CHANGE: was import contactImg from "../assets/img/contact-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "@emailjs/browser";  // ← CHANGE: was "emailjs-com"

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,   // ← CHANGE 1: was import.meta.env.VITE_EMAILJS_SERVICE_ID
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,  // ← CHANGE 2: was import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      {
        from_name: `${formDetails.firstName} ${formDetails.lastName}`,
        from_email: formDetails.email,
        phone: formDetails.phone,
        message: formDetails.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY    // ← CHANGE 3: was import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Message sent successfully" });
    })
    .catch(() => {
      setButtonText("Send");
      setStatus({ success: false, message: "Something went wrong, try again." });
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <Image                                      // ← CHANGE: was <img>
                    src="/assets/img/contact-img.svg"        // ← CHANGE: was src={contactImg}
                    alt="Contact Us"
                    width={500}
                    height={500}
                  />
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

// ← DELETE the entire console.log at the bottom — it exposed your keys in production