import React, { Component } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import Forms from './components/applyform/FinalForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PaymentSuccess from './pages/payment-success/PaymentSuccess'
import PaymentFailed from './pages/payment-failed/PaymentFailed'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Homepage/></Route>
        <Route path='/form'><Forms/></Route>
        <Route exact path='/payment-success'><PaymentSuccess/></Route>
        <Route exact path='/payment-failed'><PaymentFailed/></Route>
      </Switch>
    </Router>
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path='/' element={<Homepage />} />
    //     <Route exact path='/form' element={<Forms />} />
    //     <Route exact path='/paymentsuccess' element={<PaymentSuccess />} />
    //     <Route exact path='/paymentfailed' element={<PaymentFailed />} />
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
