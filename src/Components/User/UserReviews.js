import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getReviewsaByUserAsync,
} from "../../Redux/productSlice";
import OrdersTable from "../Tables/OrdersTable";
import "./UserStyles.css";

const UserOrders = () => {
  const dispatch = useDispatch();
  const allReviewsUser = useSelector((state) => state.products.reviewsUser);
  const userId = useSelector((state) => state.products.userId);

  

  useEffect(() => {
    if (!allReviewsUser.length) {
     /// dispatch(getReviewsByUserAsync(userId));
    }
  }, [allReviewsUser, userId, dispatch]);

  return (
    <div>
      <div>
        <div className="text-purple fs-1 fw-bold mt-3">Orders</div>
        <div className="mt-4">
          <div className="d-flex justify-content-evenly flex-wrap">
            <OrdersTable orders={allReviewsUser}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
