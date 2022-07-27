import React, { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteAsync } from "../../Redux/productSlice";
import Cards from "../Cards/Cards";
import "./UserStyles.css";

const UserFavs = () => {
  const dispatch = useDispatch();
  const favoriteState = useSelector((state) => state.products.favorites);

  useEffect( () => {
    dispatch(getFavoriteAsync(1));
  }, [favoriteState.length, dispatch])

  return (
    <div className="userContainer">
      <div className="userDashboard">
        <div className="row d-flex justify-content-center mb-2 userPruchasesContainer">
          <div className="container row d-flex justify-content-center mb-2 userContainer">
            <div className="userCart">
              <h5 className="userMyFav">
                <FaHeart size={"1.8rem"} className="userCartIcon" />
                My favs
              </h5>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body cardBody">
                  <div className="cardContent">
                    <h5 className="card-title cardTitleH5">Item 1</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body cardBody">
                  <div className="cardContent">
                    <h5 className="card-title cardTitleH5">Item 2</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body cardBody">
                  <div className="cardContent">
                    <h5 className="card-title cardTitleH5">Item 3</h5>
                  </div>
                </div>
              </div>
            </div>

            <Cards products={favoriteState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFavs;
