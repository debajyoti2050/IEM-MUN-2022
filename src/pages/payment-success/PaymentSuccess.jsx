import './paymentsuccess.css'

import React from 'react'
import { Link } from 'react-router-dom'
import {Check2} from 'react-bootstrap-icons'



export default function PaymentSuccess() {
  return (
    <div className="container">
   <div className="row">
      <div className="col-md-6 mx-auto mt-5">
         <div className="payment">
            <div className="successpayment_header">
               <div className="check"><i className="fa fa-check" aria-hidden="true"><Check2/></i></div>
            </div>
            <div className="successcontent">
               <h1>Payment Success !</h1>
               <p>Thank You for your registration in IEM MUN 2022.Please check your mail for the confirmation. </p>
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
