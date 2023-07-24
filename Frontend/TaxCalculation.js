
// // export default TaxCalculation;
// import { Button, FormControl, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
// import React, { useState } from 'react'
// // import Navbar from './Navbar'
// import TextField from '@mui/material/TextField';
// // import { MdKeyboardBackspace } from 'react-icons/md';
// //  import {LiaRupeeSignSolid } from 'react-icons/lia';
// // import {PiWarningCircleBold } from 'react-icons/pi';
// // import {BiRefresh } from 'react-icons/bi';

// import './TaxCalculation.css';
// // import Footer from './Footer';

// export default function Calculator() {
//   const Year = [
//     {
//       value: 'prev',
//       label: '2022-2023',
//     },
//     {
//       value: 'current',
//       label: '2023-2024',
//     },
//     {
//       value: 'next',
//       label: '2024-2025',
//     },
//   ];
//   const residental = [
//     {
//       value: 'res1',
//       label: 'RES(Resident)',
//     },
//     {
//       value: 'res2',
//       label: 'RNOR(Resident But Not Oridnary Resident)',
//     },
//     {
//       value: 'res3',
//       label: 'NR(Non Resident)',
//     },
//   ];
//   const taxpayer = [
//     {
//       value: 'job1',
//       label: 'Individual',
//     },
//     {
//       value: 'job2',
//       label: 'HUF',
//     },
//     {
//       value: 'job3',
//       label: 'Frim',
//     },
//     {
//       value: 'job4',
//       label: 'LLP',
//     },
//     {
//       value: 'job5',
//       label: 'Domestic Company',
//     },
//     {
//       value: 'job6',
//       label: 'Foreign Company',
//     },
//     {
//       value: 'job7',
//       label: 'Cooperative Society ',
//     },
//   ];
//   const [income,SetIncome]=useState();
//   const [deduction,SetDeduction]=useState();
//   var [sub,SetSub]=useState();
//   var [finals,SetFinals]=useState(0);
//   var [finalsnew,SetFinalsnew]=useState(0);
//   var [tax,SetTax]=useState();
//   var [ream,SetReam]=useState();

//   var tax=income;
//   const handleChange = event => {
//     SetIncome(event.target.value);
    
//   };
//   const handleChange1 = event => {
    
//     SetDeduction(event.target.value);
    
    
//   };

//   // ---------------------------old slab//
//   var sub=income-deduction;

//   if(sub>=250000)
//   {
//       sub=(sub-250000);
//   }
//   else
//   {
//       sub=0;
//   }
//   if(sub>=250000)
//   {
//      finals=finals+((250000*5)/100);
//      sub=(sub-250000);
//   }
//   else
//   {
//       finals=finals+((sub*5)/100);
//       sub=0;
//   }
//    if(sub>=500000)
//   {
//      finals=finals+((500000*20)/100);
//      sub=(sub-500000);
//   }
//   else
//   {
//       finals=finals+((sub*20)/100);
//       sub=0;
//   }
//   if(sub>0)
//   {
//       finals=finals+((sub*30)/100);
//   }
  
//   var finals=finals+(finals*4)/100;

//   // ----------------------------new slab//


//   if(tax>=250000)
//   {
//       tax=(tax-250000);
//   }
//   else
//   {
//       tax=0;
//   }
//   if(tax>=250000)
//   {
//      finalsnew=finalsnew+((250000*5)/100);
//      tax=(tax-250000);
//   }
//   else
//   {
//       finalsnew=finalsnew+((tax*5)/100);
//       tax=0;
//   }
//     if(tax>=250000)
//   {
//      finalsnew=finalsnew+((250000*10)/100);
//      tax=(tax-250000);
//   }
//   else
//   {
//       finalsnew=finalsnew+((tax*10)/100);
//       tax=0;
//   }
//    if(tax>=250000)
//   {
//      finalsnew=finalsnew+((250000*15)/100);
//      tax=(tax-250000);
//   }
//   else
//   {
//       finalsnew=finalsnew+((tax*15)/100);
//       tax=0;
//   }
//   if(tax>=250000)
//   {
//      finalsnew=finalsnew+((250000*20)/100);
//      tax=(tax-250000);
//   }
//   else
//   {
//       finalsnew=finalsnew+((tax*20)/100);
//       tax=0;
//   }
//   if(tax>=250000)
//   {
//      finalsnew=finalsnew+((250000*25)/100);
//      tax=(tax-250000);
//   }
//   else
//   {
//       finalsnew=finalsnew+((tax*25)/100);
//       tax=0;
//   }
//   if(tax>0)
//   {
//       finalsnew=finalsnew+((tax*30)/100);
//   }
//   // parseInt(finalsnew,10)
//   var finalsnew=finalsnew+(finalsnew*4)/100;
  

