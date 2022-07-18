const merchReducer = (state = [], action) => {
  switch (action.type) {
    // this is for all of the merch to append on dom
    case "SET_MERCH":
      return action.payload;
    //this is for a single item for the edit
    case "SET_MERCH_ITEM":
      return action.payload;
    case "UPDATE_IMGURL":
      return {
        ...state,
        ...action.payload,
      };
    case "UPDATE_PRODUCT_NAME":
      return {
        ...state,
        ...action.payload,
      };
    case "UPDATE_PRODUCT_TYPE":
      return {
        ...state,
        ...action.payload,
      };
    case "UPDATE_SIZE":
      return {
        ...state,
        ...action.payload,
      };
    case "UPDATE_PRICE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default merchReducer;
