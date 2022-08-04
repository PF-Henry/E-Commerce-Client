import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemsPaging from "./ItemsPaging";
import { GrView } from "react-icons/gr";
import pesos from "../../Functions/currency";
import "./OrdersTable.css";

const OrdersTable = ({ orders, products }) => {
  const [currentPg, setCurrentPg] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexLastItem = currentPg * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexFirstItem, indexLastItem);

  const paging = (pageNum) => {
    setCurrentPg(pageNum);
  };

  return (
    <div className="letter-spacing mx-1 mt-3">
      <table className="table table-hover caption-top table-borderless">
        <caption>My Orders</caption>
        <thead className="bg-purple-dark text-white">
          <tr>
            <th scope="col" className="px-3">
              Order ID
            </th>
            <th scope="col">Total items</th>
            <th scope="col" className="px-3">
              Totals
            </th>
            <th scope="col">Status</th>
            <th scope="col">Payment Status</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider bg-light">
          {currentOrders?.map((order) => (
            <tr key={order.id} className="align-middle orderPointer">
              <td>{order.id}</td>
              <td>{products.length}</td>
              <td>$ {pesos.format(order.total_sell)}</td>
              <td>{order.state}</td>
              <td>{order.mp_order_status.replaceAll("_", " ")}</td>
              <td>{order.total}</td>
              <td className="justify-content-center gap-3">
                <Link to="/app/user/orders/detail">
                  <button
                    href="#"
                    className="btn btn-aqua p-2 d-flex align-items-center rounded-circle"
                    title="See more"
                  >
                    <GrView size={"1.5rem"} />
                  </button>
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
    </div>
  );
};

export default OrdersTable;
