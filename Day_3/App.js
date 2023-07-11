//import logo from './logo.svg';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './style.css';
import Login from './Login';
import Registration from './Registration';
import HomePage from './HomePage';
// import Login from './login';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
       
          <Route path="/" element={<HomePage/>}/>
          <Route  path="/login" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
   
      </Routes>
    </BrowserRouter>

 
    </div>
  );
}

export default App;
