'use client';

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

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
    <section className="banner" id="home" style={{ position: 'relative', overflow: 'hidden' }}>

      <Image
        src="/assets/img/banner-bg.png"
        alt=""
        fill
        className="banner-bg"
        style={{ objectFit: 'cover', objectPosition: 'top center', zIndex: 0 }}
        priority
        quality={80}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Container>
          <Row className="align-items-center">

            {/* ← REMOVED TrackVisibility, added animate class directly */}
            <Col xs={12} md={6} xl={7} className="text-center text-md-start">
              <div className="animate__animated animate__fadeIn">  {/* ← always plays on load */}
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
              </div>
            </Col>

            {/* ← REMOVED TrackVisibility, animate class directly */}
            <Col xs={12} md={6} xl={5} className="d-none d-md-block">
              <div className="animate__animated animate__zoomIn">  {/* ← always plays on load */}
                <Image
                  src="/assets/img/header-img.svg"
                  alt="Header Img"
                  width={600}
                  height={600}
                  className="header-img"
                  priority                // ← ADD BACK since no TrackVisibility wrapper now
                />
              </div>
            </Col>

          </Row>
        </Container>
      </div>

    </section>
  )
}