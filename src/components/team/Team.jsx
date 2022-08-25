import React from "react";
import TeamM from "./TeamM.jsx";
import Teamm from "./teamm"
import "./team.css"

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="row">
          {Teamm.map((e) => {
            return (
              <TeamM id={e.id} image={e.image} name={e.Name}/>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
