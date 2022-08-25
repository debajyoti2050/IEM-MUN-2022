import React from "react";
import TeamM from "./TeamM.jsx";
import Teamm from "./teamm"
import Navbar from "../navbar/navbar"
import Footer from "../footer/Footer"
import "./team.css"

const Team = () => {
  return (
    <>
    <Navbar/>
    <section id="team" className="team pt-5">
      <div className="container pt-5 pb-5 mb-5">
      <header className="section-header">
          <h3>Our Secretariats</h3>
        </header>
        <div className="row center">
          {Teamm.map((e) => {
            return (
              <TeamM id={e.id} image={e.image} name={e.Name}/>
            );
          })}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Team;
