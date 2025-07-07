import React from 'react'
import OrderCard from '../cards/OrderCard'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

function CartPage() {
  return (
    <div className='basic-page-container'>
      <div className='basic-container' style={{display: 'flex', width: '95vw', gap: '1rem', padding: '1rem'}}>
        <div style={{flex: '2.5', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <button style={{alignSelf: 'start', display: 'flex', alignItems: 'center', gap: '0.5rem'}}> <FaArrowLeftLong />Continue Shopping</button>
        </div>

        <div style={{width: '5px', alignSelf: 'stretch', backgroundColor: 'black', margin: '0 1.5rem'}}></div>

        <div className='basic-container' style={{backgroundColor: '#FBD288', flex: '1', alignSelf: 'start', padding: '1rem', display: 'flex', flexDirection: 'column'}}>
          <p style={{fontSize: '1.3rem', fontWeight: 'bold', textDecoration: 'underline'}}>Cart Total</p>
          <p style={{fontWeight: 'bold'}}>123$</p>
          <p style={{alignSelf: 'end', fontStyle: 'italic', color: 'gray', fontSize: '0.7rem', paddingTop: '1rem'}}>*Delivery charge will be added on checkout</p>
          <button style={{alignSelf: 'end', display: 'flex', alignItems: 'center', gap: '0.5rem'}}> Procced to Checkout <FaArrowRightLong /></button>
        </div>
      </div>

    </div>
  )
}

export default CartPage