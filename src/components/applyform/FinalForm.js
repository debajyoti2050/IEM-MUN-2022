import React, { Component }  from 'react';
import rocketImg from './assets/rocket.png';
import { Signup } from './components/Signup';
import './form.css'
import NavbarFixed from '../navbar/navbar';
import Footer from '../footer/Footer';

function App() {
  return (
    <>
    <NavbarFixed/>
    <div className="container mt-5 mb-5">
      <div className="row center">
        <div className="col-md-7 col-lg-7 center">
          <Signup />
        </div>
        {/* <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div> */}
      </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default App;