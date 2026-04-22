import { Col } from "react-bootstrap";
import Image from "next/image";   // ← ADD

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <Image
          src={imgUrl}           // ← stays the same, path comes from Projects.jsx
          alt={title}            // ← CHANGE: was no alt, now uses title for accessibility
          width={400}
          height={300}
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}