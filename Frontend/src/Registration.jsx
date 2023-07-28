// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Registration() {
//   return (
//     <>
//       <header>
//       <h2 class ="logo">QuickTax</h2>
//       <div class="navigation">
//         <a href="/">Home</a>
//         <a href="/about">About</a>
//         {/* <a href="c">Service</a> */}
//         <a href="contactpage">Contact</a>
//       </div>
//         <button class="btnLogin-popup" href="/">
//         <Link to="/login">LOGIN</Link>
//         </button>
//     </header> 
//     <div class="wrapper">
//     <div class ="form-box login">
//       <h2>Register</h2>
//       <form action="a">
//         <div class="input-box">
//           <span class="icon"></span>
//           <input type="string" required/>
//           <label>Name</label>
//         </div>
//         <div class="

//         input-box">
//           <span class="icon"></span>
//           <input type="email" required/>
//           <label>Email</label>
//         </div>
//         <div class="input-box">
//           <span class="icon"></span>
//           <input type="password" required/>
//           <label>Set Password</label>
//         </div>
//         <div class="remember-forgot">
//           <label><input type="checkbox"/>Accept to all condition</label>
//           <a href="gf">Already have a account</a>
//         </div>
//         <button type="submit" class="btn">Register</button>

//       </form>
//     </div>
//     </div>

//     </>
//   )
// }
//end
// import React, { useState } from 'react'
// import "./LoginPage.css"
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';



// export default function Registration() {
//   let navigate = useNavigate();

// const[user,SetUser]=useState(
//   {

//     username:"",
//     email:"",
//     password:"",

//   });

//   const onInputChange=(e)=>{
//     SetUser({...user,[e.target.name]:e.target.value})
//   };

//   const onSubmit =async (e) =>
//   {
//     e.preventDefault();
//     await axios.post("http://localhost:8080/post",user);
//     navigate("/");

//   };


//   return (
//     <>
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
//         <Link to="/login">Login</Link>
//         </button>
//     </header> 
//     <div class="wrapper">
//     <div class ="form-box login">
//       <h2>Register</h2>
//       <form action="a" onSubmit={onSubmit}>
//         <div class="input-box">
//           <span class="icon"></span>
//           <input type="email" name="email" 
//            onChange={(e)=>onInputChange(e)}required/>
//           <label>Email</label>
//         </div>
//         <div class="input-box">
//           <span class="icon"></span>
//           <input type="text" name="username" style={{border:"none"}}
//           onChange={(e)=>onInputChange(e)}
//           required/>
//           <label>Username</label>
//         </div>
//         <div class="input-box">
//           <span class="icon"></span>
//           <input type="password" name="password" 
//           onChange={(e)=>onInputChange(e)}
//           required/>
//           <label>Password</label>
//         </div>
//         <div class="remember-forgot">
//           <label><input type="checkbox"/>Remember me</label>
//           <a href="gf">Forget Password..?</a>
//         </div>
//         <button type="submit" class="btn">Login</button>

//       </form>
//     </div>
//     </div>
//     </div>

//     </>
//   )
// }
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
// import "./Registration.css"


const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validateForm({ name, email, password }));
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/register',{
        name:name,
        email:email,
        password:password

      });
      console.log(response.status);
      if(response.status===200){
        setName("");
        setEmail('');
        setPassword('');



      }

    }
    catch(error){
      alert(error);
      setIsSubmit(false);

    }
    if (isSubmit) {
      navigate('/home');
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Username is required';
      setIsSubmit(false);
    }

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
      setIsSubmit(false);
    }

    if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }

    setIsSubmit(Object.keys(errors).length === 0);

    return errors;
  };

  return (
    <>
    <header>
      <h2 class ="logo">QuickTax</h2>
     <div class="navigation">
         <a href="/">Home</a>
         <a href="/about">About</a>
         {/* <a href="/service">Service</a> */}
         <a href="/contactpage">Contact</a>
       </div>

        <button class="btnLogin-popup" href="/reg">
         <Link to="/login">Login</Link>
         </button>
     </header>
     <div className='wholeregister'>
          <h1>Register</h1>
     <div class="wrapper">
      <div className='login'><center>
        <form className='login_form' onSubmit={handleSubmit}>
          <br></br>
          <div className='gogo'>
            <div className='gogo'>
              <br></br><br></br>
              <label htmlFor='nm'>Username</label>
              <br />
              <input
                type='name'
                className='in'
                placeholder='username'
                value={name}
                id='nm'
                onChange={handleName}
              />
            </div>
            {errors.name}
          </div><br></br>
<div className="gogo">
            <label htmlFor='email'>Email</label>
          <div className='gogo'>
            <input
              type='email'
              className='in'
              placeholder='email'
              id='email'
              value={email}
              onChange={handleEmail}
            />
          </div>
          </div>
          {errors.email && <span>{errors.email}</span>}

          <div className='loginbox'>
            <div className="gogo">
               <label htmlFor='pwd'>Password</label>
            <div className='gogo'>
              <input
                type='password'
                className='in'
                placeholder='password'
                id='pwd'
                value={password}
                onChange={handlePassword}
              />
            </div>


            {errors.password && <span>{errors.password}</span>}
          </div>
          </div>

          <button
            type='submit'
            className='btn btn-secondary'
            onChange={handleSubmit}
            style={{
              background: 'black',
              color: 'white',
              width: 180,
              height: 50,
              margin: 40,
            }}
          >
            Sign In
          </button>
        </form>
        </center>
      </div>
      </div>
      </div>
    </>
  );
};

