import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Filteredbar from "../Filteredbar/Filteredbar";
import Offers from "../Offers/Offers";
import Header from "../Header/Header";
import Brands from "../Brands/Brands";
import { Footer } from "../Footer/Footer";
import { useSelector } from "react-redux";

const Home = () => {
  let allProducts = useSelector((state) => state.products.productsLoaded);
  let itemsPerPageChanged = useSelector((state) => state.products.itemsPerPageState);
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
   const currentItems = allProducts.slice(indexOfFirstItem, indexOfLastItem);




  return (
    <div className="bg-light">
      <Header />
      <Filteredbar  itemsPerPage={itemsPerPageChanged} setCurrentPage={setCurrentPage} currentPage={currentPage}  />
      <Cards products={currentItems} />
      {/* <Offers /> */}
      <Brands />
      <Footer />
    </div>
  );
};

export default Home;
