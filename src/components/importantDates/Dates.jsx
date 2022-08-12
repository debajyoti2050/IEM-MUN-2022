import './dates.css'

import React from 'react'
import  Countdown from './Lund.jsx'

export default function Dates() {
 
  return (
    <section id="call-to-action" className="features">
    <div className="container" data-aos="fade-up">
      <header className="section-header">
        <h3>Important Dates</h3>
        
      </header>

      <div className="row">
       

        <div className="">
          <div className="row align-self-center gy-4">
            <div className="col-md-12" data-aos="zoom-out" data-aos-delay="200">
              <div className="feature-box align-items-center text-center">
                <h3>OCTOBER</h3>
                <h3 >&nbsp;14th, 15th & 16th</h3>
                <div classname="App">
                     <Countdown/>
                  </div>
              </div>
            </div>




          
          </div>
        </div>
      </div>
   
    </div>
  </section>
  )
}