//   // parseInt(ream,10)
//    var ream=finalsnew-finals;
//   // -----------------------------------
//   const style = { size: "30%" }
//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className='con'>

// <h4>Basic Calculator</h4>
//         <TextField
//           id="outlined-select-currency-native"
//           select
//           defaultValue="current"
//           SelectProps={{
//             native: true,
//           }}
//           helperText="Please select Assessment Year"
//         >
//           {Year.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <TextField
//           id="outlined-select-native"
//           select
//           defaultValue="current"
//           SelectProps={{
//             native: true,
//           }}
//           helperText="Taxpayer Category"
//           >
//           {taxpayer.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>
//         <br />  <br />  <br />
//         <TextField
//           id="outlined-select-native"
//           select
//           defaultValue="current"
//           SelectProps={{
//             native: true,
//           }}
//           helperText="Residential Status"
//           >
//           {residental.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>
//         <br /><br /><br /><br />
//         <div class="flex-container">
//         {/* <a href="#"> <div>Below 60 year (Regular Citizen) </div></a> */}
//         {/* <a href="#"> <div>Between 60-79 year (Senior Citizen)</div></a>
//         <a href="#"> <div> 80 and above (Super Senior Citizen)</div></a> */}
//         </div>
//         <br/><br/><br/>
//         <label>Total Annual Income :
//         </label>
//         <input
//         type="number"
//         id="income"
//         name="income"
//         onChange={handleChange}
//         value={income}
//         />
//       <br/><br/>
//       <label> Total Deductions :</label>
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <input
//         type="number"
//         id="Deduction"
//         name="deduction"
//         onChange={handleChange1}
//         value={deduction}
//         />
        
//         <div class="note">
//               &nbsp;<p>Note:<br/>1.To see the effect of marginal relief please use advance tax calculator or login to use Income & Tax Estimator.<br/><br/>2.taxcalc.calc.To_see_the_effect_Tax_Estimator1</p>
//         </div>
        
//       <br/><br/>
//       </div>
//       <br/><br/><br/>
//           <div className='side_bar'>
//             <h3>Tax Summary</h3>
//           <pre>
//           <p>Total Income:&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;{income}</p><hr/>
//           <p>Total Deduction:&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{deduction}</p><hr/>
//           <p>Taxable Income:&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;{income-deduction}</p><hr/>
//           <p>Taxable Amount<br/>(as per old Tax regime):&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{Math.round(finals)}</p><hr/>
//           <p>Taxable Amount<br/>(as per new Tax regime):&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{Math.round(finalsnew)}</p><hr/>
//           {/* <h4>You save Rs.{Math.round(ream)} if you opt for New Tax Regime.</h4> */}
//           </pre>

//       </div>
//       <br/><br/><br/>


//       <div class='btn_back'>
//       <Button  variant="contained" href="/">Back</Button>
//       </div>
//       <div class="btn_rev">

//       <Button  variant="contained" href="/calc">Reset</Button>
//       </div>
//       {/* <Footer/> */}
//     </>
//   )
// }

import { Button, FormControl, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useRef, useState, useSyncExternalStore } from 'react'
// import Navbar from './Navbar'
import { MdKeyboardBackspace } from 'react-icons/md';
import { PiWarningCircleBold } from 'react-icons/pi';
import { BiRefresh } from 'react-icons/bi';
// import slab from '..//src/images/slab.png';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './TaxCalculation.css';
// import Footer from './Footer';

