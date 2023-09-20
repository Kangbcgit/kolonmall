import axios from "axios";

function getProduct(searchQuery) {
  return async (dispatch, getState) => {
    let url = `http://localhost:4500/products?q=${searchQuery}`;
    axios.get(url)
      .then(response => {
        if (!response.status) {
          throw new Error('서버 응답 오류: ' + response.status);
        }
        console.log(response.data);
        dispatch({type: "GET_PRODUCT", payload: {productList: response.data}})
      })
  }
}
const productAction = { getProduct };
export default productAction