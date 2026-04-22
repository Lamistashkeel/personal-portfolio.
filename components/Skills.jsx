'use client';  // ← ADD (carousel needs it)

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// ← DELETE all 5 of these:
// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

import Image from "next/image";  // ← ADD

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>MERN Stack (MongoDB, Express.js, React, Node.js), REST APIs, JavaScript, HTML, CSS, Responsive Design,<br/>
              Python (Pandas, Matplotlib, Seaborn), Data Analysis, EDA, Data Visualization, Excel,
              Git, GitHub, Postman</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <Image src="/assets/img/meter1.svg" alt="Skill meter" width={100} height={100} />  {/* ← CHANGE */}
                  <h5>AI + (MERN) Developer</h5>
                </div>
                <div className="item">
                  <Image src="/assets/img/meter2.svg" alt="Skill meter" width={100} height={100} />  {/* ← CHANGE */}
                  <h5>Data analysis and visualization</h5>
                </div>
                <div className="item">
                  <Image src="/assets/img/meter3.svg" alt="Skill meter" width={100} height={100} />  {/* ← CHANGE */}
                  <h5>Data analyst</h5>
                </div>
                <div className="item">
                  <Image src="/assets/img/meter1.svg" alt="Skill meter" width={100} height={100} />  {/* ← CHANGE */}
                  <h5>Web app Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/assets/img/color-sharp.png"   // ← CHANGE: was src={colorSharp}
        alt=""
        className="background-image-left"
        width={600}
        height={600}
      />
    </section>
  )
}