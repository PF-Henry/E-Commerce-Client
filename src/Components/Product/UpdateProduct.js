import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProductAsync } from "../../Redux/productSlice";
import FormProduct from "./FormProduct";
import { useEffect } from "react";


export const UpdateProduct = () => {
  const { id } = useParams();
  const productDetails = useSelector((state) => state.products.detailsOfProduct);
  
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailProductAsync(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  
  return (
    <div className="letter-spacing">
      <div>

        {productDetails.name && productDetails.name.length > 0 && (
          <FormProduct
            id={id}
            name={productDetails.name}
            description={productDetails.description}
            technical_especification={productDetails.technical_especification}
            price={productDetails.price}
            stock={productDetails.stock}
            brand={productDetails.brand.name}
            categories={productDetails.categories}
            images={productDetails.images}
            state={productDetails.state}
          />
        )}
      </div>
    </div>
  );
};
