import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Filteredbar from "../Filteredbar/Filteredbar";
// import Offers from "../Offers/Offers";
import Header from "../Header/Header";
// import Brands from "../Brands/Brands";
import { Footer } from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAsync, getFavoriteAsync } from "../../Redux/productSlice";
import { FaArrowUp } from "react-icons/fa";
import sorting from "../../Functions/sorting";
import "./Home.css";

const Home = () => {
  const allProducts = useSelector((state) => state.products.productsLoaded);
  const sortingMethod = useSelector((state) => state.products.sorting);
  const filtersCategories = useSelector((state) => state.products.filter);
  const brandsFilter = useSelector((state) => state.products.brandsFilter);
  const error = useSelector((state) => state.products.error);

  const favoriteState = useSelector((state) => state.products.favorites);
  console.log(favoriteState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(getProductsAsync());
    }
  }, [allProducts, dispatch]);

  useEffect(() => {
    dispatch(getFavoriteAsync(1));
  }, [favoriteState.length]);

  // Esta función filtra los productos que están disponibles
  let availableProducts = [...allProducts].filter((product) => {
    return product.state === true;
  });

  let sortedProducts = sorting(availableProducts, sortingMethod);

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

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProductsByBrands.length]);

  // const handleSubmit = (e) => {
  //   dispatch(resetError());
  //   dispatch(getProductsAsync());
  // };

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
      <div className="d-flex justify-content-end">
        <div
          className="btn border-0 sticky-bottom position-fixed d-flex align-items-center text-white btn-aqua rounded-circle me-3 mb-3 p-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <FaArrowUp />
        </div>
      </div>
    </div>
  );
};

export default Home;
