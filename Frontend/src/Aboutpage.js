import React from 'react'
import { Link } from 'react-router-dom'
import "./Aboutpg.css"
import Footer from './Footer';
import "./Footer.css"
import aboutpg1 from '../src/components/aboutpg1.png'


function Aboutpage() {
  return (
    <>
      <div class="AboutMain">
        <header>
          <div class="navigation">
            <div class="logo" ></div>
            <a href="/">Home</a>
            <a href="/about">About</a>
            {/* <a href="/service">Service</a> */}
            <a href="/ContactPage">Contact</a>
          </div>
          <button class="btnLogin-popup" href="/login">
            <Link to="/login"><h3>Login</h3></Link>
          </button>
        </header>
        <br></br>
        <div className='abtpg'>
          <h2>"Welcome to our employee tax calculation site! We are dedicated to providing you with the best possible service when it comes to calculating your taxes. Our team of experts has years of experience in the field and is committed to helping you get the most out of your tax return.

            Our mission is simple: to make tax season as stress-free as possible for our clients. We understand that taxes can be confusing and overwhelming, which is why we’re here to help. Our services are designed to take the hassle out of tax season so you can focus on what really matters.

            At our employee tax calculation site, we offer a wide range of services to meet your needs. From calculating your taxes to providing advice on how to maximize your return, we’re here to help you every step of the way.

            Our team is made up of experienced professionals who are passionate about helping our clients succeed. We pride ourselves on providing personalized service and taking the time to get to know each and every one of our clients."  </h2>

        </div>
      </div>
      <div class="flex-containerabt">

        <div class="flex-child_magenta">
          <img src={aboutpg1} alt='image' style={{ height: 300, width: 480 }} />
        </div>

        <div class="flex-child_green">
          <h2>"Effortlessly Calculate Employee Tax with Precision and Ease!"</h2>
        </div>

      </div>
      
      <Footer />
    </>
  )
}

export default Aboutpage