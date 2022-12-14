import React, { Component } from 'react'
import { Signup } from './Signup'
import './form.css'
import NavbarFixed from '../navbar/navbar'
import Footer from '../footer/Footer'
import { Refer } from './Refer'

function App() {
  return (
    <>
      <NavbarFixed />
      <section id='regform' className='regform'>
        <div className='container mt-4 mb-0'>
          <div className='row center'>
            <div className='col-md-7 col-lg-7 center drop drop1'>
              <Refer />
            </div>
            {/* <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
