import React, { Component }  from 'react';
import rocketImg from './assets/rocket.png';
import { Signup } from './components/Signup';
import './form.css'

function App() {
  return (
    <div className="container mt-3">
      <div className="row center">
        <div className="col-md-7 col-lg-7 center">
          <Signup />
        </div>
        {/* <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div> */}
      </div>
    </div>
  );
}

export default App;