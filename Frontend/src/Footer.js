import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div>
      <div class="footer">
        <div class="heading">
          <h2>QuickTax<sup>™</sup></h2>
        </div>
        <div class="content">
          <div class="services">
            <h4>Services</h4>
            <p><a href="/calc">Tax Calculation</a></p>
            <p><a href="#">Managing Accounts</a></p>
            <p><a href="#">Audditing</a></p>
            <p><a href="#">Finance Education</a></p>
          </div>
          <div class="social-media">
            <h4>Social</h4>
            <p>
              <a href="https://www.linkedin.com/in/pranesh-sj-b569a3214/"
              ><i class="fab fa-linkedin"></i> Linkedin</a>
            </p>
            <p>
              <a href="#"
              ><i class="fab fa-twitter"></i> Twitter</a>
            </p>
            <p>
              <a href="https://github.com/Praneshsj"
              ><i class="fab fa-github"></i> Github</a>
            </p>
            <p>
              <a href="https://www.facebook.com/"
              ><i class="fab fa-facebook"></i> Facebook</a>
            </p>
            <p>
              <a href="https://www.instagram.com/"
              ><i class="fab fa-instagram"></i> Instagram</a>
            </p>
          </div>
          <div class="links">
            <h4>Quick links</h4>
            <p><a href="/">Home</a></p>
            <p><a href="/about">About</a></p>
            <p><a href="/calc">Calculation</a></p>
            <p><a href="/contactpage">Contact</a></p>
          </div>
          <div class="details">
            <h4 class="address">Address</h4>
            <p>
              SouthPost Colony,Gandhipuram, <br />
              Second street,Coimbatore
            </p>
            <h4 class="mobile">Mobile</h4>
            <p><a href="#">+91-122251212</a></p>
            <h4 class="mail">Email</h4>
            <p><a href="#">quicktaxofficial@gmail.com</a></p>
          </div>
        </div>

          <footer>
            <hr />
            © 2023.
          </footer>
        </div>
        </div>
        );
};

        export default Footer;