import React, { useReducer, createContext}  from 'react';

    const initialState = {
        seclectedItems:[],
        itemsCounter: 0 ,
        total:0,
        checkout:false
    }
    const sumItem = item => {
        const itemsCounter = item.reduce((total , product) => total + product.quantity, 0) 
        const total = item.reduce((total, product) => total + product.price * product.quantity,0).toFixed(2)
        return {itemsCounter , total}
    }
    const cartReducer = (state , action) => {
        console.log(state);
        switch (action.type) {
            case "ADD_ITEM":
                if (!state.seclectedItems.find(item=> item.id === action.payload.id ))
                    state.seclectedItems.push({
                        ...action.payload,
                        quantity: 1
                    })
                 
            return {
                ...state,
                seclectedItems: [...state.seclectedItems],
                ...sumItem(state.seclectedItems)
            }
        case "REMOVE_ITEM": 
            const newSelectedItems = state.seclectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                seclectedItems:[...newSelectedItems],
                ...sumItem(newSelectedItems)
            }
            case "INCREASE":
                const indexI =state.seclectedItems.findIndex(item => item.id === action.payload.id)
                state.seclectedItems[indexI].quantity++;
                return {
                    ...state,
                    ...sumItem(state.seclectedItems),
                      checkout:false

                }
                case "DECREASE":
                const indexD =state.seclectedItems.findIndex(item => item.id === action.payload.id)
                state.seclectedItems[indexD].quantity--;
                return {
                    ...state,
                    ...sumItem(state.seclectedItems)
                }
                case "CHECKOUT":
                    return {
                        seclectedItems:[],
                        itemsCounter: 0 ,
                        total:0,
                        checkout:true
                    }
                case "CLEAR":
                    return {
                        seclectedItems:[],
                        itemsCounter: 0 ,
                        total:0,
                        checkout:false
                    }
                    default :
                    return state;
        }
    }

    export const CartContext = createContext()

const CartContextporvider = ({children}) => {

    const [ state , dispatch] = useReducer (cartReducer , initialState);
    
        
    return (
        <div>
           <CartContext.Provider value={{state , dispatch}}>

                {children}
            </CartContext.Provider>

        </div>
    );
};

export default CartContextporvider;

    
