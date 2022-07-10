import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAsync } from "../../Redux/productSlice";

import sorting from "../../Functions/sorting";
import "./Cards.css";
const Cards = ({products}) => {
  const allProducts = useSelector((state) => state.products.productsLoaded);
  const sortingMethod = useSelector((state) => state.products.sorting);
  const filtersCategories = useSelector((state) => state.products.filter);
  const brandsFilter = useSelector((state) => state.products.brandsFilter);

  const dispatch = useDispatch();

  // console.log(allProducts)

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(getProductsAsync());
    }
  }, [allProducts, dispatch]);

  let sortedProducts = sorting([...allProducts], sortingMethod);
  console.log(sortedProducts);

  let filteredProducts = !filtersCategories.length
    ? sortedProducts
    : sortedProducts.filter((product) => {
        let nameListCategories = product.categories.map((c) => c.name);
        return nameListCategories.some((r) => filtersCategories.includes(r));
      });

  let filteredProductsByBrands = !brandsFilter.length
    ? filteredProducts
    : filteredProducts.filter((product) => {
        return brandsFilter.includes(product.brand.name);
      });

  return (

    <div className="d-flex justify-content-center gap-4 flex-wrap mt-5 cards-container">
      {filteredProductsByBrands.map((product) => (

        <Card object={product} key={product.id} />
      ))}
    </div>
  );
};

export default Cards;
