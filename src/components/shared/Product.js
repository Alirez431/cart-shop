import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
//function

import { shorten, isInCArt,quantityCount } from '../../helper/function';
//context
import { CartContext } from '../../context/CartContextporvider';
//icon
import trash from '../../assets/icons/trash.svg'
// styles
import styles from './Product.module.css'
const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);
    
   
    return (
        <div className={styles.product}>
            <img src={productData.image} alt="product" />
            <h3>{shorten(productData.title) }</h3>
            <p>{productData.price}$</p>
            <div className={styles.Details}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <br></br>
                <div className={styles.buttonp}>
                    {
                        quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch({type: "DECREASE", payload:productData})}> -</button>
                    }
                    {
                        quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: productData})}><img src={trash} alt='trash' /></button>
                    }
                    {
                        quantityCount(state, productData.id ) > 0 && <span>{quantityCount(state, productData.id)}</span>
                    }
                    {
                        isInCArt(state, productData.id)?
                        <button onClick={()=> dispatch({type:"INCREASE", payload: productData})}>+</button>:
                        <button onClick={() => dispatch({type:"ADD_ITEM",payload: productData})}>add to cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;