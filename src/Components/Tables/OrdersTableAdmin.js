import React, { useState } from "react";
import ItemsPaging from "./ItemsPaging";
import { MdPublishedWithChanges } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
import pesos from "../../Functions/currency";
import { SiHexo } from "react-icons/si";
import { MdSaveAlt } from "react-icons/md";
import {
  CREATED,
  PROCESSING,
  CANCELED,
  COMPLETED,
} from "../../Constants/parameters";
import { useDispatch } from "react-redux";
import { updateOrdersAdminAsync } from "../../Redux/productSlice";
import "./OrdersTableAdmin.css";

const OrdersTableAdmin = ({ orders }) => {
  const [currentId, setCurrentId] = useState(0);
  const [currentPg, setCurrentPg] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexLastItem = currentPg * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexFirstItem, indexLastItem);

  const dispatch = useDispatch();

  const paging = (pageNum) => {
    setCurrentPg(pageNum);
  };

  const handleUpdateStatus = (e) => {
    e.preventDefault();
    const selectState = document.getElementById("modalSelectState");
    dispatch(updateOrdersAdminAsync(currentId, selectState.value));
  };

  const zerofilled = (numero) => {
    return ("000000" + numero).slice(-5);
  };

  const onClickChangeState = (id, state) => {
    const orderId = document.getElementById("modalOrderId");
    const orderState = document.getElementById("modalOrderState");

    setCurrentId(id); // numero de order a cambiar

    orderId.innerHTML = zerofilled(id);
    orderState.innerHTML = state.toUpperCase();

    let arrayStates = [];
    if (state.toUpperCase() === CREATED) {
      // mostrar radio button para cambiar a procesando o cancelado
      //   a processing o canceled
      arrayStates = [PROCESSING, CANCELED];
    }

    if (state.toUpperCase() === PROCESSING) {
      // mostrar radio button para cambiar a procesando o cancelado
      //   a completed o canceled
      arrayStates = [COMPLETED, CANCELED];
    }

    const selectState = document.getElementById("modalSelectState");

    for (let i = selectState.options.length - 1; i >= 1; i--) {
      selectState.remove(i);
    }

    arrayStates.forEach((state) => {
      const option = document.createElement("option");
      option.defaultValue = state;
      option.innerHTML = state.toUpperCase();
      selectState.appendChild(option);
    });

    return false;
  };

  return (
    <div className="letter-spacing mx-1 mt-3">
      <table className="table mw-100 table-hover caption-top table-borderless">
    {/* <div className="letter-spacing mx-1 mt-3 table-responsive">
      <table className="table table-hover caption-top table-borderless"> */}
        <caption>Orders</caption>
        <thead className="bg-purple-dark text-white">
          <tr className="align-middle">
            <th scope="col" className="px-3">
              Order ID
            </th>
            <th scope="col">Status</th>
            <th scope="col">User</th>
            <th scope="col" className="px-3">
              Totals
            </th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Order ID MP</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider bg-light">
          {currentOrders?.map((order) => (
            <tr key={order.id} className="align-middle">
              <td>{zerofilled(order.id)}</td>
              <td>
                {" "}
                {order.state === "created" ? (
                  <span className="bg-secondary text-white border border-primary rounded-pill item_state">
                    {order.state.toString().toUpperCase()}
                  </span>
                ) : order.state === "canceled" ? (
                  <span className="bg-danger text-white border border-primary rounded-pill item_state">
                    {order.state.toString().toUpperCase()}
                  </span>
                ) : order.state === "processing" ? (
                  <span className="bg-warning text-white border border-primary rounded-pill item_state">
                    {order.state.toString().toUpperCase()}
                  </span>
                ) : order.state === "completed" ? (
                  <span className="border border-primary rounded-pill item_state item_state_completed">
                    {order.state.toString().toUpperCase()}
                  </span>
                ) : (
                  ""
                )}
              </td>
              <td>
                {order.user.first_name}, {order.user.last_name}{" "}
              </td>
              <td>$ {pesos.format(order.total_sell)}</td>
              <td>
                {order.sell_date.substring(8, 10)}/
                {order.sell_date.substring(5, 7)}/
                {order.sell_date.substring(0, 4)}
              </td>
              <td>{order.sell_time}</td>

              <td>
                <p className="text-start">
                  {order.mp_order_id}
                  <br></br>
                  Status: {order.mp_status}
                  <br></br>
                  Payment: {order.mp_order_status.replaceAll("_", " ")}
                </p>
              </td>
              <td className="justify-content-center gap-3">
                <button
                  id={order.id}
                  onClick={() => onClickChangeState(order.id, order.state)}
                  data-id={order.id}
                  data-state={order.state}
                  disabled={
                    order.state === "canceled" || order.state === "completed"
                  }
                  className="btn btn-aqua p-2 d-flex align-items-center rounded-circle"
                  data-bs-toggle="modal"
                  data-bs-target="#modalChangeState"
                  title="Change Status"
                >
                  <MdPublishedWithChanges size={"1.5rem"} />
                </button>
              </td>
              <td className="justify-content-center gap-3">
                <Link
                  to={`${order.id}`}
                  className="btn btn-aqua p-2 d-flex align-items-center rounded-circle"
                  title="See"
                >
                  <GrView size={"1.5rem"} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ItemsPaging
        itemsPerPage={itemsPerPage}
        allItems={orders.length}
        paging={paging}
      />

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="modalChangeState"
        tabIndex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content border-0">
            <div className="modal-header bg-purple-dark text-white">
              <div className="text-white d-flex align-items-center letter-spacing">
                <SiHexo fontSize={"2.3rem"} />
                <div className="d-flex pb-1">
                  <div className="fs-4">exa</div>
                  <div className="fw-bold text-aqua fs-4">tech</div>
                </div>
              </div>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fw-bold py-24">
              <div>
                Status Order: Nº&nbsp;
                <span id="modalOrderId"></span>
                &nbsp;-&nbsp;
                <span id="modalOrderState"></span>
              </div>
              <hr />

              <div className="d-flex justify-content-center">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="modalSelectState"
                >
                  <option selected>Select state Order</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary letter-spacing"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger d-flex align-items-center letter-spacing gap-1"
                onClick={handleUpdateStatus}
                data-bs-dismiss="modal"
              >
                <MdSaveAlt size={"1.5rem"} />
                Update State
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersTableAdmin;
