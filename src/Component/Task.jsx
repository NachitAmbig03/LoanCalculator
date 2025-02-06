import React, { useState } from "react";
import "./Task.css";
import gg from './nd.png';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(457000);
  const [duration, setDuration] = useState(4);
  const interestRate = 14.5;

  const calculateEMI = (principal, years, rate) => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    ).toFixed(2);
  };

  const monthlyEMI = calculateEMI(loanAmount, duration, interestRate);

  return (
    <div className="emi-calculator">
      <h2>EMI Calculator</h2>
      <p >Avail upto 100% of the car value in finance at attractive interest rates</p>

      <div className="slider-container">
        <label>Loan Amount</label>
        <input
          type="range"
          min="0"
          max="508000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(parseInt(e.target.value))}
        />
        <span>₹{(loanAmount / 100000).toFixed(2)} Lakh</span>
      </div>

      <div className="duration-container">
        <label>Duration in years</label>
        {[1, 2, 3, 4, 5].map((year) => (
          <button
            key={year}
            className={duration === year ? "active" : ""}
            onClick={() => setDuration(year)}
          >
            {year}
          </button>
        ))}
      </div>

      <p className="prh1">Rate of <b>interest @ {interestRate}% </b> for {duration} Years</p>

      <div className="emi-result">
        <p className="prh2">Your Monthly EMI</p>
        <h3 className="hdng1">₹{monthlyEMI}</h3>
        
        {/* <div className="Breakup-btn"> */}
        <button className="Breakup-btn">View Breakup</button>
        {/* </div> */}
      </div>
      
      <p className="prh4">* Interest rate and loan amount offered may very<br></br>subject toCustomer risk profile</p>
      <button className="loan-button">Interested in Loan</button>

      <p className="prh3">550+ customers availed the facility</p>
    <div className="user">
       <img src={gg} alt="" />
    </div>
    </div>
    
  );
};

export default EMICalculator;