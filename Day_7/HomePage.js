import React from 'react'
import { Link } from 'react-router-dom'
import "./Homepage.css"
import Footer from './Footer';


// import"./Footer.css"

function HomePage() {
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
              <a href="#"></a>
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
          <button class="btnLogin-popup" href="/login">
            <Link to="/login"><h3>Login</h3></Link>
          </button>
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