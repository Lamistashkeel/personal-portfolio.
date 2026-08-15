'use client';

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webProjects = [
    // {
    //   title: "Ecommerce Website",
    //   description: "Design & Development",
    //   imgUrl: "/assets/img/project-web-img1.png",

    // },
    // {
    //   title: "AI Customer Support SaaS",
    //   description: "Smart Chatbot + Ticket Automation",
    //   imgUrl: "/assets/img/project-web-img2.png",
    // },

    {
      title: "Ms-Skin-Cinic",                         // ← add your real 4th web project title
      description: "skin-Clinic_website",
      imgUrl: "/assets/img/project-web-img4.png",
      liveUrl: "https://ms-skin-clinic.vercel.app/",  
    },
    {
      title: "Auto-Repair-Shop",                      // ← add your real 5th web project title
      description: "car-repair-website",
      imgUrl: "/assets/img/project-web-img5.png",
      liveUrl: " https://canadian-auto.vercel.app/", 
     
    },
      {
     title: "Digital agency Landing page",                   // ← add your real 6th web project title
     description: "Next.js + TypeScript + Tailwind",
      imgUrl: "/assets/img/project-web-img6.png",
    },
        {
      title: "Personal Finance Management System",
      description: "Planner & budgeting app",
      imgUrl: "/assets/img/project-web-img3.png",
    },
  ];

  const dataProjects = [
    {
      title: "Climate Data Analysis",
      description: "Data analysis and visualization",
      imgUrl: "/assets/img/project-img1.png",
    },
    {
      title: "Solar Power Generation Analysis",
      description: "Data analysis and visualization",
      imgUrl: "/assets/img/project-img2.png",
    },
    {
      title: "Zameen.com Real Estate Data Analysis",
      description: "Data analysis and visualization",
      imgUrl: "/assets/img/project-img3.png",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>I've developed a range of frontend applications, including a Finance Management System, E-commerce 
Website, Skin Clinic Website, and Auto/Car Repair Shop Website. All built with a focus on performance, usability, and responsive design.

In data analysis and visualization, I've worked on exploratory data analysis (EDA) projects involving real estate trends, climate data, and solar power generation, transforming raw datasets into meaningful insights through data cleaning, analysis, and professional visualizations.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                    {/* ← 6 web projects */}
                    <Tab.Pane eventKey="first">
                      <Row>
                        {webProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* ← 3 data projects */}
                    <Tab.Pane eventKey="second">
                      <Row>
                        {dataProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}