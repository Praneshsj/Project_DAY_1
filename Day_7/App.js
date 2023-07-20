//import logo from './logo.svg';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import './style.css';
import './LoginPage.css';
import Login from './Login';
import Registration from './Registration';
import HomePage from './HomePage';
import Aboutpage from './Aboutpage';
import ContactPage from './ContactPage';
import TaxCalculation from './TaxCalculation';
import TaxDetails from './TaxDetails';
import TaxSlab from './TaxSlab';


function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/calc" element={<TaxCalculation />} />
          <Route path="/details" element={<TaxDetails />} />
          <Route path="/taxslab" element={<TaxSlab />} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
      {/* <ContactPage /> */}
      </>
  );
}

export default App;