export default function Calculator() {
  var pdfRef = useRef();

  var DownloadPdf = () => {
    var input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      var imgData = canvas.toDataURL('image/png');
      var pdf = new jsPDF('p', 'mm', 'a4', true);
      var pdfWidth = pdf.internal.pageSize.getWidth();
      var pdfHeight = pdf.internal.pageSize.getHeight();
      var imgWidth = canvas.width;
      var imgHeight = canvas.height;
      var ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      var imgX = (pdfWidth - imgWidth * ratio) / 2;
      var imgY = 30;
      pdf.addImage(imgData, 'jpg', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('TaxCalculation.pdf');
    });
  };

  var [basicsalary, SetBasicsalary] = useState();
  var [arent, SetArent] = useState();
  var [house, SetHouse] = useState();
  var [dallowance, SetDallowance] = useState();
  var [dall, SetDall] = useState();
  var [Hraexcpection, SetHraexcption] = useState();
  var [finhra, SetFinhra] = useState();
  var [sum, SetSum] = useState();
  var [hrea, SetHrea] = useState();
  var[deduction1,SetDeduction1]=useState();
  var[deduction2,SetDeduction2]=useState();
  var[deduction3,SetDeduction3]=useState();
   
   var sum3=Number(deduction1)+Number(deduction2)+Number(deduction3);
   
  var b = basicsalary;
  var finhra = Number(house) * 12;//hra==finhra
  var dall = Number(b) * 0.5;
  var sum = (Number(dallowance) + Number(dall))*12;//da==sum

  var finhra1=Number(b)*0.1;
  var dall1=Number(finhra1)+Number(dallowance);
  var sum2=(Number(arent)-dall1)*12;//rent==sum2

  var hrea=0;

  if(finhra <sum && finhra <sum2)
  {
    hrea=finhra;

  }
  else if(sum<sum2)
  {
   hrea=sum;
  }
  else
  {
   hrea=sum2;
  }

  var handleChange = event => {
    SetHouse(event.target.value);

  };
  var handleChange1 = event => {
    SetBasicsalary(event.target.value);

  };
  var handleChange2 = event => {
    SetDallowance(event.target.value);

  };
  var handleChange3 = event => {
    SetArent(event.target.value);

  };
  var handleChange4 = event => {
    SetHrea(event.target.value);
  

  };
  var handleChange5 = event => {
    SetDeduction1(event.target.value);
    
    
  };
  
  var handleChange6 = event => {
    SetDeduction2(event.target.value);
    
    
  };
  
  var handleChange7= event => {
    SetDeduction3(event.target.value);
    
    
  };
