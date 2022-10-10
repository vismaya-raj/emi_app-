
import { useState } from "react";


export function Calculate()
{
    const [Amount,setAmount] = useState('');
    const [Years,setYears] = useState('');
    const [Interest,setInterest] = useState('');
    const [Emi,setEmi] = useState('');
return(
    function submitClick(){
        const P = parseInt(Amount);
        const R = parseInt(Interest)/12/100;
        const N = parseInt(Years)*4;
        setEmi((P * R/(1-Math.pow(1/(1+R),N))));

    }
   



)
function AmountChanged(e)
{
    setAmount(e.target.value);
}

function InterestChanged(e)
{
    setInterest(e.taret.value);
}
function YearsChanged(e)
{
    setYears(e.taret.value);
}

}
