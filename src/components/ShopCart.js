import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
/// componenet 
import Cart from './shared/Cart';
///context
import { CartContext } from '../context/CartContextporvider';
import { Link } from 'react-router-dom';
import styles from '././shared/Cart.module.css'

const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext)
    return (
        <div className={styles.product}>
        <div className={styles.cart} >
            {
                state.seclectedItems.map(item => <Cart key={item.id} data={item} />) 
            }
        </div>
            <div className={styles.prise}>
                {
                    state.itemsCounter > 0 && <div>
                        <p><span>Total Items:</span>{state.itemsCounter}</p>
                        <p><span>Total payments:</span>{state.total}$</p>
                        <div className={styles.buttonp}>
                            <button onClick={() => dispatch({type:"CHECKOUT"})}>checkOut</button>
                            <button onClick={() => dispatch({type:"CLEAR"})}>Clear</button>
                        </div>
                    </div>
                }
                {
                    state.checkout && <div>
                        <h3>Checked out successfully</h3>
                        <Link to="/product">Buy more</Link>
                    </div>
                }
                {
                    !state.checkout && state.itemsCounter === 0 && <div>
                        <h3>want to buy ?</h3>
                        <Link to="/product">go to shop</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ShopCart;