import "./hero.css";
import HeroBG from "../../assets/BG_image.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Hero() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
              style={{ backgroundImage: "url(" + HeroBG + ")" }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2
                    className="animate__animated animate__fadeInDown"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    <img height="300rem" src="MUN_Logo.png" alt="mun logo" />
                  </h2> 
                  <h2 data-aos="fade-up" data-aos-delay="400">
                    MODEL UNITED NATIONS
                  </h2>
                  <Link to='/form'>
                  <a
                    href="/form"
                    className="btn-get-started scrollto animate__animated animate__fadeInUp"
                  >
                    Apply Now
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
