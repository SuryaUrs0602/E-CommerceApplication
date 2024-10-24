import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/CartReducer'

const CartContext = createContext();

const getCartData = () => {
    let newCartData = localStorage.getItem("CartCraze");
    if (newCartData === null) 
        return [];

    try {
        return JSON.parse(newCartData);
    } catch (error) {
        console.log('could not fetch the data', error);
        return [];
    }
};

const initialState = {
    //cart: [],
    cart: getCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 5000,
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, amount, image, product) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, amount, image, product }})
    }

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id })
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    const setDecrease = (id) => {
        dispatch({ type: 'SET_DECREMENT', payload: id })
    }

    const setIncrease = (id, stock) => {                        
        dispatch({ type: 'SET_INCREMENT', payload: { id, stock } })
    }

    useEffect(() => {
        dispatch({ type: 'CART_TOTAL_PRICE' });
        localStorage.setItem("CartCraze", JSON.stringify(state.cart))
    }, [state.cart]);

    return <CartContext.Provider value={{ ...state, addToCart, removeItem, setDecrease, setIncrease, clearCart }}>
        { children }
    </CartContext.Provider>
}

export const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider };
