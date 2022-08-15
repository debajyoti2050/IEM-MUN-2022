import './App.css';
import Homepage from './pages/Homepage';
import Form from './components/applyform/Form'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PaymentSuccess from './pages/payment-success/PaymentSuccess';
import PaymentFailed from './pages/payment-failed/PaymentFailed';


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route exact path="/" element={<Homepage/>}/>
   <Route exact path="/form" element={<Form/>}/>
   <Route exact path="/paymentsuccess" element={<PaymentSuccess/>}/>
   <Route exact path="/paymentfailed" element={<PaymentFailed/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
