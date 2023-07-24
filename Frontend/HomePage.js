import React from 'react'
import { Link } from 'react-router-dom'
// import { Button } from '@mui/material';
import "./Homepage.css"
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './reduxauth/actions';
import AppsIcon from '@mui/icons-material/Apps'
// import"./Footer.css"

const HomePage=()=> {
  const user=useSelector((state)=>state.username);
  const dispatch=useDispatch();
  const handleLogout =(e) =>{
    e.preventDefault();
    // console.log(username+" "+password);
    dispatch(logout());
    // SetUsername('');
}
  return (
    <>
      <div class="HomepgMain">
        <header>
          <div class="dropdown">
            <button class="dropbtn">=</button>
            <div class="dropdown-content">
              <a href="/login">Login</a>
              <a href="/about">About</a>
              <a href="/contactpage">Contact</a>
              <a href="/calc">Calculation</a>
              <a href="taxslab">Tax Slab</a>
              {/* <a href="#"></a> */}
            </div>
          </div>

          <div class="glow">
            <h2 class="glow">QuickTax</h2>
          </div>

          <div class="navigation">

            <a href="/">Home</a>
            <a href="/about">About</a>
            {/* <a href="/service">Service</a> */}
            <a href="/contactpage">Contact</a>
          </div>
          { user ?(<><AppsIcon classname="icon" onClick={handleLogout}>star</AppsIcon><h2>{user}</h2></>):
           <Link to='/login' style={{textDecoration:'none',color:'black'}}>Login</Link>}
           {/* {user?(<><AppsIcon classname="icon" onClick={handleLogout}>star</AppsIcon><h2>{user}</h2></>):
        <Tab value="four" href="/login" label="LOGIN" /> */}
      {/* } */}
          {/* <button class="btnLogin-popup" href="/login">
            <Link to="/login"><h3>Login</h3></Link>
          </button> */}
        </header>
        <div className='maindiv'>
        <div class="maintext">
          <h1>Calculate your employee tax! </h1>
          {/* <button class="herehome" href="/">
            <Link to="/details"><h2>Here</h2></Link>
          </button> */}
          <button class="glow-on-hover" type="button" href="/">
          <Link to="/details"><h2>Here</h2> </Link></button>
          <div className='homebg'>
         
          </div>
          </div>
        </div>
        
      </div>



      <Footer />
    </>
  )
}

export default HomePage