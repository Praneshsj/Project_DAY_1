import React from 'react'
import "./TaxDetails.css"
import { Link } from 'react-router-dom'
import aboutpg1 from '../src/components/aboutpg1.png'

function TaxDetails() {
  return (
    <>
      <header>
        <div class="navigation">
          <div class="logo" ></div>
          <a href="/">Home</a>
          <a href="/taxslab">Tax Slab</a>
          <a href="/calc"> Calculate Tax</a>
        </div>
        <button class="btnLogin-popup" href="/login">
          <Link to="/login"><h3>Login</h3></Link>
        </button>
      </header>

      <div className='TaxDetaiscontent'>
        <h2>What is Tax Calculator?</h2><br></br>
        <h4>The Income tax calculator is an easy-to-use online tool that helps you estimate your taxes based on your income after the Union Budget is presented.
          We have updated our tool in line with the income tax changes proposed in the Union Budget 2023-24.</h4>
        <br></br>
        <h2>How to use the Income tax calculator for FY 2023-24 (AY 2024-25)?</h2><br></br>
        <h4>Following are the steps to use the tax calculator:<br></br><br></br>
          1. Choose the financial year for which you want your taxes to be calculated.<br></br><br></br>

          2. Select your age accordingly. Tax liability in India differs based on the age groups.<br></br><br></br>

          3. Click on 'Go to Next Step'<br></br><br></br>

          4. Enter your taxable salary i.e. salary after deducting various exemptions such as HRA, LTA and so on. (if you want to know your tax liability under the old tax slabs)<br></br><br></br>

          Or else, just enter your salary i.e salary without availing exemptions such as HRA, LTA, professional tax and so on. (if you want to know your tax liability under the new tax slabs)<br></br><br></br>

          5. Along with taxable salary, you must enter other details such as interest income, rental income, interest paid on home loan for rented, and interest paid on loan for self occupied property.<br></br><br></br>

          6. For Income from Digital Assets, enter the net income ( Sale consideration less Cost of Acquisition), such income is taxed at 30% Plus applicable surcharge and cess.<br></br><br></br>

          7. Click on 'Go to Next Step' again.<br></br><br></br>

          8. In case, you want to calculate your taxes under the old tax slabs,you will have to enter your tax saving investments under section 80C, 80D, 80G, 80E and 80TTA.<br></br><br></br>

          9. Click on 'Calculate' to get your tax liability. You will also be able to see a comparison of your pre-budget and post-budget tax liability (old tax slabs and new tax slabs).<br></br><br></br></h4>
        <h2>Components for Calculating Income Tax : </h2> <br></br>
        <h4> A few key components should be remembered when calculating income taxes. Here's a list of these key components:<br></br><br></br>

          <b>Financial Year (FY)</b> -The year in which money is earned is referred to as the financial year. It is the time period from April 1st of this year to March 31st of the next year.
          You must prepare all of your investment proofs and gather all of your documentation throughout this time.
          For example - FY 2022-23 is period between 1st April 2022 to 31st March 2023<br></br><br></br>
          Assessment Year (AY) - A year in which your income from a particular financial year will be assessed is called an assessment year.
          For example - AY 2023-24 is the year when your income from 1st April 2022 to 31st March 2023 will be calculated.<br></br><br></br>
          Tax Deductions - They allows you to reduce your total taxable income as per the Section 80 under the Chapter VI-A of Income Tax Act.
          For example - As per tax provisions under Section 80C of Chapter VIA you can claim tax deduction of up to ₹ 1,50,000 on premiums paid for life insurance policies, other investments prescribed under Chapter VI.
          This is one of the most-opted ways of saving tax.<br></br><br></br>
          Tax Exemption - Exemption means exclusion, i.e. if certain income is exempt from tax then it will not contribute to the total income of a person. The exempted income is not considered as a part of total income,
          the whole amount is an exemption for the taxpayer. Some of the exemptions are as follows:<br></br><br></br>
          Salary Income Exemptions, Allowances and Deductions
          <br></br><br></br>
          Leave travel concession as contained in clause (5) of section 10;<br></br>
          House rent allowance as contained in clause (13A) of section 10;<br></br>
          Some of the allowance as contained in clause (14) of section 10;<br></br>
          Death-cum-retirement gratuity received by Government servants [Section 10(10)(i)]<br></br>
          Standard deduction, the deduction for entertainment allowance and employment/ professional tax as contained in section 16;<br></br><br></br>
          Rental Income from House Property Deductions<br></br><br></br>
           Interest paid on home loan under section 24. Deduction against interest on home loan is applicable in respect of self-occupied or vacant property.<br></br><br></br>
           In any assessment year, if there is a loss under the head “Income from house property”, such loss will first be set-off against income from any other head to the extent of ₹2,00,000 during the same year.
          The unabsorbed loss will be carriedforward to the following assessment year and this carry forward loss can not be set -off from any other head except income under the head “Income from house property”.
          Such loss shall be carry forwad for 8 years.<br></br><br></br>
          Deduction From Business or Profession Income
          Expense incurred in relation to running such business or profession
          Depreciation on assets, and additional depreciation on such assets.
          Deduction for donation for or expenditure on scientific research
          Rent, Rates, Taxes, Repairs, and Insurance of building
          Any bonus or commission paid to the employees
          A contribution made to the employees recognized provident fund or approved superannuation fund or approved gratuity fund.<br></br><br></br>
          TDS - TDS stands for tax deducted at source.
          As per the Income Tax Act, a person (deductor) who is required to make a payment of a specific nature to another person (deductee) must deduct tax at source and send it to the Central Government's account.
          tax is required to be deducted at source by the payer at the rate as prescribed under the Income Tax Act, 1961.
          TDS will be deducted at the time of accrual or payment of such income to the payee, whichever is earlier. However,
          if you are an "individual" or a "Hindu Undivided Family" (HUF),
          whose total revenue from the business or professional carried on by him does not exceed one crore rupees in case of business, or fifty lakh rupees in case of profession during the Financial Year immediately proceeding the current financial year,
          no TDS is required to be deducted at source.
          Salary Breakup - Understanding your salary breakup is the first step toward calculating the income tax on your salary. The salary breakdown can be found on the pay slip or salary statement.
          You may understand the main components and basic structure of your compensation by closely studying the slip or statement..<br></br><br></br>

          Taxable Income = Total Income (Sum of all Your Earnings) – Eligible Deductions

          You must determine your taxable income after you have the breakdown of your salary. The term "taxable income" refers to any sources of income other than your salary on which you must pay taxes.

        </h4>
      </div>
      
      <div className='Taxdetailimg'>
      <h2>For further reference watch the below link:</h2><br></br><br></br>
        {/* <img src={aboutpg1} alt='image' style={{ height: 300, width: 480 }} /> */}
        <iframe width="420" height="345" src="https://www.youtube.com/embed/L63sIh7PfO8">
        </iframe>
      </div>




    </>
  )
}

export default TaxDetails