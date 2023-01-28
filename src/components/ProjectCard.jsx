import React from "react";

import { Col } from "react-bootstrap";

export default function ProjectCard({
  title,
  description,
  imgUrl,
  url,
  dependencias,
}) {
  return (
    <Col size={12} sm={6} md={4}>
      <a className="text-decoration-none text-white" href={url}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            {" "}
            <h5>{title}</h5>
            <h6>{description}</h6> <br />
            <h6>{dependencias}</h6>
          </div>
        </div>
      </a>
    </Col>
  );
}
