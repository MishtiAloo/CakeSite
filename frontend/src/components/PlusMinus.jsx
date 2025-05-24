import React, { useEffect } from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

function PlusMinus({value, onchange, min}) {

    function increment() {
        onchange(value + 1);
    }
    function decrement() {
        if (value > min) onchange(value - 1);
    }

    function handleChange(e) {
        const newValue = parseInt(e.target.value);
        if (!isNaN(newValue) && newValue >= min) {
            onchange(newValue);
        }
    }

  return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.05rem', backgroundColor: '', fontSize: '2.5rem'}}>
            <CiSquareMinus className='clickables' onClick={decrement}/>
            <input type="Number" value={value} style={{height: '2.3rem', width: '3rem'}} onChange={handleChange}/>
            <CiSquarePlus className='clickables' onClick={increment}/>
        </div>
  )
}

export default PlusMinus