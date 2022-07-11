const cartReducer = (state = [], action) => {
    switch(action.type){
        //adding to the cart and spreading state for each one you are adding
        case 'ADD_CART' :
            return [...state, action.payload];
        //clears out entire cart once you have made the purchase    
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
} 
export default cartReducer