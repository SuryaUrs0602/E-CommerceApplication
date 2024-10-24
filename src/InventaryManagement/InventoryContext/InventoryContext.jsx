import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import reducer from '../InventoryReducer/InventoryReducer'

const InventoryContext = createContext();

const initialState = {
    products: [],
    feedbacks: [],
    orders: []
}

const InventoryContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleDelete = async(id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (confirmDelete) {
          try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            dispatch({ type: 'DELETE_ITEM', payload: id});
          } catch (error) {
            console.log('Some error occured', error)
          }
        }
      };

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                const result = response.data;
                dispatch({ type: 'SET_ALL_PRODUCTS', payload: result});
            } catch (error) {
                console.log('Could not fetch products', error);
            }
        }
        fetchData();
    }, []);

    return <InventoryContext.Provider value={{...state, handleDelete}}>
        { children }
    </InventoryContext.Provider>
}

export const useInventoryContext = () => {
    return useContext(InventoryContext)
}

export { InventoryContextProvider }