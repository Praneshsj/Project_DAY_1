// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Task.css";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { login } from "./reduxauth/actions";

// const Tasktest = (props) => {
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
//     <div className="todo">
//       <h3>Here the to do can be added.Once you complete your todo you can CLICK the icon near the to-do in the Home Page.<br></br>
//       By which we can clear it.<br></br>
//       Here is the list of Things we offer in this website<br></br><br></br>
//       1.Calculate Tax--Cal<br></br>
//       2.How to Calculate--HTC</h3>
//     </div>

//         <div class="wrappertsk">

//         <div className="auth-form-container fu">
//             <h2><center>TASK PAGE :</center></h2>
//             <br></br>
//             <form className="login-formtsk" onSubmit={handleSubmit}>
            
//                 <label htmlFor="username">Today Task</label>
//                 <br></br>
//                 <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="To-do" id="username" name="username" required />
//                 <br></br>
//                 {/* <label htmlFor="password">PASSWORD</label>
//                 <br></br> */}
//                 {/* <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" required />
//                 <br></br> */}
//                 <div className="abc">
//                 <button type="submit">SUBMIT</button>
//                 </div>
//                 <br></br>
//                 </form>
//                 {/* <center><Link to="/reg"><b><h4>Don't have an account ? Click to Register.</h4></b></Link></center>
//                 <br></br> */}
//                 <div className="lmo">
//                 <center><Link to="/"><b><u><i>Go to Home Page</i></u></b></Link></center>
//                 </div>
//                 </div>
//                 </div>
//                  </div>
//     )
// }


// export default Tasktest;