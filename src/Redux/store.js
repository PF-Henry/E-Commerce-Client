import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

export default configureStore({
  reducer: {
    products: productReducer,
  },
});
