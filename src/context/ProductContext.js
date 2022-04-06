import {React,useState , useEffect , createContext} from 'react';

/// api
import { getProducts } from '../service/api';

export const ProductsContext = createContext();

const ProductContext = ({children}) => {
    
    const [products , setProducts]=useState([]);
    useEffect (()=> {
        
        const fechAPI =async () => {
            setProducts(await getProducts());
        }
        fechAPI();
    },[]);


    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    //      <ProductsContext.Provider value={products}>
    //      {children}
    //  </ProductsContext.Provider>
    );
};

export default ProductContext;