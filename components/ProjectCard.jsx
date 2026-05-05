

import { Col } from "react-bootstrap";
import Image from "next/image";

export const ProjectCard = ({ title, description, imgUrl, liveUrl }) => {  // ← ADD liveUrl
  return (
    <Col size={12} sm={6} md={4}>
      <div
        className="proj-imgbx"
        onClick={() => liveUrl && window.open(liveUrl, '_blank')}         // ← ADD
        style={{ cursor: liveUrl ? 'pointer' : 'default' }}              // ← ADD
      >
        <Image
          src={imgUrl}
          alt={title}
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