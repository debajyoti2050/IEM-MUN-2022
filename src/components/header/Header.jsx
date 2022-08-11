import React from 'react'
import './header.css'
import IEMlogo from '../../assets/IEM_Logo.png'

export default function Header() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-11 d-flex align-items-center justify-content-between">
        
          <a href="index.html" className="logo"><img src="MUN_Logo.png" alt="" className="img-fluid" /><img 
              src={IEMlogo} alt="" className="img-fluid" /></a>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">Home</a>
              </li>
              <li><a className="nav-link scrollto" href="#about">About Us</a></li>
              <li>
                <a className="nav-link scrollto" href="#committees">Committee</a>
              </li>
              <li>
                
              </li>
             

              <li>
                <a className="nav-link scrollto" href="#contact">Contact</a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          
        </div>
      </div>
    </div>
  </header>
  )
}
