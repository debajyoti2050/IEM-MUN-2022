import './App.css';
import React, { useEffect, useState } from "react";
import Homepage from './pages/Homepage';
import Form from './components/applyform/Form'
import "bootstrap/dist/css/bootstrap.min.css";
import Committeedesc from './components/eachcommittee/Committeedesc';
import GridLoader from "react-spinners/GridLoader";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PaymentSuccess from './pages/payment-success/PaymentSuccess';
import PaymentFailed from './pages/payment-failed/PaymentFailed';


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
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/form" element={<Form/>}/>
      <Route exact path="/committeedesc" element={<Committeedesc/>}/>
      </Routes>
      </BrowserRouter>
      )}
    </div>
   

  );
}

export default App;
