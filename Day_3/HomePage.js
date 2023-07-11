import React from 'react'
import { Link } from 'react-router-dom'
import "./Homepage.css"

function HomePage() {
  return (
    <div class="Main">
      <header>
      <h2 class ="logo">Logo</h2>
      <nav class="navigation">
        <a href="/">Home</a>
        <a href="b">About</a>
        <a href="c">Service</a>
        <a href="d">Contact</a>
        <button class="btnLogin-popup" href="/login">
        <Link to="/login">Login</Link>
        </button>
      </nav>
    </header> 
      <h1>Calculate your employee tax! here</h1>
    </div>
  )
}

export default HomePage