const WishListReducer = (state, action) => {
    switch(action.type) {
        case 'SET_WISHLIST':
            return {
                ...state,
                wishListCart: action.payload
            };

        case 'ADD_TO_WISHLIST':
            let { id, name, category, image, product } = action.payload;
            let itemExist = state.wishListCart.find((currData) => currData.id === id)
            if (itemExist) {
                return state;
            } else {
                let wishListProduct = {
                    id: id,
                    name: name,
                    image: image,
                    category: category
                }
                return {
                    ...state,
                    wishListCart: [...state.wishListCart, wishListProduct ]
                };
            }
            
        
        case 'REMOVE_FROM_FAV' :
            let updatedWishList = state.wishListCart.filter((currData) => currData.id !== action.payload)
            return {
                ...state,
                wishListCart: updatedWishList
            }
    }
}

export default WishListReducer;