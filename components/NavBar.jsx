'use client';  // ← ADD THIS (line 1, brand new)

import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Image from "next/image";   // ← CHANGE: replaces all 4 svg imports below

// ← DELETE all 4 of these:
// import logo from '../assets/img/logo.svg';
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="/assets/img/logo.svg"   // ← CHANGE: was src={logo}
              alt="Logo"
              width={150}
              height={50}
              priority                     // ← ADD: navbar is above the fold
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>  {/* ← optional: fix label from "Link" → "Skills" */}
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/lamis-t-394795287/">
                  <Image src="/assets/img/nav-icon1.svg" alt="LinkedIn" width={20} height={20} />  {/* ← CHANGE */}
                </a>
                <a href="https://www.facebook.com/lamis.tashkeel.3">
                  <Image src="/assets/img/nav-icon2.svg" alt="Facebook" width={20} height={20} />  {/* ← CHANGE */}
                </a>
                <a href="#">
                  <Image src="/assets/img/nav-icon3.svg" alt="Icon" width={20} height={20} />      {/* ← CHANGE */}
                </a>
              </div>
              <button className="vvd" onClick={() => window.open('https://www.linkedin.com/in/lamis-t-394795287/', '_blank')}>
                <span>Let's Connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}