import React from 'react'
import PlusMinus from '../components/PlusMinus'
import { GiCancel } from "react-icons/gi";

function OrderCard() {
  return (
    <div className='basic-container' style={{display: 'flex', flexDirection: 'row', gap: '1rem', padding: '1rem'}}>
      <div className='basic-image-container' style={{height: '100px', width: '100px', flex: '1'}}>
        <img src="https://plus.unsplash.com/premium_photo-1673036823812-b0d86a2cead1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBkYXJrfGVufDB8fDB8fHww" alt="" />
      </div>

      <div style={{flex: '1'}}>
        <p style={{fontSize: '1rem', fontWeight: 'bold', textAlign: 'start'}}>Lorem ipsum dolor sit amet.</p>
      </div>

      <div style={{flex: '1'}}>
        <p style={{fontSize: '1rem', textDecoration: 'underline', color: 'gray'}}>Price</p>
        <p style={{paddingTop: '1rem'}}>123$</p>
      </div>

      <div style={{flex: '1'}}>
        <p style={{fontSize: '1rem', textDecoration: 'underline', color: 'gray', paddingBottom: '1rem'}}>Quantity</p>
        <PlusMinus />
      </div>

      <div style={{flex: '1'}}>
        <p style={{fontSize: '1rem', textDecoration: 'underline', color: 'gray'}}>Extras</p>
        <p style={{paddingTop: '1rem', fontSize: '0.9rem'}}>strawberry er dandi (123$)</p>
      </div>

      <div style={{flex: '1'}}>
        <p style={{fontSize: '1rem', fontWeight: 'bold', textDecoration: 'underline'}}>Total</p>
        <p style={{paddingTop: '1rem', fontSize: '1rem', fontWeight: 'bold'}}>123$</p>
      </div>

      <div style={{flex: '0.3', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <GiCancel className='clickables' style={{alignSelf: 'flex-end', fontSize: '1.5rem', color: 'orangered'}}/> 
      </div>
    </div>
  )
}

export default OrderCard