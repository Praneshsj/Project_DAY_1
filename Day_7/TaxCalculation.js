// import React, { useState } from 'react';
// import "./TaxCalculation.css"
// import { Link } from 'react-router-dom';

// function TaxCalculation() {
//   <header>
//           <div class="navigation">
//             <div class="logo" ></div>
//             <a href="/">Home</a>
//             <a href="/about">About</a>
//             {/* <a href="/service">Service</a> */}
//             <a href="/ContactPage">Contact</a>
//           </div>
//           <button class="btnLogin-popup" href="/login">
//             <Link to="/login"><h3>Login</h3></Link>
//           </button>
//         </header>
//   const [salary, setSalary] = useState(0);
//   const [totalReduction, setTotalReduction] = useState(0);
//   const [taxpayerCategory, setTaxpayerCategory] = useState('Individual');
//   const [assessmentYear, setAssessmentYear] = useState(2023);
//   const [residentialStatus, setResidentialStatus] = useState('Resident');
//   const [taxAmount, setTaxAmount] = useState(0);

//   const calculateEmployeeTax = () => {
//     let taxPercentage = 0.0;

//     // Determine tax percentage based on taxpayer category and assessment year
//     if (taxpayerCategory === 'Individual') {
//       if (assessmentYear === 2023) {
//         taxPercentage = 0.2;
//       } else if (assessmentYear === 2024) {
//         taxPercentage = 0.25;
//       }
//       // Add more conditions for other assessment years
//     } else if (taxpayerCategory === 'Company') {
//       taxPercentage = 0.3;
//       // Add more conditions for other taxpayer categories
//     }

//     // Apply additional tax based on residential status
//     if (residentialStatus === 'Resident') {
//       taxPercentage += 0.05;
//     }

//     // Calculate tax amount
//     const tax = (salary - totalReduction) * taxPercentage;

//     setTaxAmount(tax);
//   };

//   return (
//     <div>
//       <h1>Employee Tax Calculator</h1>
//       <label>
//         Salary:
//         <input
//           type="number"
//           value={salary}
//           onChange={(e) => setSalary(parseFloat(e.target.value))}
//         />
//       </label>
//       <br />
//       <label>
//         Total Reduction:
//         <input
//           type="number"
//           value={totalReduction}
//           onChange={(e) => setTotalReduction(parseFloat(e.target.value))}
//         />
//       </label>
//       <br />
//       <label>
//         Taxpayer Category:
//         <select
//           value={taxpayerCategory}
//           onChange={(e) => setTaxpayerCategory(e.target.value)}
//         >
//           <option value="Individual">Individual</option>
//           <option value="Company">Company</option>
//         </select>
//       </label>
//       <br />
//       <label>
//         Assessment Year:
//         <input
//           type="number"
//           value={assessmentYear}
//           onChange={(e) => setAssessmentYear(parseInt(e.target.value))}
//         />
//       </label>
//       <br />
//       <label>
//         Residential Status:
//         <select
//           value={residentialStatus}
//           onChange={(e) => setResidentialStatus(e.target.value)}
//         >
//           <option value="Resident">Resident</option>
//           <option value="Non-Resident">Non-Resident</option>
//         </select>
//       </label>
//       <br />
//       <div className='Calcbtn'>
//       <button onClick={calculateEmployeeTax}>Calculate Tax</button>
//       </div>
//       <br></br><br></br>
//       <p>Tax Amount: {taxAmount}</p>
//     </div>
//   );
// }

