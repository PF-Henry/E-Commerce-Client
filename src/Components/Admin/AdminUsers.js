import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import UsersTable from "../Tables/UsersTable";
// import Searchbar from "../Searchbar/Searchbar";
import "./AdminDashboard.css";
import { useSelector } from "react-redux";
import { getUsersAsync } from "../../Redux/productSlice";

const AdminUsers = () => {
  const allUsers = useSelector((state) => state.products.usersLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!allUsers.length) {
      dispatch(getUsersAsync());
    }
  }, [allUsers, dispatch]);

  return (
    <div>
      <div className="text-purple fs-1 fw-bold mt-3">Users</div>
      <div className="mt-4">
        <div className="mb-2 mx-auto mb-lg-0 d-flex justify-content-center searchAdmin">
          {/* <Searchbar content={"ID or Username"} /> */}
        </div>
        <div className="d-flex justify-content-evenly flex-wrap">
          <UsersTable users={allUsers} />
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
