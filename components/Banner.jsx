'use client';

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["AI + MERN Developer", "Data analyst", "Web app Development"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => { tick(); }, delta);
    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    // ← ADD: position relative so the absolute image sits behind content
    <section className="banner" id="home" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* ← ADD THIS BLOCK: replaces background-image in CSS entirely */}
      {/* <Image
        src="/assets/img/banner-bg.png"
        alt=""
        fill                                      // ← fills the whole section
        style={{ objectFit: 'cover', objectPosition: 'top center', zIndex: 0 }}
        priority                                  // ← loads immediately, no lazy load
        quality={80}                              // ← compresses PNG → WebP automatically
      /> */}

      {/* Background — no animation */}
      <Image
        src="/assets/img/banner-bg.png"
        alt=""
        fill
        className="banner-bg"     // ← ADD
        style={{ objectFit: 'cover', objectPosition: 'top center', zIndex: 0 }}
        priority
        quality={80}
      />

    

      {/* ← ADD: wrapper pushes content above the background image */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7} className="text-center text-md-start">
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm Lamis,`}
                      <span className="txt-rotate">
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>I'm AI-driven MERN Stack Developer building scalable Web Apps, SaaS using
                      MongoDB, Express.js, React, and Node.js, with a focus on creating responsive
                      interfaces and efficient, scalable systems. I also work as a data analyst,
                      transforming raw data through cleaning and preprocessing, then turning it into
                      clear, professional visualizations using Python (Pandas, Matplotlib, Seaborn)
                      and Excel to deliver actionable insights.</p>
                    <button onClick={() => console.log('connect')}>
                      Let's Connect <ArrowRightCircle size={25} />
                    </button>
                  </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5} className="d-none d-md-block">
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    {/* <Image
                      src="/assets/img/header-img.svg"
                      alt="Header Img"
                      width={600}
                      height={600}
                      priority
                    /> */}

                    <Image
                      src="/assets/img/header-img.svg"
                      alt="Header Img"
                      width={600}
                      height={600}
                      priority
                      className="header-img"   // ← ADD
                    />
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </div>

    </section>
  )
}