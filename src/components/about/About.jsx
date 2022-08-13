import "./about.css";
import MUNLogo from '../../assets/MUN_Logo _Black.png'
import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>About Us</h3>
          <div className="row justify-content-between">
            <div className="col-lg-6 pt-5 pt-lg-0">
              <p >
                Over the years Institute of Engineering & Management, Kolkata
                has been a keen contributor to the Model United Nations
                Community. This year we are coming forth with the most awaited
                9th edition of IEM-MUN to be held offline & in-person after 3
                years of the pandemic.IEM-MUN 2022 will provide a platform to
                exhibit knowledge, interpersonal and leadership skills where the
                boundaries of every individual are tested, their patience worked
                and their intellect challenged. IEM-MUN provides a wonderful
                platform for young people to solve issues of global consequences
                and shape their journey in becoming future leaders. Being one of
                the most eagerly awaited MUN in the city, it is a wonderful
                opportunity for student delegates to take responsibility, rise
                to the occasion and propose solutions to geopolitical matters.
              </p>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center about-img">
              <img 
                src={MUNLogo}
                
                className="img-fluid "
                alt=""
                data-aos="zoom-in"
              />
            </div>
          </div>
        </header>
      </div>
    </section>
    
  );
}
