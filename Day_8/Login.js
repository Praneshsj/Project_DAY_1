import React, { useState } from 'react'
import "./LoginPage.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
export default function Login() {
  let navigate = useNavigate();

const[user,SetUser]=useState(
  {
    username:"",
    password:"",
  });

  const [showPassword, setShowPassword] = useState(false);
  const onInputChange=(e)=>{
    SetUser({...user,[e.target.name]:e.target.value})
  };

  const onSubmit =async (e) =>
  {
    e.preventDefault();
    await axios.post("http://localhost:8080/post",user);
    navigate("/");
    
  };
  

  return (
    <>
    <div className='loginpagebg'>
        <header>
      <h2 class ="logo">QuickTax</h2>
      <div class="navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        {/* <a href="/service">Service</a> */}
        <a href="/contactpage">Contact</a>
      </div>
        <button class="btnLogin-popup" href="/reg">
        <Link to="/reg">REGISTER</Link>
        </button>
    </header> 
    <div class="wrapper">
    <div class ="form-box login">
      <h2>Login</h2>
      <form action="a" onSubmit={onSubmit}>
        <div class="input-box">
          <span class="icon"></span>
          <input type="email" name="username" required/>
          <label>Email</label>
        </div>
        <div class="input-box">
          <span class="icon"></span>
          <input type="password" name="password" 
          onChange={}
          required/>
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
    </div>
    </>
  )
}
