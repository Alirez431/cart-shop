import React, {useContext} from 'react';
//context
import { CartContext } from '../../context/CartContextporvider';
//functions
import { shorten } from '../../helper/function';

//ocon
import trashIcon from '../../assets/icons/trash.svg'
//styles
import styles from './Cart.module.css'
const Cart = (props) => {
    const {dispatch} = useContext(CartContext);

    const {image, title , price , quantity} = props.data
    return (
        <div className={styles.container} >
            <div>
                <img src={image} alt="jbjk"/>
                 
               </div> 
            <div className={styles.title}>
                <h3>{shorten(title)}</h3>
                <p>{price}$</p>
            </div>
            <div className={styles.quantity}>
                <span>{quantity}</span>
            </div>
            <div className={styles.buttonp}>
                
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type:"DECREASE", payload:props.data})}>-</button>:
                    <button onClick={() => dispatch({type:"REMOVE_ITEM", payload:props.data})}><img  src={trashIcon} alt='trash' className={styles.trash}  /></button>

                }
                <button onClick={() => dispatch({type:"INCREASE", payload:props.data})}>+</button>
            </div>
            
        </div>
        
        
    );
};

export default Cart;