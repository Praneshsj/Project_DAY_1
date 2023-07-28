import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Contactpage.css"
import FontAwesome from 'react-fontawesome'
import axios from 'axios';

function ContactPage() {
    const[name,setname]=useState("");
    const[email,setEmail]=useState("");
    const[description,setdescription]=useState("");
    const handleSubmit = (e)=>{
            const data={
                name:name,
                email:email,
                description:description
            }
            axios.post("http://127.0.0.1:8081/addsupport",data);
            alert("successfull");
    }
    const handlename =(e)=>{
        setname(e.target.value);
    }
    const handleemail =(e)=>{
        setEmail(e.target.value);
    }
    const handledes =(e)=>{
        setdescription(e.target.value);
    }
    return (
        <>
            {/* <div className='Contactwhole'> */}

                <div class="AboutMain">
                    <header>
                        <div class="navigation">
                            <div class="logo" ></div>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            {/* <a href="/service">Service</a> */}
                            <a href="/contactpage">Contact</a>
                        </div>
                        <button class="btnLogin-popup" href="/login">
                            <Link to="/login"><h3>Login</h3></Link>
                        </button>
                    </header>
                    <div className='Contactform'>
                        <div className='contact'>

                            <h1 class="contactheader">Contact</h1>

                            <div class="contact-wrapper">

                                <form id="contact-form" class="form-horizontal" role="form" onSubmit={handleSubmit}>

                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            {/* <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required/> */}
                                            <h3>Name</h3>
                                            <input type="text" required onChange={handlename} />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            {/* <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required/> */}
                                            <h3>Email ID</h3>
                                            <input type="email" required onChange={handleemail}/>
                                        </div>
                                    </div><br></br>

                                    <h3>FeedBack</h3>
                                    <br></br>

                                    <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" onChange={handledes} required></textarea>

                                    <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                                        <div class="alt-send-button">
                                            <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                                        </div>

                                    </button>

                                </form>

                                <div class="direct-contact-container">

                                    <ul class="contact-list">
                                        <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Coimbatore,Tamil Nadu</span></i></li>

                                        <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">+91 9876301881 </a></span></i></li>

                                        <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">quicktaxofficial@gmail.com</a></span></i></li>

                                    </ul>


                                    <ul class="social-media-list">
                                        <li><a href="#" target="_blank" class="contact-icon">
                                            <i class="fa fa-github" aria-hidden="true"></i></a>
                                        </li>
                                        <li><a href="#" target="_blank" class="contact-icon">
                                            <i class="fa fa-codepen" aria-hidden="true"></i></a>
                                        </li>
                                        <li><a href="#" target="_blank" class="contact-icon">
                                            <i class="fa fa-twitter" aria-hidden="true"></i></a>
                                        </li>
                                        <li><a href="#" target="_blank" class="contact-icon">
                                            <i class="fa fa-instagram" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>


                                    <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            {/* </div> */}
            



        </>

    )
}

export default ContactPage