import React, { useState } from "react";
import ItemsPaging from "./ItemsPaging";
import { MdPublishedWithChanges } from "react-icons/md";
import {GrView} from 'react-icons/gr';
import { Link } from "react-router-dom";

const OrdersTableAdmin = ({ orders }) => {

  const [currentPg, setCurrentPg] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexLastItem = currentPg * itemsPerPage; 
  const indexFirstItem = indexLastItem - itemsPerPage; 
  const currentOrders = orders.slice(indexFirstItem, indexLastItem);

  const paging = (pageNum) => {
    setCurrentPg(pageNum)
  }


  function seeOrder(id){
    console.log(id);
  }

  return (
    <div className="letter-spacing mx-1 mt-3">
      <table className="table table-hover caption-top table-borderless">
        <caption>Orders</caption>
        <thead className="bg-purple-dark text-white">
          <tr>
            <th scope="col" className="px-3">Order ID</th>
            <th scope="col">User</th>
            <th scope="col" className="px-3">Totals</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Status</th>
            <th scope="col">Order ID MP</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider bg-light">
          { currentOrders?.map((order, index) => (
            <tr key={order.id} className="align-middle">
              <td>{order.id}</td>
              <td>{order.user.first_name}, {order.user.last_name} </td>
              <td>{order.total_sell}</td>
              <td>{order.sell_date.substring(8,10)}/{order.sell_date.substring(5,7)}/{order.sell_date.substring(0,4)}</td>
              <td>{order.sell_time}</td>
              <td>{order.state}</td>
              <td><p className="text-start">
                    {order.mp_order_id}<br></br>
                    Status: {order.mp_status}<br></br>
                    Payment: {order.mp_order_status.replaceAll('_', ' ',)}
                    </p></td>
              <td className="justify-content-center gap-3">
                <Link
                  to={`/product${order.id}`}
                  className="btn btn-aqua p-2 d-flex align-items-center rounded-circle"
                  data-bs-toggle="modal" data-bs-target="#modalChangeState"
                  data-id={order.id}
                  data-state={order.state}
                  title="Change Status">
                  <MdPublishedWithChanges size={"1.5rem"} />
                </Link>
              </td>
              <td className="justify-content-center gap-3">
                <button
                  href="#" 
                  onClick={()=>seeOrder(order.id)}
                  className="btn btn-aqua p-2 d-flex align-items-center rounded-circle"
                  title="See">
                  <GrView size={"1.5rem"} />
                </button>
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


      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button> */}

     {/* Modal----------------------------------------- */}
    <div class="modal fade" id="modalChangeState" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
</div>
    </div>
  );
};

export default OrdersTableAdmin;