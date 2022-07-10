import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAsync } from "../../Redux/productSlice";

const Cards = () => {
  let allProducts = useSelector((state) => state.products.productsLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(getProductsAsync());
    }
  }, [allProducts, dispatch]);
  console.log(allProducts);

  return (
    <div className="d-flex justify-content-center gap-4 flex-wrap mt-5">
      {allProducts.map((product) => (
        <Card object={product} key={product.id} />
      ))}
    </div>
  );
};

export default Cards;
