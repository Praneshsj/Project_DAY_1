// import React, { useState } from 'react'
// import "./LoginPage.css"
// import { Link, useNavigate } from 'react-router-dom'
// // import axios from 'axios';
// import { login } from './reduxauth/actions';
// import { useDispatch } from 'react-redux';
// // import { Link } from 'react-router-dom';
// const Login=(props)=> {
// //   let navigate = useNavigate();

// const[username,setUsername]=useState('');
// const[password,setPassword]=useState('');
// const data={
//     username:username,
//     password:password
//   }
//   const dispatch=useDispatch();
//   const onSubmit = (e) =>
//   {
//     e.preventDefault();
//     // axios.post("http://localhost:8080/post",user);
//     dispatch(login(username));
//     setUsername('');
//     // navigate("/");
//     // console.log(username+" "+password);
//   };


// return (
//   <>
//     <div className='loginpagebg'>
//         <header>
//       <h2 class ="logo">QuickTax</h2>
//       <div class="navigation">
//         <a href="/">Home</a>
//         <a href="/about">About</a>
//         {/* <a href="/service">Service</a> */}
//         <a href="/contactpage">Contact</a>
//       </div>

//         <button class="btnLogin-popup" href="/reg">
//         <Link to="/reg">REGISTER</Link>
//         </button>
//     </header> 
//     <div class="wrapper">
//     <div class ="form-box login">
//       <h2>Login</h2>
//       <form action="a" onSubmit={onSubmit}>
//         <div class="input-box">
//           <span class="icon"></span>
//           <input type="text" name="username" 
//           value={username}
//            onChange={(e)=>setUsername(e.target.value)}  id='username' required/>
//           <label>Username</label>
//         </div>
//         <div class="input-box">
//           <span class="icon"></span>
//           <input type="password" name="password" 
//           onChange={(e)=>setPassword(e.target.value)} id='password'
//           required/>
//           <label>Password</label>
//         </div>
//         <div class="remember-forgot">
//           <label><input type="checkbox"/>Remember me</label>
//           <a href="gf">Forget Password..?</a>
//         </div>
//       </form>
//         <button type="submit" class="btn">Login</button>
//         {/* <Link to='/'><button type="Home" class="btn">Home</button></Link> */}

        
//     </div>
//     </div>
//     </div>
    
//     </>
//   )
// }
// export default Login
//end
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./LoginPage.css"
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { login } from "./reduxauth/actions";

// const Login = (props) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const dispatch = useDispatch();
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       dispatch(login(username));
//       setUsername('');
//     const data = {
//       username:username,
//       password:password
//     }
//       axios.post("http://localhost:8180/adddetail",data)
//             .then(function (response) {
//                 console.log(JSON.stringify(response.data));
//               })
//               .catch(function (error) {
//                 console.log(error);
//               });
//     }
//     return (
        
//         <div className="login">
//         <br></br>
//         <br></br>
//         <br></br>
//         <header>
//       <h2 class ="logo">QuickTax</h2>
//       <div class="navigation">
//         <a href="/">Home</a>
//         <a href="/about">About</a>
//         {/* <a href="/service">Service</a> */}
//        <a href="/contactpage">Contact</a>
//      </div>
//        <button class="btnLogin-popup" href="/reg">
//         <Link to="/reg">REGISTER</Link>
//         </button>
//     </header> 
//         <div class="wrapper">

//         <div className="auth-form-container fu">
//             <h2><center>LOGIN PAGE :</center></h2>
//             <br></br>
//             <form className="login-form" onSubmit={handleSubmit}>
            
//                 <label htmlFor="username">Username</label>
//                 <br></br>
//                 <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" id="username" name="username" required />
//                 <br></br>
//                 <label htmlFor="password">PASSWORD</label>
//                 <br></br>
//                 <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" required />
//                 <br></br>
//                 <div className="abc">
//                 <button type="submit">SUBMIT</button>
//                 </div>
//                 <br></br>
//                 </form>
//                 <center><Link to="/reg"><b><h4>Don't have an account ? Click to Register.</h4></b></Link></center>
//                 <br></br>
//                 <div className="lmo">
//                 <center><Link to="/"><b><u><i>Go to Home Page</i></u></b></Link></center>
//                 </div>
//                 </div>
//                 </div>
//                 </div>
//     )
// }

// export default Login;
import React from 'react'
import { useState,useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import './LoginPage.css'
import axios from 'axios'
import { useDispatch } from "react-redux";

import { Link } from 'react-router-dom'



const Login = () => {
 const [name,setName]=useState('')
 const [id,setId]=useState('')  
 const [password,setPassword]=useState('')
 const [errors, setErrors] = useState({});
 const[isSubmit,setIsSubmit]=useState(false);
 const navigate =useNavigate();
 const dispatch=useDispatch();

 const handleName=(event)=>{
    event.preventDefault();
    setName(event.target.value)
  }
 
  const handleId=(event)=>{
    event.preventDefault();
    setId(event.target.value)
  }
  const handlePassword=(event)=>{
    event.preventDefault();
    setPassword(event.target.value)
  }
  const handleSubmit=async (event)=>{
    event.preventDefault();
    setErrors(validateForm({name,id,password}));
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/authenticate',{
        
        email:name,
        password:password
  
      });
      navigate('/');
      let token=response.data.token;
      localStorage.setItem('token',token);
      console.log(response.status);
      if(response.status===200){
        setName("");
        setId('');
        setPassword('');
  
        
  
      }
      
    }
    catch(error){
      console.log(error);
      setIsSubmit(false);
  
    }
    // setIsSubmit(true);
    
    
   
};
  

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Email is required';
      setIsSubmit(false);
    }

    else if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }
    else{
        setIsSubmit(true)
    }
    return errors;

    // setErrors(errors);
  };

  

  return (
    <>
  
    <div className='login'>
        <form className='login_form' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='gogo'>
            <div className='form-floating mb-3'>
            <label for='nm'>Email</label>
            <br></br>
            <input type='email' className='form-control'
            placeholder='abc@gmail.com'
            value={name} id='nm'
            onChange={handleName} />
            </div>
            {errors.name}
            </div>

            <div className='loginbox'>
              <div className="jo">
            <div className='form-floating mb-3'>
            <label for='pwd'>Password</label>
            <input type='password' className='form-control'
            placeholder='password' id='pwd'
            value={password}
            onChange={handlePassword}/>
            </div>
            </div>
            {errors.password && <span>{errors.password}</span>}
            </div>
            
            <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:180,height:50,margin:40}}>Sign In</button>

        </form>
        <br></br><br></br>
        <h2>Don't have an account? <a href='/reg'>SignUp</a></h2>
    </div>
    
    </>
  )
}

export default Login