export default Registration;
// import React from 'react'
// import { useState, useEffect } from 'react'
// import { redirect, useNavigate } from 'react-router-dom'
// import './LoginPage.css'
// import axios from 'axios'
// import { useDispatch } from "react-redux";

// import { Link } from 'react-router-dom'



// const Registration = () => {
//   const [name, setName] = useState('')
//   const [id, setId] = useState('')
//   const [password, setPassword] = useState('')
//   const [errors, setErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleName = (event) => {
//     event.preventDefault();
//     setName(event.target.value)
//   }

//   const handleId = (event) => {
//     event.preventDefault();
//     setId(event.target.value)
//   }
//   const handlePassword = (event) => {
//     event.preventDefault();
//     setPassword(event.target.value)
//   }
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setErrors(validateForm({ name, id, password }));
//     try {
//       const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {

//         email: name,
//         password: password

//       });
//       navigate('/');
//       let token = response.data.token;
//       localStorage.setItem('token', token);
//       console.log(response.status);
//       if (response.status === 200) {
//         setName("");
//         setId('');
//         setPassword('');

//       }

//     }
//     catch (error) {
//       console.log(error);
//       setIsSubmit(false);

//     }
//     // setIsSubmit(true);

//   };

//   const validateForm = (values) => {
//     const errors = {};

//     if (values.name.trim() === '') {
//       errors.name = 'Email is required';
//       setIsSubmit(false);
//     }

//     else if (values.password.trim() === '') {
//       errors.password = 'Password is required';
//       setIsSubmit(false);
//     } else if (values.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//       setIsSubmit(false);
//     }
//     else {
//       setIsSubmit(true)
//     }
//     return errors;

//     // setErrors(errors);
//   };



//   return (
//     <>
//       <header>
//         <h2 class="logo">QuickTax</h2>
//         <div class="navigation">
//           <a href="/">Home</a>
//           <a href="/about">About</a>
//           {/* <a href="/service">Service</a> */}
//           <a href="/contactpage">Contact</a>
//         </div>

//         <button class="btnLogin-popup" href="/reg">
//           <Link to="/login">Login</Link>
//         </button>
//       </header>
//       <div className='wholelogin'>
//               <center><h1>Register</h1></center>
//         <div class="wrapper">
//           <div className='login'>
//             <form className='login_form' onSubmit={handleSubmit}>
//               <br></br>
//               <div className='gogo'>
//                 <div className='form-floating mb-3'>
//                   <center> <label>Email</label></center>
//                   <br></br>
//                   <input type='email' className='form-control'
//                     placeholder='usermail@gmail.com'
//                     value={name} id='nm'
//                     onChange={handleName} />
//                 </div>
//                 {errors.name}
//               </div>
//               <div className='gogo'>
//                 <div className='form-floating mb-3'>
//                   <center> <label>Name</label></center>
//                   <br></br>
//                   <input type='text' className='form-control'
//                     placeholder='usermail@gmail.com'
//                     value={name} id='nm'
//                     onChange={handleName} />
//                 </div>
//                 {errors.name}
//               </div>


//               <div className='loginbox'>
//                 <div className="jo">
//                   <div className='form-floating mb-3'>
//                     <center><label for='pwd'>Password</label></center>
//                     <br></br>
//                     <input type='password' className='form-control'
//                       placeholder='password' id='pwd'
//                       value={password}
//                       onChange={handlePassword} />
//                   </div>
//                 </div>
//                 {errors.password && <span>{errors.password}</span>}
//               </div>

//               <button type='submit' className='btn btn-secondary' style={{ background: 'black', color: 'white', width: 180, height: 50, margin: 40 }}>Sign In</button>

//             </form>
//             <br></br><br></br>
//             {/* <h2>Don't have an account? <a href='/reg'>SignUp</a></h2> */}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Registration