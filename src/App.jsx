import './App.css';
import Homepage from './pages/Homepage';
import Form from './components/applyform/Form'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route exact path="/" element={<Homepage/>}/>
   <Route exact path="/form" element={<Form/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
