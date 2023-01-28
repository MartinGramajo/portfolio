import React from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import html from "../assets/img/html-5.png";
import css from "../assets/img/css-3.png";
import js from "../assets/img/js.png";
import react from "../assets/img/react.png";
import reactnative from "../assets/img/react-native.jpg";
import github from "../assets/img/github.png";
import api from "../assets/img/api.png";
import mongodb from "../assets/img/mongodb.png";
import express from "../assets/img/express-js.png";
import Projects from "./Projects";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="mb-5">Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>Html</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>Css</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={github} alt="Image" />
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React js </h5>
                </div>
                <div className="item">
                  <img src={reactnative} alt="Image" />
                  <h5>React Native</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image" />
                  <h5>Express js</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
