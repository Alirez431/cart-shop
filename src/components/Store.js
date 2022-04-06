import React ,{useContext} from 'react';
import Product from './shared/Product';
//context
// style
import styles from './shared/Store.module.css'

import { ProductsContext} from '../context/ProductContext';
const Store = () => {
    const products = useContext(ProductsContext);
    return (
        <div className={styles.store}>
            {
                products.map(product => <Product key={product.id} productData={product} /> )
            }
        </div>
    );
};

export default Store;