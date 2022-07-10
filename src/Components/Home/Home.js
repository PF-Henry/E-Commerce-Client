import React from "react";
import Cards from "../Cards/Cards";
import Filteredbar from "../Filteredbar/Filteredbar";
import Offers from "../Offers/Offers";
import Header from "../Header/Header";
import Brands from "../Brands/Brands";
import { Footer } from "../Footer/Footer";

const Home = () => {
  return (
    <div className="bg-light">
      <Header />
      <Filteredbar />
      <Cards />
      {/* <Offers /> */}
      <Brands />
      <Footer />
    </div>
  );
};

export default Home;
