import React from 'react'
import { Link } from 'react-router-dom'

export default function Registration() {
  return (
    <>
      <header>
      <h2 class ="logo">Logo</h2>
      <div class="navigation">
        <a href="/">Home</a>
        <a href="b">About</a>
        <a href="c">Service</a>
        <a href="d">Contact</a>
      </div>
        <button class="btnLogin-popup" href="/">
        <Link to="/login">LOGIN</Link>
        </button>
    </header> 
    <div class="wrapper">
    <div class ="form-box login">
      <h2>Register</h2>
      <form action="a">
        <div class="input-box">
          <span class="icon"></span>
          <input type="string" required/>
          <label>Name</label>
        </div>
        <div class="input-box">
          <span class="icon"></span>
          <input type="email" required/>
          <label>Email</label>
        </div>
        <div class="input-box">
          <span class="icon"></span>
          <input type="password" required/>
          <label>Set Password</label>
        </div>
        <div class="remember-forgot">
          <label><input type="checkbox"/>Accept to all condition</label>
          <a href="gf">Already have a account</a>
        </div>
        <button type="submit" class="btn">Register</button>
        
      </form>
    </div>
    </div>
    
    </>
  )
}
