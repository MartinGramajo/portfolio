import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ProjectCard from "./ProjectCard";

/*appwebs*/
import viviendasbelgrano from "../assets/img/viviendasbelgrano.png";
import hoteltafi from "../assets/img/hoteltafi.png";
import grillman from "../assets/img/grillman.png";
import cga from "../assets/img/cga.png";
import gs from "../assets/img/gs.png";
import estancia from "../assets/img/laestancia.png";
import magno from "../assets/img/magno.png";

/*landings*/
import sebas from "../assets/img/sebas.png";
import zanovello from "../assets/img/zanovello.png";
import ena from "../assets/img/ena.png";
import seba from "../assets/img/seba.png";
import expreso from "../assets/img/expresotokyo.png";
import portal from "../assets/img/portal.png";

/*Personales*/
import rick from "../assets/img/rickandmorty.png";
import vete from "../assets/img/vete.png";
import pokeapi from "../assets/img/pokeapi.png";
import todo from "../assets/img/todo.png";

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
      imgUrl: sebas,
      url: "https://sebaspinelli.com/",
    },
    {
      title: "Zanovello Tax - Tax & Legal services",
      description:
        "Proyecto freelance en React. Landing Page para una firma de abogados y contadores con sede en Argentina y EEUU.",
      imgUrl: zanovello,
      url: "https://zanovellotax.com/",
    },
    {
      title: "Enacoin",
      description:
        "Proyecto freelance en React. Landing Page sobre educación financiera, emocional y crypto.",
      imgUrl: ena,
      url: "https://enacoin.net//",
    },
    {
      title: "Sebastian Filkestein",
      description:
        "Proyecto freelance en React. Landing Page estilo portfolio.",
      imgUrl: seba,
      url: "https://www.sebafinkelstein.com/",
    },
    {
      title: "Expreso Tokio",
      description:
        "Proyecto freelance en React. Landing Page para una empresa de transporte de cargas.",
      imgUrl: expreso,
      url: "https://expresotokio.com/",
    },
    {
      title: "Portal del Roble",
      description:
        "Proyecto freelance en React. Landing Page informativa sobre el barrio privado.",
      imgUrl: portal,
      url: "http://bunader.com.ar/portal-del-roble/",
    },
  ];

  const projectsPersonal = [
    {
      title: "Rick & Morty App",
      description:
        "Proyecto personal en React. Lista 15 resultados, muestra detalles de cada personaje utilizando la api rickandmorty. Ademas filtra por localizaciones y usa context para crear favoritos.",
      imgUrl: rick,
      url: "https://rick-and-morty-api-mg.vercel.app/",
    },
    {
      title: "Veterinaria Mi amigo leon",
      description:
        "Proyecto personal en React. Permite administrar turnos para los pacientes.",
      imgUrl: vete,
      url: "https://veterinaria-turnos-mg.vercel.app/",
    },
    {
      title: "To Do",
      description:
        "Proyecto personal en React. Consume la api(pokeapi.co). Simula una pokedex, permitiendo al usuario la búsqueda de su Pokemon y agregar sus favoritos. ",
      imgUrl: todo,
      url: "https://poke-api-min5p7eyv-martingramajo.vercel.app/",
    },
    {
      title: "PokeApi",
      description:
        "Proyecto freelance en React.  Crea una lista de tarea. Principales acciones: crear, eliminar, modificar y tachar cada tarea.",
      imgUrl: pokeapi,
      url: "https://to-do-list-mg.vercel.app/",
    },
  ];
  return (
    <section className="project" id="proyectos">
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
      <img className="background-image-right" src={colorSharp2} alt="fondo" />
    </section>
  );
}
