import { createSlice } from "@reduxjs/toolkit";
import apiUrl from "../Constants/apiUrl";
import { NEWEST } from "../Constants/sorting";
import { toast } from "react-toastify";
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
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    usersLoaded: [],
    user: [],
    userLogged: [],
    showSlider: true,
    search: "",
    categoryID: {},
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
      state.allDBProducts = action.payload;
    },
    searchProductError: (state, action) => {
      state.error = action.payload;
    },
    resetError: (state, action) => {
      state.error = "";
    },
    getProductDetails: (state, action) => {
      state.detailsOfProduct = action.payload;
    },
    getAllDBProducts: (state, action) => {
      state.allDBProducts = action.payload;
    },
    addToCart: (state, action) => {
      let productIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex === -1) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        toast.success("Product added to the cart.", {
          position: "bottom-right",
        });
      } else {
        if (
          state.cartItems[productIndex].quantity <
          state.cartItems[productIndex].stock
        ) {
          state.cartItems[productIndex].quantity += 1;
          toast.info("One more unit added to the cart.", {
            position: "bottom-right",
          });
        } else {
          toast.error("This product does not have more items in stock.", {
            position: "bottom-right",
          });
        }
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      toast.error("Product removed from the cart.", {
        position: "bottom-right",
      });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart: (state, action) => {
      let productIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.cartItems[productIndex].quantity > 1) {
        state.cartItems[productIndex].quantity -= 1;
        toast.info("One unit subtracted from the cart.", {
          position: "bottom-right",
        });
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        toast.error("Product removed from the cart.", {
          position: "bottom-right",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    cleanCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    postUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    loginUser: (state, action) => {
      return {
        ...state,
        userLogged: action.payload,
      };
    },
    setShowSlider: (state, action) => {
      state.showSlider = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    getUsers: (state, action) => {
      state.usersLoaded = action.payload;
    },
    getCategoryID: (state, action) => {
      state.categoryID = action.payload;
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
  resetError,
  addToCart,
  removeFromCart,
  decreaseCart,
  getUsers,
  cleanCart,
  postUser,
  loginUser,
  setShowSlider,
  setSearch,
  getCategoryID,
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

// ------------------------ CREATE PRODUCT ------------------------------
export const createProductAsync = (newProduct) => (dispatch) => {
  // --- POST request to create a new product ---

  const formData = new FormData();

  formData.append("name", newProduct.name);
  formData.append("stock", newProduct.stock);
  formData.append("price", newProduct.price);
  formData.append("description", newProduct.description);
  formData.append(
    "technical_especification",
    newProduct.technical_especification
  );

  formData.append("categories", JSON.stringify(newProduct.categories));
  formData.append("brand", newProduct.brand);

  newProduct.images.forEach((image) => {
    formData.append("fileName", image.src);
  });

  axios
    .post(`${apiUrl}products/`, formData)
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
// ------------------------ CREATE PRODUCT ------------------------------

export const searchProductAsync = (product) => (dispatch) => {
  fetch(`${apiUrl}products?name=${product}`)
    .then((data) => data.json())
    .then((json) => {
      if (json.error) {
        return dispatch(searchProductError(json.error));
      }
      dispatch(searchProduct(json));
      dispatch(searchProductError(""));
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

export const getUsersAsync = () => (dispatch) => {
  fetch(`${apiUrl}users`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(getUsers(json));
    })
    .catch((error) => console.log(error));
};

export const postUserAsync = (payload) => (dispatch) => {
  console.log(payload);
  // axios.post(`${apiUrl}/users/register`, payload)
  // .then( (response) => {
  //     dispatch(postUser(response.data));
  // })

  /*FALTA PROBAR Y LOS ERRORES*/
};

export const loginUserAsync = (payload) => (dispatch) => {
  console.log(payload);
  // axios.post(`${apiUrl}/users/register`, payload) ********************** FALTA RUTA **********************
  // .then( (response) => {
  //     dispatch(loginUser(response.data));
  // })

  /*FALTA PROBAR Y LOS ERRORES*/
};

export const getCategoryByIDAsync = (payload) => (dispatch) => {
  fetch(`${apiUrl}categories/${payload}`)
    .then((data) => data.json())
    .then((json) => {
      dispatch(getCategoryID(json));
    })
    .catch((error) => console.log(error));
};

export const updateCategoryAsync = (id, payload) => () => {
  axios.put(`${apiUrl}categories/${id}`, payload)
    .catch(error => {
      console.log(error)
    })
};

export const createCategoryAsync = (payload) => () => {
  axios.post(`${apiUrl}categories`, payload)
    .catch(error => {
      console.log(error)
    })
};

export const createBrandAsync = (payload) => () => {
  axios.post(`${apiUrl}brands`, payload)
  .catch(error => {
    console.log(error)
  })
}

export default productSlice.reducer;
