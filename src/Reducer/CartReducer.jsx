const CartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            let { id, amount, image, product } = action.payload;

            let existingProduct = state.cart.find((currData) => currData.id === id)

            if (existingProduct) {
                let updatedProduct = state.cart.map((currEle) => {
                    if (currEle.id === id) {
                        let newAmount = currEle.amount + amount;
                        if (newAmount >= product.stock) {
                            newAmount = product.stock;
                        }
                        return {
                            ...currEle,
                            amount: newAmount
                        };
                    } else {
                        return currEle;
                    }
                });
                return {
                    ...state,
                    cart: updatedProduct
                };
            } else {

            let cartProduct;
            cartProduct = {
                id: id,
                name: product.name,
                amount,
                image: image,
                price: product.price,
                max: product.stock,
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct]
            };
        }


        case 'REMOVE_FROM_CART':
            let updatedCart = state.cart.filter((currData) => currData.id !== action.payload );
            return {
                ...state,
                cart: updatedCart
            };

        case 'SET_DECREMENT': 
        let updatedProduct = state.cart.map((currData) => {
            if (currData.id === action.payload) {
                let decAmount = currData.amount - 1;
                if (decAmount <= 1) {
                    decAmount = 1
                }
                return {
                    ...currData,
                    amount: decAmount
                };
            } else {
                return currData;
            }
            });
            return {
                ...state,
                cart: updatedProduct
            }; 

        case 'SET_INCREMENT':
            let incrmentedProduct = state.cart.map((currData) => {
                if (currData.id === action.payload.id) {
                    let incAmount = currData.amount + 1;
                    if (incAmount >= currData.max) {
                        incAmount = currData.max;
                    }
                    return {
                        ...currData,
                        amount: incAmount
                    };
                } else {
                    return currData;
                }
            });
            return {
                ...state,
                cart: incrmentedProduct
            }

            case 'CART_TOTAL_PRICE':
                let finalPrice = state.cart.reduce((initialValue, currEle) => {
                    let { price, amount } = currEle;
                    initialValue = initialValue + (price * amount);
                    return initialValue;
                }, 0)
                return {
                    ...state,
                    total_price: finalPrice
                }

            case 'CLEAR_CART':
                return {
                    ...state,
                    cart: [],
                }

        default:
            return state;
    }
}

export default CartReducer
