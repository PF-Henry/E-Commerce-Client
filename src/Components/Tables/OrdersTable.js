import React, { useState } from "react";
import ItemsPaging from "./ItemsPaging";

const OrdersTable = ({ orders }) => {

  const [currentPg, setCurrentPg] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexLastItem = currentPg * itemsPerPage; 
  const indexFirstItem = indexLastItem - itemsPerPage; 
  const currentOrders = orders.slice(indexFirstItem, indexLastItem);

  const paging = (pageNum) => {
    setCurrentPg(pageNum)
  }

  return (
    <div className="letter-spacing mx-1 mt-3">
      <table className="table table-hover caption-top table-borderless">
        <caption>Pending Orders</caption>
        <thead className="bg-purple-dark text-white">
          <tr>
            <th scope="col" className="px-3">Order ID</th>
            <th scope="col">User ID</th>
            <th scope="col" className="px-3">Producs</th>
            <th scope="col">Totals</th>
          </tr>
        </thead>
        <tbody className="table-group-divider bg-light">
          { currentOrders?.map((order, index) => (
            <tr key={order.id} className="align-middle">
              <th scope="row">{index + 1}</th>
              <td>{order.name}</td>
              <td className="d-flex justify-content-center gap-3">
                {order.products.map( e => <td>{e}</td>)}
              </td>
              <td>{order.total}</td>
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