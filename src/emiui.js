import { useState } from "react";


import './emi.css'
export function Ui() {
    const [Amount,setAmount] = useState('');
    const [Years,setYears] = useState('');
    const [Interest,setInterest] = useState('');
    const [Emi,setEmi] = useState('');
    function AmountChanged(e)
{
    setAmount(e.target.value);
}

function InterestChanged(e)
{
    setInterest(e.target.value);
}
function YearsChanged(e)
{
    setYears(e.target.value);
}
function submitClick(){
    const P = parseInt(Amount);
    const R = parseInt(Interest)/12/100;
    const N = parseInt(Years)*4;
    setEmi((P * R/(1-Math.pow(1/(1+R),N))));

}

   return (
    
    <div className="container-fluid">
        <h1>EMI CALCULATOR</h1>
         <div className="col">
            <form>
              <div className="form-group">
                <h2>Amount</h2>
                    <label className="amount">Amount You Need:</label>
                    <input className = "form-control" type="text" id="amount"  value={Amount} onChange={AmountChanged} />
                        <div className="amtrange">
                        <input type="range" value = {Amount} onChange = {AmountChanged}class= "form-range" id="amount" min="50000" max="4000000"></input>
                        <p>50000</p>
                        
                        </div>
                </div>
                <div className="form-group">
                    <h2>Year</h2>
                    <label className="fyear">For The Year:</label>
                    <input  className="form-control" type="text" id="year" value={Years} onChange={YearsChanged} />
                       <div className="yrange">
                       <input type="range" value = {Years} onChange={YearsChanged} class= "form-range" id="years" min="1" max="5"></input>
                       <p>1</p>
                       </div>
                </div>
                <div className="form-group">
                    <h2>Interest</h2>
                    <label  className="irate">Interest Rate:</label>
                     <input className = "form-control" type="text" id="rate"  value={Interest} onChange={InterestChanged}/>
                       <div className="irange">
                       <input type="range"  value={Interest} onChange={InterestChanged} class= "form-range" id="interest" min="5.5" max="20.5"></input>
                       <p>5</p>
                        </div>
                </div>
                
        </form>
        </div>
        <hr/>
    
    <div className="text-center">
        <button className="btn btn-primary" onClick={submitClick}>calculate</button>
        </div>
        <div className="result">Your EMI will be
        ₹  {Math.round (Emi)}
        </div>
    </div>

    )

}