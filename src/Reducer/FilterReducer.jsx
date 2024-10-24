const filterReducer = (state, action) => {
    switch(action.type) {
        case 'LOAD_FILTER_PRODUCTS': 
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]   
            };

        case 'SET_GRID_VIEW':
            return {
                ...state, 
                grid_view: true
            };

        case 'GET_SORT_VALUE':
            return {
                ...state,
                sorting_value: action.payload
            };

        case 'UPDATE_FILTERS_VALUE':
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters, [name]: value,
                }
            };

        case 'FILTER_PRODUCTS':
            let { all_products } = state; 
            let tempFilterProduct = [...all_products];
            const { text, category } = state.filters;
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((currData) => {
                    return currData.name.toLowerCase().includes(text.toLowerCase());
                })
            }
            
            if (category && category!=='All') {
                tempFilterProduct = tempFilterProduct.filter((currData) => {
                    return currData.category === category;
                })
                
            }
            return {
                ...state,
                filter_products: tempFilterProduct,
            };

        case 'CLEAR_FILTERS':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: 'All',
                },
                //
                filter_products: [...state.all_products]
            };

        case 'SORTING_PRODUCTS':
            let newSortData;
            let tempSortProduct = [...action.payload];    // here I am making a copy of the products array

            if(state.sorting_value === 'lowest'){
                const sortingProducts = (a,b) => {
                    return a.price - b.price;
                }
                newSortData = tempSortProduct.sort(sortingProducts)
            }
            if(state.sorting_value === 'highest'){
                const sortingProducts = (a,b) => {
                    return b.price - a.price;
                }
                newSortData = tempSortProduct.sort(sortingProducts)
            }
            if(state.sorting_value === 'a-z') {
                newSortData = tempSortProduct.sort((a,b) => {
                    return a.name.localeCompare(b.name)
                })
            }
            if(state.sorting_value === 'z-a') {
                newSortData = tempSortProduct.sort((a,b) => {
                    return b.name.localeCompare(a.name)
                })
            }
            return {
                ...state,
                filter_products: newSortData,
            };


        default:
            return state;
    }
}

export default filterReducer;