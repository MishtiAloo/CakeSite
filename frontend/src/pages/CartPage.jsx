import React, { useEffect } from 'react'
import OrderCard from '../cards/OrderCard'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { useCartStore } from '../stores/cart.store';
import Cart from '../components/Cart';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

function CartPage() {

  const navigate = useNavigate();

  const {
    cartProducts,
    fetchAllInCart,
    cartTotal,
    addToCart,
    updateCart,
    deleteFromCart,
    loading,
  } = useCartStore();

  useEffect(() => {
    fetchAllInCart();
  }, []);

  function handleGoToShopping() {
    navigate('/prodpage');
  }

  function handleClearCart() {
    cartProducts.forEach((order) => {
      deleteFromCart(order);
    });
  }

  return cartProducts.length > 0 ? (
    <div className='basic-page-container'>
      <div className='basic-container' style={{display: 'flex', width: '95vw', gap: '1rem', padding: '1rem'}}>
        <div style={{flex: '2.5', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <button style={{alignSelf: 'end', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'green'}}> <FaGift />Apply a voucher</button>

          {cartProducts.length > 0 ? cartProducts.map((order) => (<OrderCard key={order._id} order={order}/>)) : <p style={{fontSize: '1.2rem', fontStyle: 'italic'}}>Your cart is empty</p>}

          <button onClick={handleGoToShopping} style={{alignSelf: 'start', display: 'flex', alignItems: 'center', gap: '0.5rem'}}> <FaArrowLeftLong />Continue Shopping</button>
        </div>

        <div style={{width: '5px', alignSelf: 'stretch', backgroundColor: 'black', margin: '0 1.5rem'}}></div>

        <div style={{flex: '1'}}>
          <div className='basic-container' style={{backgroundColor: '#FBD288', alignSelf: 'start', padding: '1rem', display: 'flex', flexDirection: 'column'}}>
            <p style={{fontSize: '1.3rem', fontWeight: 'bold', textDecoration: 'underline'}}>Cart Total</p>
            <p style={{fontWeight: 'bold'}}>{cartTotal}$</p>
            <p style={{alignSelf: 'end', fontStyle: 'italic', color: 'gray', fontSize: '0.7rem', paddingTop: '1rem'}}>*Delivery charge will be added on checkout</p>
            <button style={{alignSelf: 'end', display: 'flex', alignItems: 'center', gap: '0.5rem'}}> Procced to Checkout <FaArrowRightLong /></button>
          </div>
          <button onClick={handleClearCart} style={{marginTop: '1rem', backgroundColor: 'red', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem'}}> <MdDelete style={{fontSize: '1.4rem'}} /> Clear Cart</button>
        </div>

      </div>
      <Cart/>
    </div>
  ) : (<p className='basic-page-container'>Nothing in cart yet.</p>)
}

export default CartPage