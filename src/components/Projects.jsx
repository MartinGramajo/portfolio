import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ProjectCard from "./ProjectCard";
import viviendasbelgrano from "../assets/img/viviendasbelgrano.png";
import hoteltafi from "../assets/img/hoteltafi.png";
import grillman from "../assets/img/grillman.png";
import cga from "../assets/img/cga.png";
import gs from "../assets/img/gs.png";
import estancia from "../assets/img/laestancia.png";
import magno from "../assets/img/magno.png";

export default function Projects() {
  const projectsApp = [
    {
      title: "Viviendas Belgrano Tucumán",
      description:
        "Proyecto freelance en React. Su objetivo es brindar información en general sobre Viviendas Belgrano.",
      dependencias: "Dependencias: react-bootstrap, react-router-dom, emailjs",
      imgUrl: viviendasbelgrano,
      url: "https://viviendasbelgrano.com.ar/",
    },
    {
      title: "Hotel Tafí",
      description:
        "Proyecto freelance creado en react con integración de widget de reservas para el hospedaje",
      dependencias:
        "Dependencias: react-bootstrap, react-router-dom, react-player, sweetalert2, swiper, emailjs",
      imgUrl: hoteltafi,
      url: "https://hoteltafi.com/",
    },
    {
      title: "Grillman 100% carne al fuego",
      description:
        "Proyecto freelance creado en react con integración de olaClick para realizar pedidos a domicilio",
      dependencias:
        "Dependencias: react-bootstrap, react-router-dom, react-player, sweetalert2, swiper, emailjs, fontawesome",
      imgUrl: grillman,
      url: "https://grillman.com.ar/",
    },
    {
      title: "Cámara de actividades gastronómicas Tucumán",
      description:
        "Proyecto freelance en React con integración de sistema de pago para los miembros de la cámara.",
      dependencias:
        "Dependencias: react-bootstrap, react-router-dom,react-player, swiper, emailjs, fontawesome",
      imgUrl: cga,
      url: "https://cga.ar/",
    },
    {
      title: "German Schilman - inmobiliaria & emprendimientos",
      description:
        "Proyecto freelance creado en react permite al usuario ver los distintos inmuebles para la venta/alquiler.",
      dependencias:
        "Dependencias: react-bootstrap, react-router-dom, react-player, sweetalert2, swiper, emailjs",
      imgUrl: gs,
      url: "http://www.germanschilman.com/",
    },
    {
      title: "La Estancia Gastrohome",
      description:
        "Proyecto freelance creado en react, permite al usuario realizar pedidos a domicilio o reservar mesa",
      dependencias:
        "Dependencias: react-bootstrap, react-router-dom, react-player, sweetalert2, swiper, emailjs, fontawesome",
      imgUrl: estancia,
      url: "https://laestanciagastrohome.es/",
    },
    {
      title: "Magno-group",
      description:
        "Proyecto freelance creado en react permite al usuario conocer los distintos servicios y rubros de la empresa.",
      dependencias:
        "Dependencias: react-bootstrap, react-router-dom, react-player, sweetalert2, swiper, emailjs, fontawesome",
      imgUrl: magno,
      url: "https://www.magno-group.com/",
    },
  ];

  const projectsLanding = [
    {
      title: "Sebastian Spinelli",
      description:
        "Proyecto freelance en React. Landing Page estilo portfolio.",
      imgUrl: viviendasbelgrano,
      url: "https://viviendasbelgrano.com.ar/",
    },
    {
      title: "Sebastian Spinelli",
      description:
        "Proyecto freelance en React. Landing Page estilo portfolio.",
      imgUrl: viviendasbelgrano,
      url: "https://viviendasbelgrano.com.ar/",
    },
    {
      title: "Sebastian Spinelli",
      description:
        "Proyecto freelance en React. Landing Page estilo portfolio.",
      imgUrl: viviendasbelgrano,
      url: "https://viviendasbelgrano.com.ar/",
    },
    {
      title: "Sebastian Spinelli",
      description:
        "Proyecto freelance en React. Landing Page estilo portfolio.",
      imgUrl: viviendasbelgrano,
      url: "https://viviendasbelgrano.com.ar/",
    },
    {
      title: "Sebastian Spinelli",
      description:
        "Proyecto freelance en React. Landing Page estilo portfolio.",
      imgUrl: viviendasbelgrano,
      url: "https://viviendasbelgrano.com.ar/",
    },
    {
      title: "Sebastian Spinelli",
      description:
        "Proyecto freelance en React. Landing Page estilo portfolio.",
      imgUrl: viviendasbelgrano,
      url: "https://viviendasbelgrano.com.ar/",
    },
  ];

  const projectsPersonal = [
    {
      title: "Sebastian Spinelli",
      description:
        "Proyecto freelance en React. Landing Page estilo portfolio.",
      imgUrl: viviendasbelgrano,
      url: "https://viviendasbelgrano.com.ar/",
    },
    {
      title: "Sebastian Spinelli",
      description:
        "Proyecto freelance en React. Landing Page estilo portfolio.",
      imgUrl: viviendasbelgrano,
      url: "https://viviendasbelgrano.com.ar/",
    },
    {
      title: "Sebastian Spinelli",
      description:
        "Proyecto freelance en React. Landing Page estilo portfolio.",
      imgUrl: viviendasbelgrano,
      url: "https://viviendasbelgrano.com.ar/",
    },
    {
      title: "Sebastian Spinelli",
      description:
        "Proyecto freelance en React. Landing Page estilo portfolio.",
      imgUrl: viviendasbelgrano,
      url: "https://viviendasbelgrano.com.ar/",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="mb-5">Proyectos</h2>
                  <p>"Trabajemos juntos y creemos algo único"</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link className="title-responsive" eventKey="first">
                          App Webs
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          className="title-responsive"
                          eventKey="second"
                        >
                          Landings
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="title-responsive" eventKey="third">
                          Personales
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row className="py-4">
                          {projectsApp.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="py-4">
                          {projectsLanding.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="py-4">
                          {projectsPersonal.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
