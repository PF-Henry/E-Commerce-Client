import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    productsLoaded: [],
    productDetail: {},
  },
  reducers: {
    getProducts: (state, action) => {
      state.productsLoaded = action.payload;
    },
    getDetail: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

export const { getProducts, getDetail } = productSlice.actions;

export const getProductsAsync = () => (dispatch) => {
  fetch("https://hexatech-api.herokuapp.com/api/products")
    .then((response) => response.json())
    .then((json) => {
      dispatch(getProducts(json));
    })
    .catch((error) => console.log(error));
};

export default productSlice.reducer;
