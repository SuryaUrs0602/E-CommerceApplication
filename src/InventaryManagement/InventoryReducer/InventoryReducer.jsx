const InventoryReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };

        case 'DELETE_ITEM':
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };

        default:
            return state;
    }
}

export default InventoryReducer;