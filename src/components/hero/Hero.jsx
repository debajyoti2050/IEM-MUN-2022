import "./hero.css";
import HeroBG from '../../assets/BG_image.png'
import React from "react";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <ol
            id="hero-carousel-indicators"
            className="carousel-indicators"
            hidden
          ></ol>

          <div className="carousel-inner" role="listbox">
            <div
              className="carousel-item active"
              
              style={{backgroundImage: "url(" + HeroBG + ")"}}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    <img height="300rem" src="MUN_Logo.png" alt="mun logo" />
                  </h2>
                  <h2 className="animate__animated animate__fadeInUp">
                    MODEL UNITED NATIONS
                  </h2>
                  <a
                    href="/"
                    className="btn-get-started scrollto animate__animated animate__fadeInUp"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
