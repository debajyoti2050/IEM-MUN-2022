import './paymentfailed.css'

import React from 'react'
import { Link } from 'react-router-dom'
import {X} from 'react-bootstrap-icons'



export default function PaymentSuccess() {
  return (
    <div className="container">
   <div className="row">
      <div className="col-md-6 mx-auto mt-5">
         <div className="payment">
            <div className="payment_header">
               <div className="check"><i className="fa fa-check" aria-hidden="true"><X/></i></div>
            </div>
            <div className="failedcontent">
               <h1>Payment Failed !</h1>
               <p>Your payment failed because of an unwanted Error! </p>
               <Link to='/'>
               <a href="/">Go to Home</a>
               </Link>
            </div>
            
         </div>
      </div>
   </div>
</div>
  )
}
