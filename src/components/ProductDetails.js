import React, {useContext} from 'react';
import { ProductsContext } from '../context/ProductContext';
import { Link , useParams} from 'react-router-dom';

import styles from './shared/Details.module.css';







const ProductDetails = (props) => {
    const params = useParams();
    // const id = params.id;
    const id = params.id
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {image, title , description , price , category} = product;


    return (
        <div className={styles.container}>
            <img src={image} alt="product"  />
            <div className={styles.body}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>{category}</span></p>
                <div> 
                    <span>{price}$</span>
                    <br></br>
                    <Link to="/product">back to shop </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;