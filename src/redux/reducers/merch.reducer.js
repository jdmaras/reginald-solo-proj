const merchReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_MERCH' :
            return action.payload;
        case 'SET_MERCH_ITEM':
            return action.payload;
        default:
            return state;
        
    }
}

// new reducer that is "editing item" -  needs to store singular item. The item you're clicking on (grabbing it's id) dispatch that whole object into this new reducer that we are creating

//you then history push it back to that merchadminview

// that merch admin view needs to prefill the fields with all that information we are pushing it over 
// use selector to grab the reducer to -- not editing, should be empty

// two different buttons (add merch / edit merch) - edit has to do a 'put' instead of a 'post' 

//Where you left off 
//trying to figure out once you have the information, how 
export default merchReducer;