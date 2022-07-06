const merchReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_MERCH' :
            return action.payload;
        default:
            return state;
    }
}

export default merchReducer;