var gross=Number(b)+Number(finhra)+Number(sum)+Number(sum2);
var tax=Number(gross)-Number(hrea)-Number(sum3);
var taxable=tax;

 
var finals=0;

  if(taxable>=250000)
  {
      taxable=(taxable-250000);
  }
  else
  {
      taxable=0;
  }
  if(taxable>=250000)
  {
     finals=finals+((250000*5)/100);
     taxable=(taxable-250000);
  }
  else
  {
      finals=finals+((taxable*5)/100);
      taxable=0;
  }
   if(taxable>=500000)
  {
     finals=finals+((500000*20)/100);
     taxable=(taxable-500000);
  }
  else
  {
      finals=finals+((taxable*20)/100);
      taxable=0;
  }
  if(taxable>0)
  {
      finals=finals+((taxable*30)/100);
  }
  
  var finals=finals+(finals*4)/100;


  var style = { size: "30%" }
  return (
    <>
      {/* <Navbar /> */}
      <div ref={pdfRef}>

        <div className='con' >

          <h4>Basic Calculator   &nbsp;<Button onClick={DownloadPdf} style={{ float: "right", textDecoration: "underline" }}>Download</Button></h4>


          <label>Name :</label>
          <input
            type="text"
            id="name"
            name="name"
          />
          <br /><br />
          <label for="tax">Taxpayer Category:</label>

          <select id="tax">
            <option value="select">-----Choose a Category-----</option>
            <option value="individual">Individual</option>
            <option value="LLP">LLP</option>
            <option value="Domestic Company">Domestic Company</option>
            <option value="Foregin Company">Foregin Company</option>
          </select>
          <br/><br/>

          <label>Basic Salary:</label>
          <input
            type="number"
            id="bsalary"
            name="bsalary"
            onChange={handleChange1}
            value={basicsalary}
          />
          <h2>{b}</h2>
          <br/><br/>
          <h4>Allowances</h4>
          <label>DA(DNS Allowances) :</label>
          <input
            type="number"
            id="dallowance"
            name="dallowance"
            onChange={handleChange2}
            value={dallowance}

          />
          <h2>{sum}</h2>
          <br /><br />



          <label>HRA(House Rent Allowances) :</label>
          <input
            type="number"
            id="house"
            name="house"
            onChange={handleChange}
            value={house}
          />
          <h2>{finhra}</h2>
          <br /><br />



          <label> Actual Rent :</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="number"
            id="arent"
            name="arent"
            value={arent}
            onChange={handleChange3}

          />
          <h2>{sum2}</h2>
          <br /><br />



          <label for="cars">place of living:</label>

          <select id="tax">

            <option value="select">-----Choose a Category-----</option>
            <option value="urban">urban</option>
            <option value="non-urban">Non-urban</option>

          </select>
          <br /><br />
          <label>HRA Exception:</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="number"
            id="hrae"
            name="hrea"
            value={Hraexcpection}
            onChange={handleChange4}

          />
          <h2>{hrea}</h2>
         
          <br /><br />
          <h4>Leave Travel Allowances</h4>
          <label>Amount:</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="number"
            id="lls"
            name="lls"

          />
          <div className="location">
            <label>from:</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              id="from"
              name="from"

            /><label>To:</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              id="to"
              name="to"

            />
          </div>
          <br /><br />
          <h4>Deduction</h4>
          <label>ELSS(Equity Linked Saving Schemes) :</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="number"
            id="deduction1"
            name="deduction1"
            onChange={handleChange5}
            value={deduction1}

          />
          {/* <h2>{deduction1}</h2> */}
          <br /><br />
          <label>PPF/SPF/RPF :</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="number"
            id="deduction2"
            name="deduction2"
            onChange={handleChange6}
            value={deduction2}

          />
          <br /><br />
          <label>Medcial Expenditure :</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="number"
            id="deduction3"
            name="deduction3"
            onChange={handleChange7}
            value={deduction3}

          />
          <h2>{sum3}</h2>
          <br /><br />
          <h4>For Your Reference Calculation</h4>
          {/* <img src={slab} alt="adfsg" /> */}

          <div class="note">
            &nbsp;<p><PiWarningCircleBold />Note:<br /><br />1.  To see the effect of marginal relief please use advance tax calculator or login to use Income & Tax Estimator.<br /><br />2.  taxcalc.calc.To_see_the_effect_Tax_Estimator</p>
          </div>

          <br /><br />
        </div>
        <br /><br /><br />
        <div className='side_bar'>
          <h3>TDS</h3>
          <br />
          <pre>
            <p>Gross Salary:&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;{gross}</p><hr />
            <p>Less : Exemption&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{hrea}</p><hr />
            <p>Less :satndard <br />Deduction&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&nbsp;{sum3}</p><hr />
            {/* <p>Less: Other Deduction:&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{ }</p><hr /> */}
            <p>Taxable income:&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{tax}</p><hr />
            <p>Total Tax:&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{Math.round(finals) }</p><hr />
            {/* <p>Tax Payable:&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{ }</p><hr /> */}
            {/* <p>You save Rs.{Math.abs(Math.round(ream))} if you opt for New Tax Regime.</p> */}
          </pre>

        </div>
        <br /><br /><br />
        <div class='btn_back'>
          <Button variant="contained" href="/"><MdKeyboardBackspace style={style} />Back</Button>
        </div>
        <div class="btn_rev">

          <Button variant="contained" href="/calci"><BiRefresh style={style} />Reset</Button>
          <br /><br />

        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}



































































































































































































































































































































































































































































































































































