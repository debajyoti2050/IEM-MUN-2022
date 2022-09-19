import "./hero.css";
import HeroBG from "../../assets/BG_image.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Hero() {
  const history = useHistory();
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

                  <a
                    onClick={async () => {
                      try {
                        await axios
                          .get("https://cema-mun.herokuapp.com/api/healthcheck")
                          .then((res) => {
                            if (res.status === 200) {
                              history.push("/form");
                            } else {
                              history.push("/alternateform");
                            }
                          });
                      } catch (err) {
                        history.push("/alternateform");
                      }
                    }}
                    className="btn-get-started scrollto animate__animated animate__fadeInUp"
                  >
                    Register Now
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
