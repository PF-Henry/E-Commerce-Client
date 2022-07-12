import { createSlice } from "@reduxjs/toolkit";
import apiUrl from "../Constants/apiUrl";
import { NEWEST } from "../Constants/sorting";
import axios from "axios";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    productsLoaded: [],

    productDetail: {
      name: "",
      stock: 0,
      price: 0,
      description: "",
      technical_especification: "",
      brand: "",
      images: [],
      category: [],
      image: [],
    },
    detailsOfProduct: {},
    brandsLoaded: [],
    itemsPerPageState: 8,
    categoriesLoaded: [],
    sorting: NEWEST,
    filter: [],
    brandsFilter: [],
    imagesLoaded: [],
    error: "",
    msg: "",
    allDBProducts: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.productsLoaded = action.payload;
      state.filteredProducts = action.payload;
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
    getImages: (state, action) => {
      state.imagesLoaded = action.payload;
    },
    createProductMsg: (state, action) => {
      state.msg = action.payload;
    },
    createProductError: (state, action) => {
      state.error = action.payload;
    },
    switchItemsPerPage: (state, action) => {
      state.itemsPerPageState = action.payload;
    },
    searchProduct: (state, action) => {
      state.productsLoaded = action.payload;
    },
    searchProductError: (state, action) => {
      state.error = action.payload;
      // state.productsLoaded = [];
    },
    resetError: (state, action) =>{
      state.error = '';
    },
    getProductDetails: (state, action) => {
      state.detailsOfProduct = action.payload;
    },
    getAllDBProducts: (state, action) => {
      state.allDBProducts = action.payload;
    },
  },
});

export const {
  getProducts,
  getDetail,
  getBrands,
  switchItemsPerPage,
  getCategories,
  changeSorting,
  changeFilter,
  changeBrandsFilter,
  getImages,
  createProductMsg,
  createProductError,
  searchProduct,
  searchProductError,
  getProductDetails,
  getAllDBProducts,
  resetError
} = productSlice.actions;

export const getProductsAsync = () => (dispatch) => {
  fetch(`${apiUrl}products`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(getProducts(json));
    })
    .catch((error) => console.log(error));
};

export const getAllDBProductsAsync = () => (dispatch) => {
  fetch(`${apiUrl}products`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(getAllDBProducts(json));
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

export const getImagesAsync = () => (dispatch) => {
  fetch(`${apiUrl}images`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(getImages(json));
    })
    .catch((error) => console.log(error));
};

export const switchItemsPerPageAsync = (e) => () => {
  let itemsPerPage = e;
  switchItemsPerPage(itemsPerPage);
  console.log("items per page: " + itemsPerPage);
};

export const createProductAsync = (newProduct) => (dispatch) => {
  axios
    .post(`${apiUrl}products/`, newProduct)
    .then((response) => {
      if (response.data.error) {
        dispatch(createProductError(response.data.error));
      }
      dispatch(createProductMsg(response.data.msg));
    }) // cacth generar un dispatch un error
    .catch((error) => {
      dispatch(createProductError(error));
    });
};

export const searchProductAsync = (product) => (dispatch) => {
  fetch(`${apiUrl}products?name=${product}`)
    .then((data) => data.json())
    .then((json) => {
        if (json.error) {
            return dispatch(searchProductError(json.error));
        }        
        dispatch(searchProduct(json));
    })
    .catch((error) => console.log(error));
};

export const getDetailProductAsync = (payload) => (dispatch) => {
  fetch(`${apiUrl}products/${payload}`)
    .then((data) => data.json())
    .then((json) => {
      dispatch(getProductDetails(json));
    })
    .catch((error) => console.log(error));
};

export const updateProductAsync = (id, updateProduct) => (dispatch) => {
  axios
    .put(`${apiUrl}products/${id}`, updateProduct)
    .then((response) => {
      if (response.data.error) {
        dispatch(createProductError(response.data.error));
      }
      dispatch(createProductMsg(response.data.msg));
    }) // cacth generar un dispatch un error
    .catch((error) => {
      dispatch(createProductError(error));
    });
};
export default productSlice.reducer;
