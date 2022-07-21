import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Filteredbar from "../Filteredbar/Filteredbar";
// import Offers from "../Offers/Offers";
import Header from "../Header/Header";
// import Brands from "../Brands/Brands";
import { Footer } from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAsync, resetError } from "../../Redux/productSlice";
import sorting from "../../Functions/sorting";
import "./Home.css";

const Home = () => {
  const allProducts = useSelector((state) => state.products.productsLoaded);
  const sortingMethod = useSelector((state) => state.products.sorting);
  const filtersCategories = useSelector((state) => state.products.filter);
  const brandsFilter = useSelector((state) => state.products.brandsFilter);
  const error = useSelector((state) => state.products.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(getProductsAsync());
    }
  }, [allProducts, dispatch]);

  let sortedProducts = sorting([...allProducts], sortingMethod);

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

  let itemsPerPageChanged = useSelector(
    (state) => state.products.itemsPerPageState
  );
  //  console.log(itemsPerPageChanged);

  const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage ] = useState(itemsPerPageChanged);

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(setItemsPerPage(itemsPerPageChanged))
  // }, [itemsPerPageChanged])

  // console.log(itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPageChanged;
  const indexOfFirstItem = indexOfLastItem - itemsPerPageChanged;
  const currentItems = filteredProductsByBrands.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleSubmit = (e) => {
    dispatch(resetError());
    dispatch(getProductsAsync());
  };

  return (
    <div className="bg-light">
      <Header />
      <Filteredbar
        itemsPerPage={itemsPerPageChanged}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        productsArray={filteredProductsByBrands}
      />
      {error && error.length > 0 ? (
        <div className="pb-5">
          <div className="alert alert-warning product_not_found mb-5">
            {error}
          </div>
        </div>
      ) : (
        <Cards products={currentItems} />
      )}
      {/* <Offers /> */}
      {/* <Brands /> */}
      <Footer />
    </div>
  );
};

export default Home;
