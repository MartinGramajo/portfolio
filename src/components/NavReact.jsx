import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/navicon1.png";
import navIcon2 from "../assets/img/navicon2.png";
import navIcon3 from "../assets/img/navicon3.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export default function NavReact() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img className="logo-nav" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#proyectos"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Proyectos
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/martin-gramajo-20740a221/"
                >
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.link/kp0oz5"
                >
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/MartinGramajo"
                >
                  <img src={navIcon3} alt="Icon" />
                </a>
              </div>
              <HashLink
                className="text-decoration-none"
                to={"/MartinGramajoDevFrontendCV.pdf"}
                download
                target="_blank"
                rel="noreferrer"
              >
                <button className="">
                  <h6>Descargar Cv</h6>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}
