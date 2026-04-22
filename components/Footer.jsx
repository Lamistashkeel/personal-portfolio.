import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";   // ← CHANGE: replaces all 4 svg imports below


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <Image
              src="/assets/img/logo.svg"   // ← CHANGE: was src={logo}
              alt="Logo"
              width={150}
              height={50}
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
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
            <p>Copyright 2026. All Rights Reserved</p>  {/* ← optional: update year */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}