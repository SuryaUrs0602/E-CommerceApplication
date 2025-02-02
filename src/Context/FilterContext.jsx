import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../Reducer/FilterReducer';

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: 'lowest',
    filters: {
        text: "",
        category: 'All',
    },
};

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({ type:'SET_GRID_VIEW' })
    };

    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: 'GET_SORT_VALUE', payload: userValue })
    };
 
    const updateFiltersValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        // return dispatch({ type: 'UPDATE_FILTERS_VALUE', payload: { name, value } });
        dispatch({ type: 'UPDATE_FILTERS_VALUE', payload: { name, value } });
        dispatch({ type: 'FILTER_PRODUCTS' })
    }

    const clearFilters = () => {
        dispatch({ type: 'CLEAR_FILTERS' })
        //
        dispatch({ type: 'FILTER_PRODUCTS' })
    }
 
    useEffect(() => {
        dispatch({ type: 'FILTER_PRODUCTS' })
        dispatch({ type: 'SORTING_PRODUCTS', payload: state.filter_products })
    }, [ state.sorting_value]);

    // useEffect(() => {
    //     dispatch({ type: 'FILTER_PRODUCTS' })
    // }, [state.filters])

    useEffect(() => {
        dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products })
    }, [products])

    return (
    <FilterContext.Provider value={{ ...state, setGridView, sorting, updateFiltersValue, clearFilters }}>
        {children}
    </FilterContext.Provider>
    )
}


export const useFilterContext = () => {
    return useContext(FilterContext);
}