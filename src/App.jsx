
import React, { Component ,useState , useEffect } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import Forms from './components/applyform/FinalForm'
import Committees from './components/eachcommittee/Committeedesc'
import 'bootstrap/dist/css/bootstrap.min.css'
import GridLoader from "react-spinners/GridLoader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PaymentSuccess from './pages/payment-success/PaymentSuccess'
import PaymentFailed from './pages/payment-failed/PaymentFailed'

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="APP">
     {loading ? (
      <div className="munloader">
      <GridLoader

      className="loader"
        color={"#44CE16"}
        // css={override}
        loading={loading}
        size={30}
      />
      </div>
     
    ):(


    <Router>
      <Switch>
        <Route exact path='/'><Homepage/></Route>
        {/* <Route path='/form'><Forms/></Route> */}
        <Route path='/committeedesc'><Committees/></Route>
        <Route exact path='/payment-success'><PaymentSuccess/></Route>
        <Route exact path='/payment-failed'><PaymentFailed/></Route>
      </Switch>
    </Router>
    )}
    </div>
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