// export default TaxCalculation;
import { Button, FormControl, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
// import Navbar from './Navbar'
import TextField from '@mui/material/TextField';
// import { MdKeyboardBackspace } from 'react-icons/md';
//  import {LiaRupeeSignSolid } from 'react-icons/lia';
// import {PiWarningCircleBold } from 'react-icons/pi';
// import {BiRefresh } from 'react-icons/bi';

import './TaxCalculation.css';
// import Footer from './Footer';

export default function Calculator() {
  const Year = [
    {
      value: 'prev',
      label: '2022-2023',
    },
    {
      value: 'current',
      label: '2023-2024',
    },
    {
      value: 'next',
      label: '2024-2025',
    },
  ];
  const residental = [
    {
      value: 'res1',
      label: 'RES(Resident)',
    },
    {
      value: 'res2',
      label: 'RNOR(Resident But Not Oridnary Resident)',
    },
    {
      value: 'res3',
      label: 'NR(Non Resident)',
    },
  ];
  const taxpayer = [
    {
      value: 'job1',
      label: 'Individual',
    },
    {
      value: 'job2',
      label: 'HUF',
    },
    {
      value: 'job3',
      label: 'Frim',
    },
    {
      value: 'job4',
      label: 'LLP',
    },
    {
      value: 'job5',
      label: 'Domestic Company',
    },
    {
      value: 'job6',
      label: 'Foreign Company',
    },
    {
      value: 'job7',
      label: 'Cooperative Society ',
    },
  ];
  const [income,SetIncome]=useState();
  const [deduction,SetDeduction]=useState();
  var [sub,SetSub]=useState();
  var [finals,SetFinals]=useState(0);
  var [finalsnew,SetFinalsnew]=useState(0);
  var [tax,SetTax]=useState();
  var [ream,SetReam]=useState();

  var tax=income;
  const handleChange = event => {
    SetIncome(event.target.value);
    
  };
  const handleChange1 = event => {
    SetDeduction(event.target.value);
    
    
  };

  // ---------------------------old slab//
  var sub=income-deduction;

  if(sub>=250000)
  {
      sub=(sub-250000);
  }
  else
  {
      sub=0;
  }
  if(sub>=250000)
  {
     finals=finals+((250000*5)/100);
     sub=(sub-250000);
  }
  else
  {
      finals=finals+((sub*5)/100);
      sub=0;
  }
   if(sub>=500000)
  {
     finals=finals+((500000*20)/100);
     sub=(sub-500000);
  }
  else
  {
      finals=finals+((sub*20)/100);
      sub=0;
  }
  if(sub>0)
  {
      finals=finals+((sub*30)/100);
  }
  
  var finals=finals+(finals*4)/100;

  // ----------------------------new slab//


  if(tax>=250000)
  {
      tax=(tax-250000);
  }
  else
  {
      tax=0;
  }
  if(tax>=250000)
  {
     finalsnew=finalsnew+((250000*5)/100);
     tax=(tax-250000);
  }
  else
  {
      finalsnew=finalsnew+((tax*5)/100);
      tax=0;
  }
    if(tax>=250000)
  {
     finalsnew=finalsnew+((250000*10)/100);
     tax=(tax-250000);
  }
  else
  {
      finalsnew=finalsnew+((tax*10)/100);
      tax=0;
  }
   if(tax>=250000)
  {
     finalsnew=finalsnew+((250000*15)/100);
     tax=(tax-250000);
  }
  else
  {
      finalsnew=finalsnew+((tax*15)/100);
      tax=0;
  }
  if(tax>=250000)
  {
     finalsnew=finalsnew+((250000*20)/100);
     tax=(tax-250000);
  }
  else
  {
      finalsnew=finalsnew+((tax*20)/100);
      tax=0;
  }
  if(tax>=250000)
  {
     finalsnew=finalsnew+((250000*25)/100);
     tax=(tax-250000);
  }
  else
  {
      finalsnew=finalsnew+((tax*25)/100);
      tax=0;
  }
  if(tax>0)
  {
      finalsnew=finalsnew+((tax*30)/100);
  }
  // parseInt(finalsnew,10)
  var finalsnew=finalsnew+(finalsnew*4)/100;
  

  // parseInt(ream,10)
   var ream=finalsnew-finals;
  // -----------------------------------
  const style = { size: "30%" }
  return (
    <>
      {/* <Navbar /> */}
      <div className='con'>

<h4>Basic Calculator</h4>
        <TextField
          id="outlined-select-currency-native"
          select
          defaultValue="current"
          SelectProps={{
            native: true,
          }}
          helperText="Please select Assessment Year"
        >
          {Year.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          id="outlined-select-native"
          select
          defaultValue="current"
          SelectProps={{
            native: true,
          }}
          helperText="Taxpayer Category"
          >
          {taxpayer.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <br />  <br />  <br />
        <TextField
          id="outlined-select-native"
          select
          defaultValue="current"
          SelectProps={{
            native: true,
          }}
          helperText="Residential Status"
          >
          {residental.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <br /><br /><br /><br />
        <div class="flex-container">
        {/* <a href="#"> <div>Below 60 year (Regular Citizen) </div></a> */}
        {/* <a href="#"> <div>Between 60-79 year (Senior Citizen)</div></a>
        <a href="#"> <div> 80 and above (Super Senior Citizen)</div></a> */}
        </div>
        <br/><br/><br/>
        <label>Total Annual Income :</label>
        <input
        type="number"
        id="income"
        name="income"
        onChange={handleChange}
        value={income}
        />
      <br/><br/>
      <label> Total Deductions :</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
        type="number"
        id="Deduction"
        name="deduction"
        onChange={handleChange1}
        value={deduction}
        />
        
        <div class="note">
              &nbsp;<p>Note:<br/>1.To see the effect of marginal relief please use advance tax calculator or login to use Income & Tax Estimator.<br/><br/>2.taxcalc.calc.To_see_the_effect_Tax_Estimator1</p>
        </div>
        
      <br/><br/>
      </div>
      <br/><br/><br/>
          <div className='side_bar'>
            <h3>Tax Summary</h3>
          <pre>
          <p>Total Income:&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;{income}</p><hr/>
          <p>Total Deduction:&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{deduction}</p><hr/>
          <p>Taxable Income:&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;{income-deduction}</p><hr/>
          <p>Taxable Amount<br/>(as per old Tax regime):&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{Math.round(finals)}</p><hr/>
          <p>Taxable Amount<br/>(as per new Tax regime):&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{Math.round(finalsnew)}</p><hr/>
          <h4>You save Rs.{Math.round(ream)} if you opt for New Tax Regime.</h4>
          </pre>

      </div>
      <br/><br/><br/>
      <div class='btn_back'>
      <Button  variant="contained" href="/">Back</Button>
      </div>
      <div class="btn_rev">

      <Button  variant="contained" href="/calc">Reset</Button>
      </div>
      {/* <Footer/> */}
    </>
  )
}