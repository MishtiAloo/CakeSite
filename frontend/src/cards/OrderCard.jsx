import React, { useState } from 'react'
import PlusMinus from '../components/PlusMinus'
import { GiCancel } from "react-icons/gi";
import { useCartStore } from '../stores/cart.store';

function OrderCard({order}) {

  const {deleteFromCart} = useCartStore();
  const [isRemoving, setIsRemoving] = useState(false);

  function handleDelete() {
    setIsRemoving(true);
    
    setTimeout(() => {
      deleteFromCart(order);
    }, 500);
    
  }

  return (
    <div className={`basic-container ${isRemoving? 'slide-out' : ''}`} style={{display: 'flex', flexDirection: 'row', gap: '1rem', padding: '1rem'}}>
      <div className='basic-image-container' style={{height: '100px', width: '100px', flex: '1'}}>
        <img src={order.product.productImage} alt="" />
      </div>

      <div style={{flex: '1'}}>
        <p style={{fontSize: '1rem', fontWeight: 'bold', textAlign: 'start'}}>{order.product.productName}</p>
      </div>

      <div style={{flex: '1'}}>
        <p style={{fontSize: '1rem', textDecoration: 'underline', color: 'gray'}}>Price</p>
        <p style={{paddingTop: '1rem'}}>{order.product.productPrice + ' $'}</p>
      </div>

      <div style={{flex: '1'}}>
        <p style={{fontSize: '1rem', textDecoration: 'underline', color: 'gray'}}>Quantity</p>
        <p style={{ paddingTop: '1rem' }}>
        {order.quantity + (order.product.productType === 'cake' ? ' pounds' : ' pieces')}
        </p>

      </div>

      <div style={{flex: '1'}}>
        <p style={{fontSize: '1rem', textDecoration: 'underline', color: 'gray'}}>Extras</p>
        <p style={{paddingTop: '1rem', fontSize: '0.9rem'}}>{order.toppings}</p>
      </div>

      <div style={{flex: '1'}}>
        <p style={{fontSize: '1rem', fontWeight: 'bold', textDecoration: 'underline'}}>Total</p>
        <p style={{paddingTop: '1rem', fontSize: '1rem', fontWeight: 'bold'}}>{order.totalPrice + ' $'}</p>
      </div>

      <div style={{flex: '0.3', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <GiCancel className='clickables' onClick={handleDelete} style={{alignSelf: 'flex-end', fontSize: '1.5rem', color: 'orangered'}}/> 
      </div>
    </div>
  )
}

export default OrderCard