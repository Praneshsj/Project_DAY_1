//import logo from './logo.svg';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
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
// import AddUser from './Profile';
import EditUser from './user/EditUser';
import ViewUser from './user/ViewUser';
// import profile from './Profile';
import AddUser from './user/AddUser';
import Profile from './Profile';
import Task from './Task';
import { Provider } from 'react-redux';
import { store } from './store';
import Tasktest from './Tasttest';



function App() {
  return (
    <>
    <div>
    
    
      {/* <BrowserRouter> */}
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/calc" element={<TaxCalculation />} />
          <Route path="/details" element={<TaxDetails />} />
          <Route path="/taxslab" element={<TaxSlab />} />
          <Route path="/prof" element={<Profile/>} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path='/task' element={<Task />} />
          
          
        </Routes>
    
      {/* </BrowserRouter> */}
    </div>
      {/* <ContactPage /> */}
      </>
  );
}

export default App;
