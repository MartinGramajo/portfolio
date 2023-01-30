import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/navicon1.png";
import navIcon2 from "../assets/img/navicon2.png";
import navIcon3 from "../assets/img/navicon3.png";

export default function Footer() {
  return (
    <footer className="footer mt-auto">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={4}>
            <div className="text-center my-4">
              <img className="logo-footer" src={logo} alt="Logo" />
            </div>
          </Col>
          <Col className="text-center " size={12} sm={4}>
            <h4>
              Contáctame <br /> Y pongámonos manos a la obra!
            </h4>
            <p>martingramajo08@gmail.com</p>
            <p>San Miguel de Tucumán, Tucumán, Argentina</p>
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/martin-gramajo-20740a221/"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href="https://wa.link/kp0oz5"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MartinGramajo"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>
              {" "}
              Copyright &copy;{new Date().getFullYear()} All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
