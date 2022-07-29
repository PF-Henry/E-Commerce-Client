import React, { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteAsync } from "../../Redux/productSlice";
import Cards from "../Cards/Cards";
import "./UserStyles.css";

const UserFavs = () => {
  const dispatch = useDispatch();
  const favoriteState = useSelector((state) => state.products.favorites);

  useEffect(() => {
    dispatch(getFavoriteAsync(1));
  }, [favoriteState.length, dispatch, favoriteState]);

  return (
    <div>
      <div className="text-purple fs-1 fw-bold mt-3">Favorites</div>
      <div className="d-flex justify-content-evenly flex-wrap">
        <Cards products={favoriteState} />
      </div>
    </div>
  );
};

export default UserFavs;
