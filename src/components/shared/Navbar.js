import React , { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
//context 
import { CartContext } from '../../context/CartContextporvider';

//icoun
import shopIcon from '../../assets/icons/shop.svg'

const Navbar = () => {

    const {state}= useContext (CartContext);

    return (
        <div className={styles.navbarheader}>
            
            <div className={styles.Navbarnav}>
            <Link to="/product">Product</Link>
             </div>
            <div className={styles.navbarcart}>
               <Link to='/Cart'><img src={shopIcon} alt="shop" / ></Link> 
               <div>
                <span>{state.itemsCounter}</span>

               </div>
           
            </div>




        </div>
    );



};

export default Navbar;

