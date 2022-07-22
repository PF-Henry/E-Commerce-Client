import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { getDetailProductAsync } from "../../Redux/productSlice";

import Form from "./UpdateFormProduct";
import AdminNavBar from "../Admin/AdminNavBar";

import { useEffect } from "react";

export const UpdateProduct = () => {
  const { id } = useParams();
  const productDetails = useSelector(
    (state) => state.products.detailsOfProduct
  );

  let error = useSelector((state) => state.products.error);
  let msg = useSelector((state) => state.products.msg);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailProductAsync(id));
    return () => {
      //dispatch(resetProductDetails());
    };
  }, [dispatch, id]);

  return (
    <div className="letter-spacing">
      <AdminNavBar />
      <h1 className="formH1">Update Product</h1>

      <div>
        <div>
          {msg && msg.length > 0 ? (
            <div className="alert alert-success">{msg} </div>
          ) : (
            <div></div>
          )}
          {error && error.length > 0 ? (
            <div className="alert alert-success">{error} </div>
          ) : (
            <div></div>
          )}
        </div>

        {productDetails.name && productDetails.name.length > 0 && (
          <Form
            id={id}
            name={productDetails.name}
            description={productDetails.description}
            technical_especification={productDetails.technical_especification}
            price={productDetails.price}
            stock={productDetails.stock}
            brand={productDetails.brand.name}
            categories={productDetails.categories}
            images={productDetails.images}
          />
        )}
      </div>
    </div>
  );
};
