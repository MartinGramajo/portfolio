import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/navicon1.png";
import navIcon2 from "../assets/img/navicon2.png";
import navIcon3 from "../assets/img/navicon3.png";

export default function Footer() {
  return (
    <footer className="footer mt-auto">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={4}>
            <img src={logo} alt="Logo" />
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
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
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
