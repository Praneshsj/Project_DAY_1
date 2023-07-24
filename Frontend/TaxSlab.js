import React from 'react'
import "./TaxSlab.css"
import { Link } from 'react-router-dom'
import taxslab from '../src/components/taxslab.png'

function TaxSlab() {
  return (
    <>
    <header>
          <div class="navigation">
            <div class="logo" ></div>
            <a href="/">Home</a>
            {/* <a href="/service">Service</a> */}
            <a href="/calc"> Calculate Tax</a>
            <a href="/taxslab">Tax Slab</a>
          </div>
          <button class="btnLogin-popup" href="/login">
            <Link to="/login"><h3>Login</h3></Link>
          </button>
        </header>
    <div className='taxslabcontent'>
    <h1 className='headingtaxslab'> Tax Slab </h1><br></br>
    <h2> The Indian Income-tax works on the basis of a slab system and the tax is levied accordingly on individual taxpayers. 
    Slab implies the different tax rates charged for different income ranges. In other words, the more your income,
     the more tax you have to pay.These slabs of income tax are revised every year during the budget announcement.
     Again, These slab rates are segregated for different categories of taxpayers</h2>
     <br></br>
     </div>
     <div className='taximage'>
     <img src={taxslab} alt='image' style={{ height: 600, width: 680 }} />

    </div>
    </>
  )
}

export default TaxSlab