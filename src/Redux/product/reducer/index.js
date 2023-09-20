const initialState = {
  productList: [],
};

function reducerForProduct(state = initialState, action) {
  let {type, payload} = action;
  switch(type) {
    case "GET_PRODUCT":
      console.log(state);
      return {
        ...state,
        productList: payload.productList
      };
      default: 
        return{...state}
  }
}
export default reducerForProduct