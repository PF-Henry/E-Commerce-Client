import { createSlice } from "@reduxjs/toolkit";
import apiUrl from "../Constants/apiUrl";
import { NEWEST } from "../Constants/sorting";
import { toast } from "react-toastify";
import axios from "axios";
import { getUserFromToken } from "../Functions/session";

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
        token: "",
        role: "Guest",
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
        cartItems: localStorage.getItem("cartItems") ?
            JSON.parse(localStorage.getItem("cartItems")) : [],
        usersLoaded: [],
        user: [],
        userLogged: [],
        showSlider: true,
        search: "",
        categoryID: {},
        brandID: {},
        favorites: [],
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
        resetMsg: (state, action) => {
            state.msg = "";
        },
        getProductDetails: (state, action) => {
            state.detailsOfProduct = action.payload;
        },
        getAllDBProducts: (state, action) => {
            state.allDBProducts = action.payload;
        },
        addToCart: (state, action) => {
            let productIndex = state.cartItems.findIndex(
                (product) => product.id === action.payload.item.id
            );
            if (productIndex === -1) {
                state.cartItems.push({
                    ...action.payload.item,
                    quantity: action.payload.quantity,
                });
                toast.success(
                    `${action.payload.quantity} ${action.payload.item.name} added to the cart.`, {
                        position: "bottom-right",
                    }
                );
            } else {
                if (
                    state.cartItems[productIndex].quantity <
                    state.cartItems[productIndex].stock
                ) {
                    state.cartItems[productIndex].quantity += action.payload.quantity;
                    toast.info(
                        `${action.payload.quantity} more ${action.payload.item.name} added to the cart.`, {
                            position: "bottom-right",
                        }
                    );
                } else {
                    toast.error("This product does not have more units in stock.", {
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
            toast.error(`${action.payload.name} removed from the cart.`, {
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
                toast.info(`1 ${action.payload.name} removed from the cart.`, {
                    position: "bottom-right",
                });
            } else {
                state.cartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );
                toast.error(`${action.payload.name} removed from the cart.`, {
                    position: "bottom-right",
                });
            }
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
            resetMsg: (state, action) => {
                state.msg = "";
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
                    state.cartItems.push({...action.payload, quantity: 1 });
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
            cleanDetail: (state) => {
                state.detailsOfProduct = {};
            },
        },
        getUsers: (state, action) => {
            state.usersLoaded = action.payload;
        },
        getCategoryID: (state, action) => {
            state.categoryID = action.payload;
        },
        getBrandID: (state, action) => {
            state.brandID = action.payload;
        },
        cleanDetail: (state) => {
            state.detailsOfProduct = {};
        },
        addFavorite: (state, action) => {
            // console.log(state.productsLoaded)
            state.favorites = action.payload;
        },

        //******************************* Authentication ********************************//
        loginGoogle: (state, action) => {
            const token = action.payload.token;
            const user = getUserFromToken(token);
            const role = user.role.name;
            console.log("Role in reducer - Login", role);
            state.role = role;
        },
        registerGoogle: (state, action) => {
            const token = action.payload.token;
            console.log("Token in reducer - Register", token);
            state.msg = action.payload;
        },
        logout: (state, action) => {
            state.role = "Guest";
        },
        setLoginError: (state, action) => {
            state.error = action.payload;
        },
        setRegisterError: (state, action) => {
            state.error = action.payload;
        }

        //**********************************************************************************/
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
    resetMsg,
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
    getBrandID,
    cleanDetail,
    addFavorite,
    loginGoogle,
    registerGoogle,
    logout,
    setLoginError,
    setRegisterError,
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
    console.log(newProduct);

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
    formData.append("state", newProduct.state);

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

//************************************ AUTHENTICATION *************************************** */

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
    // axios.post(`${apiUrl}/users/register`, payload) 
    // .then( (response) => {
    //     dispatch(loginUser(response.data));
    // })

    /*FALTA PROBAR Y LOS ERRORES*/
};

export const loginGoogleAsync = () => async(dispatch) => {
    axios
        .get(`${apiUrl}auth/login`)
        .then((response) => {
            if (Object.keys(response.data).length === 0) {
                return;
            }
            console.log("Response en Login", response.data);
            dispatch(loginGoogle(response.data));
            dispatch(cleanDetail());
        })
        .catch((error) => console.log(error));

};

export const registerGoogleAsync = () => (dispatch) => {
    axios
        .get(`${apiUrl}auth/register`)
        .then((response) => {
            console.log("Response in Register", response.data);
            if (response.data.error) {
                dispatch(setRegisterError(response.data.error));
            }
        })
        .catch((error) => console.log(error));

    /*FALTA PROBAR Y LOS ERRORES*/
};

export const logoutAsync = () => (dispatch) => {
    axios
        .get(`${apiUrl}auth/logout`)
        .then((response) => {
            console.log(response.data);
            dispatch(logout(response.data));
        })
        .catch((error) => console.log(error));

    /*FALTA PROBAR Y LOS ERRORES*/
};

//******************************************************************************** */

export const addFavoriteAsync = (payload) => (dispatch) => {
    axios
        .put(`${apiUrl}favorites/add`, payload)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => console.log(error));
};

export const getCategoryByIDAsync = (payload) => (dispatch) => {
    fetch(`${apiUrl}categories/${payload}`)
        .then((data) => data.json())
        .then((json) => {
            dispatch(getCategoryID(json));
        })
        .catch((error) => console.log(error));
};

export const updateCategoryAsync = (id, payload) => (dispatch) => {
    axios
        .put(`${apiUrl}categories/${id}`, payload)
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

export const createCategoryAsync = (payload) => (dispatch) => {
    axios
        .post(`${apiUrl}categories`, payload)
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

export const getBrandByIDAsync = (payload) => (dispatch) => {
    fetch(`${apiUrl}brands/${payload}`)
        .then((data) => data.json())
        .then((json) => {
            dispatch(getBrandID(json));
        })
        .catch((error) => console.log(error));
};

export const updateBrandAsync = (id, payload) => (dispatch) => {
    axios
        .put(`${apiUrl}brands/${id}`, payload)
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

export const createBrandAsync = (payload) => (dispatch) => {
    axios
        .post(`${apiUrl}brands`, payload)
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

export const getFavoriteAsync = (payload) => (dispatch) => {
    axios
        .get(`${apiUrl}favorites/user/${payload}`)
        .then((response) => {
            dispatch(addFavorite(response.data));
        })
        .catch((error) => console.log(error));
};

export default productSlice.reducer;