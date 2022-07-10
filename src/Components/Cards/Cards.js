import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAsync } from "../../Redux/productSlice";
import "./Cards.css";

const Cards = ( {products} ) => {
  let allProducts = useSelector((state) => state.products.productsLoaded);
  const dispatch = useDispatch();

  // console.log(allProducts)

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(getProductsAsync());
    }
  }, [allProducts, dispatch]);
  // console.log(allProducts);

  return (
    <div className="d-flex justify-content-center gap-4 flex-wrap mt-5 cards-container">
      {products.map((product) => (
        <Card object={product} key={product.id} />
      ))}
    </div>
  );
};

export default Cards;
