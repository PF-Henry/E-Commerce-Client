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

export default productSlice.reducer;
