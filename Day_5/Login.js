import React from 'react'

import "./LoginPage.css"
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <>
        <header>
      <h2 class ="logo">Logo</h2>
      <div class="navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/service">Service</a>
        <a href="/contact">Contact</a>
      </div>
        <button class="btnLogin-popup" href="/reg">
        <Link to="/reg">REGISTER</Link>
        </button>
    </header> 
    <div class="wrapper">
    <div class ="form-box login">
      <h2>Login</h2>
      <form action="a">
        <div class="input-box">
          <span class="icon"></span>
          <input type="email" required/>
          <label>Email</label>
        </div>
        <div class="input-box">
          <span class="icon"></span>
          <input type="password" required/>
          <label>Password</label>
        </div>
        <div class="remember-forgot">
          <label><input type="checkbox"/>Remember me</label>
          <a href="gf">Forget Password..?</a>
        </div>
        <button type="submit" class="btn">Login</button>
        
      </form>
    </div>
    </div>
    </>
  )
}
