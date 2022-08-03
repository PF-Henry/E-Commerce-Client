import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrdersTableAdmin from "../Tables/OrdersTableAdmin";
import "./AdminDashboard.css";
import SearchbarOrders from "../Searchbar/SearchbarOrders";
import { getOrdersAdminAsync } from "../../Redux/productSlice";

const AdminOrders = () => {

  const dispatch = useDispatch();
  const allOrdersAdmin = useSelector((state) => state.products.ordersAdminLoadedFiltered);
  
  
  useEffect(() => {
    //if (!allOrdersAdmin.length) 
    {
            dispatch(getOrdersAdminAsync());
    }
  // }, [allOrdersAdmin, dispatch]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  

  return (
    <div>
      <div className="text-purple fs-1 fw-bold mt-3">Orders</div>
      <div className="mt-4">
        <div className="mb-2 mx-auto mb-lg-0 d-flex justify-content-center searchAdmin">
          <SearchbarOrders content="id" />
        </div>
        <div className="d-flex justify-content-evenly flex-wrap">
          <OrdersTableAdmin orders={allOrdersAdmin} />
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
