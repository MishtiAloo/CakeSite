import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: '1rem', backgroundColor: 'orange', padding: '0.8rem 1.4rem 0.5rem 0.5rem', borderRadius: '1rem', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', border: '2px solid black', position: 'fixed', bottom: '20px', right: '20px'}} className='clickables'>

        {/* Total money */}
        <div>
            <p style={{fontWeight: 'bold'}}>TK:</p>
            <p style={{fontStyle: 'italic'}}>1223$</p>
        </div>

        <div style={{backgroundColor: 'orangered', width: '2px', height: '40px'}}></div>

        {/* Cart & Item number */}
        <div style={{alignSelf: 'center', position: 'relative'}}>
            <FaShoppingCart style={{fontSize: '2rem'}}/>

            {/* Number of items */}
            <div style={{position: 'absolute', top: '-12px', right: '-13px', backgroundColor: 'green', color: 'white', borderRadius: '50%', width: '1.6rem', height: '1.6rem', fontWeight: 'bold'}}>
                <p>12</p>
            </div>
        </div>
    </div>
  )
}

export default Cart