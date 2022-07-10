import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAsync } from "../../Redux/productSlice";
import sorting from "../../Functions/sorting";

const Cards = () => {
  let allProducts = useSelector((state) => state.products.productsLoaded);
  const sortingMethod = useSelector((state) => state.products.sorting);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(getProductsAsync());
    }
  }, [allProducts, dispatch]);

  return (
    <div className="d-flex justify-content-center gap-4 flex-wrap mt-5">
      {sorting([...allProducts], sortingMethod).map((product) => (
        <Card object={product} key={product.id} />
      ))}
    </div>
  );
};

export default Cards;
