import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import StarRating from '../components/StarRating'
import { SiTicktick } from "react-icons/si";
import '../styles/ProductDetailsPage.css'
import PlusMinus from '../components/PlusMinus';
import { FaRegFileLines } from "react-icons/fa6";
import { TbBowlChopsticks } from "react-icons/tb";
import { useProductStore } from '../stores/product.store';
import BasicProductSectionLinear from '../components/BasicProductSectionLinear';
import { useCartStore } from '../stores/cart.store';
import Cart from '../components/Cart';
import { toast } from 'react-toastify';

function ProductDetailsPage() {
    const myButton = useRef(null);

    const location = useLocation();
    const {parsedProduct} = location.state || {};

    const [inpValue, setInpValue] = useState(parsedProduct.productType === 'cake'? parsedProduct.minimumPound : parsedProduct.minimumOrder);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [selectedTopping, setSelectedTopping] = useState('none');
    const [selectedWriting, setSelectedWriting] = useState('');
    const [total, setTotal] = useState();
    const {
        products,
        fetchProducts,
    } = useProductStore();  

    useEffect(() => {
        console.log('triggered')
        setTotal(parsedProduct.productPrice * inpValue)
        setInpValue(parsedProduct.productType === 'cake'? parsedProduct.minimumPound : parsedProduct.minimumOrder);
        setSelectedTopping('none');
        fetchProducts();   
    }, [window.location.pathname]);

    useEffect(() => {
        let extraPrice = 0;
        if (selectedTopping !== 'none') extraPrice = 69;
        setTotal(parsedProduct.productPrice * inpValue + extraPrice);    
    }, [inpValue, selectedTopping]);

    useEffect(() => {
        if (parsedProduct.productType === 'cake') {
            setRelatedProducts (products.filter((product) => { return product.cakeType === parsedProduct.cakeType}))
        } else {
            setRelatedProducts (products.filter((product) => product.snackType === parsedProduct.snackType))
        }
    }, [products]);

    const {
        addToCart,
    } = useCartStore();

    function handleAddToCart() {

        const newOrderToCart = {
            product: parsedProduct._id,
            quantity: inpValue,
            toppings: selectedTopping,
            totalPrice: total,
            writing: selectedWriting,
        }
        addToCart(newOrderToCart)
        
        //go back to product details page after adding to cart
        setTimeout(() => {
            window.history.back();
        }, 200);
    }


  return (
    <div className='basic-page-container'>
        <div className='basic-container' style={{width: '95vw'}}>
            <div className="info-section">
                <div className="info-part">
                    <div className="basic-image-container" style={{width: '80%', aspectRatio: '1/1', alignSelf: 'center'}}>
                        <img src={parsedProduct.productImage} alt="" />
                    </div>
                </div>
                <div className="info-part" >
                    <div className="prod-type clickables">{parsedProduct.productType}</div>
                    <div className="two-sided-info">
                        <h2>{parsedProduct.productName}</h2>
                        <div style={{display: 'flex', flexDirection: 'row', gap: '0.3rem', alignItems: 'center'}}>
                            <p style={{fontSize: '1rem', fontStyle: 'italic', marginRight: '0.2rem'}} className='clickables'>{parsedProduct.rating}</p>
                            <StarRating rating={parsedProduct.rating} />
                        </div>
                    </div>
                    <div className="two-sided-info">
                        <p style={{fontSize: '2rem', color: 'orangered'}}>{parsedProduct.productPrice}<span style={{fontSize: '0.8rem'}}>/{parsedProduct.productType === 'cake'? 'pound' : 'piece'}</span></p>
                        <p style={{color: 'green', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '6px'}}> <SiTicktick /> In stock</p>
                    </div>
                    <div className="two-sided-info">
                        <div>
                            <p>Select pounds</p>
                            <p style={{fontSize: '0.8rem', color: 'gray', fontStyle: 'italic'}}>minimum buy: {parsedProduct.productType === 'cake'? parsedProduct.minimumPound + ' pounds' : parsedProduct.minimumOrder + ' pieces'}</p>
                        </div>
                        <PlusMinus value={inpValue} onchange={setInpValue} min={parsedProduct.productType === 'cake'? parsedProduct.minimumPound : parsedProduct.minimumOrder}/>   
                    </div>
                    <div className="two-sided-info">
                        <p>Extra toppings</p>
                        <select value={selectedTopping} onChange={(e) => setSelectedTopping(e.target.value)}>
                            <option value="none">None</option>
                            <option value="nuts">Nuts</option>
                            <option value="chocolate">Chocolate</option>
                            <option value="fruits">Fruits</option>
                        </select>
                    </div>
                    <div>
                        <p style={{fontSize: '1.2rem', fontWeight: '500', marginBottom: '0.6rem'}}>Writings:</p>
                        <textarea value={selectedWriting} onChange={(e) => setSelectedWriting(e.target.value)} placeholder='Happy Birthday!' rows={3} cols={30} />
                    </div>
                </div>
            </div>
            <div className='total-section'>
                <p style={{fontSize: '1.3rem', fontWeight: '600'}}>Total: <span style={{color: 'orangered', fontWeight: '700' ,fontSize: '1.5rem', fontStyle: 'italic'}}>{total}$</span></p>
                <button ref={myButton} onClick={handleAddToCart}>Add to cart</button>
            </div>

            <div className="descript-ingred-section">
                <div>
                    <p style={{fontSize: '1.5rem', fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.3rem'}}> <span><FaRegFileLines style={{color: 'orangered'}} /></span> Description</p>
                    <p style={{paddingLeft: '2rem'}}>{parsedProduct.productDescription}</p>
                </div>
                <div>
                    <p style={{fontSize: '1.5rem', fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.3rem'}}><span><TbBowlChopsticks style={{color: 'orangered'}} /></span>Ingredients</p>
                    <p style={{paddingLeft: '2rem'}}>{parsedProduct.ingredients.join(", ")}</p>
                </div>
            </div>
        </div>

        <BasicProductSectionLinear sectionTitle='Related prods' products={relatedProducts}/>

        <Cart/>
    </div>
  )
}

export default ProductDetailsPage