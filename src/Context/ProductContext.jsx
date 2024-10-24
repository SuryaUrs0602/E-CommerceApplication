import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import axios from 'axios';
import reducer from '../Reducer/ProductReducer';

export const AppContext = createContext();

//  const API = "https://api.pujakaitem.com/api/products";
const API = "http://localhost:3000/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {}
}

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async(url) => {

        dispatch({ type: 'SET_LOADING' })

        try {
            const response = await axios.get(url);
            const products = await response.data;

            dispatch({ type: 'SET_API_DATA', payload: products })
        } catch (error) {
            dispatch({ type: 'API_ERROR' })
        }
    }

    const getSingleProduct = async(url) => {

        dispatch({ type: 'SET_SINGLE_LOADING' })

        try {
            const response = await axios.get(url);
            const singleProduct = await response.data;

            dispatch({ type: 'SET_SINGLE_PRODUCT', payload: singleProduct[0] })
        } catch (error) {
            dispatch({ type: 'SET_SINGLE_ERROR' })
        }
    }

    useEffect(() => {
        getProducts(API);
    }, []);

    return(
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    )
}



export const useProductContext = () => {
    return useContext(AppContext);
};