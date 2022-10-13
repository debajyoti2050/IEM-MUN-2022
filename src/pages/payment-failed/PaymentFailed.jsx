import './paymentfailed.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { X } from 'react-bootstrap-icons'

export default function PaymentSuccess() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-auto mt-5'>
          <div className='payment'>
            <div className='payment_header'>
              <div className='check'>
                <i className='fa fa-check' aria-hidden='true'>
                  <X />
                </i>
              </div>
            </div>
            <div className='failedcontent'>
              <h1>Registration Failed !</h1>
              <p>Your registration failed because of an unwanted Error! </p>
              <p>Try again later or register through this from</p>
              
                <a href='https://forms.gle/5sUkr11zH6hS4ptUA' style={{ background :"blue" , marginRight:5}}>Form</a>
              
              <Link to='/form'>
                <a href='/'>Try Again</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
