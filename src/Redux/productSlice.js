import { createSlice } from "@reduxjs/toolkit";
import apiUrl from "../Constants/apiUrl";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    productsLoaded: [],
    productsBackup: [],
    productDetail: {},
    brandsLoaded: [],
    categoriesLoaded: [],
    itemsPerPageState: 8
  },
  reducers: {
    getProducts: (state, action) => {
      state.productsLoaded = action.payload;
    },
    getDetail: (state, action) => {
      state.productDetail = action.payload;
    },
    getBrands: (state, action) => {
      state.brandsLoaded = action.payload;
    },
    getCategories: (state, action) => {
      state.categoriesLoaded = action.payload;
    },
    switchItemsPerPage: (state, action) => {
      state.itemsPerPageState = action.payload;
    }
  },
});

export const { getProducts, getDetail, getBrands, getCategories, switchItemsPerPage } =
  productSlice.actions;

export const getProductsAsync = () => (dispatch) => {
  fetch(`${apiUrl}products`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(getProducts(json));
    })
    .catch((error) => console.log(error));
};

export const getBrandsAsync = () => (dispatch) => {
  fetch(`${apiUrl}brands`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(getBrands(json));
    })
    .catch((error) => console.log(error));
};

export const getCategoriesAsync = () => (dispatch) => {
  fetch(`${apiUrl}categories`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(getCategories(json));
    })
    .catch((error) => console.log(error));
};

export const switchItemsPerPageAsync = (e) => () => {
  let itemsPerPage = e;
  switchItemsPerPage(itemsPerPage)
  console.log('items per page: ' + itemsPerPage);
};

export default productSlice.reducer;
