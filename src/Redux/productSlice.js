import { createSlice } from "@reduxjs/toolkit";
import apiUrl from "../Constants/apiUrl";
import { NEWEST } from "../Constants/sorting";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    productsLoaded: [],
    productDetail: {},
    brandsLoaded: [],
    categoriesLoaded: [],
    sorting: NEWEST,
    filter: [],
    brandsFilter: [],
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
    changeSorting: (state, action) => {
      state.sorting = action.payload;
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    changeBrandsFilter: (state, action) => {
      state.brandsFilter = action.payload;
    },
  },
});

export const {
  getProducts,
  getDetail,
  getBrands,
  getCategories,
  changeSorting,
  changeFilter,
  changeBrandsFilter,
} = productSlice.actions;

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

export default productSlice.reducer;
