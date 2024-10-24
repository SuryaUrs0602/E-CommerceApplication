import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/WishListReducer';

const WishListContext = createContext();

const getWishListData = () => {
    const wishList = localStorage.getItem("FavList");
    if (wishList === null) {
        return []
    } 

    try {
        return JSON.parse(wishList);
    } catch (error) {
        console.log('could not fetch the data', error);
        return [];
    }
};

const initialState = {
    wishListCart: getWishListData()
}

const WishListProvider = ( { children } ) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToWishList = (id, name, category, image, product) => {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: { id, name, category, image, product }})
    }

    const removeFromFav = (id) => {
        dispatch({ type: 'REMOVE_FROM_FAV', payload: id })
    }

    useEffect(() => {
        localStorage.setItem("FavList", JSON.stringify(state.wishListCart))
    }, [state.wishListCart]);

    return <WishListContext.Provider value={{ ...state, addToWishList, removeFromFav }}>
        { children }
    </WishListContext.Provider>
} 

export const useWishListContext = () => {
    return useContext(WishListContext);
}

export { WishListProvider };
















// import { createContext, useContext, useEffect, useReducer, useState } from "react";
// import reducer from '../Reducer/WishListReducer';
// import { useAuth } from './AuthContext'; // Import your Auth context

// const WishListContext = createContext();

// const initialState = {
//     wishListCart: []
// };

// const WishListProvider = ({ children }) => {
//     const { user } = useAuth(); // Get the logged-in user
//     const [state, dispatch] = useReducer(reducer, initialState);
    
//     const fetchWishListData = async () => {
//         if (user) {
//             const response = await fetch(`http://localhost:5000/users/${user.id}`);
//             const data = await response.json();
//             dispatch({ type: 'SET_WISHLIST', payload: data.wishlist });
//         }
//     };

//     useEffect(() => {
//         fetchWishListData();
//     }, [user]);

//     const addToWishList = async (product) => {
//         dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
//         if (user) {
//             const response = await fetch(`http://localhost:5000/users/${user.id}`, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ wishlist: [...state.wishListCart, product] })
//             });
//             await response.json();
//         }
//     };

//     const removeFromFav = async (id) => {
//         dispatch({ type: 'REMOVE_FROM_FAV', payload: id });
//         if (user) {
//             const updatedWishlist = state.wishListCart.filter(item => item.id !== id);
//             await fetch(`http://localhost:5000/users/${user.id}`, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ wishlist: updatedWishlist })
//             });
//         }
//     };

//     return (
//         <WishListContext.Provider value={{ ...state, addToWishList, removeFromFav }}>
//             {children}
//         </WishListContext.Provider>
//     );
// };

// export const useWishListContext = () => {
//     return useContext(WishListContext);
// };

// export { WishListProvider };
