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
        <div class="maintext">
          <h1>Calculate your employee tax! </h1>
          <button class="herehome" href="/">
            <Link to="/calc"><h2>Here</h2></Link>
          </button>
        </div>

      </div>


      <Footer />
    </>
  )
}

export default HomePage