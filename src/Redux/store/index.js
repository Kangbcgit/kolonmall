import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducerForProduct from "../product/reducer";


const store = createStore(reducerForProduct, applyMiddleware(thunk));

export default store