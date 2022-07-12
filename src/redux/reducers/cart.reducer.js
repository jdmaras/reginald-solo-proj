const cartReducer = (state = [], action) => {
    switch(action.type){
        //adding to the cart and spreading state for each one you are adding
        case 'ADD_CART' :
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            //slice takes everything from 0 to index you're sending in the payload and then second part and then you take everything from the index to end and plus one to that. You're then combining those. 
            // Thanks stackoverflow
            // https://stackoverflow.com/questions/34582678/is-this-the-correct-way-to-delete-an-item-using-redux
            const tempState = [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
             console.log('this is tempState', tempState)
            return tempState;
        case 'SET_CART':
            return action.payload
        //clears out entire cart once you have made the purchase    
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
} 
export default cartReducer