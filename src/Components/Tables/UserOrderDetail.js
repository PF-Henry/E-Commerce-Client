import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrdersUserAsync,
  getAllDBProductsAsync,
} from "../../Redux/productSlice";
import ItemsPaging from "./ItemsPaging";
import pesos from "../../Functions/currency";

const UserOrderDetail = () => {
  const dispatch = useDispatch();
  const allOrdersUser = useSelector((state) => state.products.ordersUser);
  const allDBProducts = useSelector((state) => state.products.allDBProducts);
  const userId = useSelector((state) => state.products.userId);

  const productsOrderId = allOrdersUser.flatMap((e) => e.ordersItems);
  console.log(productsOrderId);
  const productsOrder = [];

  for (let product of productsOrderId) {
    productsOrder.push(allDBProducts.filter((e) => e.id === product.productId));
  }

  const products = productsOrder.flat();

  const product = [];

  for (let i = 0; i < productsOrderId.length; i++) {
    product[i] = {
      id: productsOrderId[i].productId,
      quantity: productsOrderId[i].quantity,
      price: productsOrderId[i].unit_price,
      info: products.filter((e) => e.id === productsOrderId[i].productId),
    };
  }

  useEffect(() => {
    dispatch(getOrdersUserAsync(userId));
    if (!allDBProducts.length) {
      dispatch(getAllDBProductsAsync());
    }
  }, [allDBProducts, userId, dispatch]);

  const [currentPg, setCurrentPg] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexLastItem = currentPg * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentOrders = product.slice(indexFirstItem, indexLastItem);

  const paging = (pageNum) => {
    setCurrentPg(pageNum);
  };

  return (
    <div>
      <div className="letter-spacing mx-1 mt-3">
        <table className="table table-hover caption-top table-borderless">
          <caption>My Orders</caption>
          <thead className="bg-purple-dark text-white">
            <tr>
              <th scope="col" className="px-3">
                Product
              </th>
              <th scope="col">Image</th>
              <th scope="col">Brand</th>
              <th scope="col" className="px-3">
                Quantity
              </th>
              <th scope="col">Price</th>
              <th scope="col" className="px-3">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody className="table-group-divider bg-light">
            {currentOrders?.map((p) => (
              <tr key={p.id} className="align-middle orderPointer">
                <td>{p.info[0].name}</td>
                <td className="d-flex justify-content-center gap-3">
                  {
                    <img
                      src={
                        p.info[0].images.length
                          ? p.info[0].images[0].url_image
                          : "https://www.sunrisemovement.org/es/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                      }
                      alt="product img"
                      className="img-fluid maxH"
                    />
                  }
                </td>
                <td>{p.info[0].brand.name}</td>
                <td>{p.quantity}</td>
                <td>$ {pesos.format(p.price)}</td>
                <td>$ {pesos.format(p.quantity * p.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ItemsPaging
        itemsPerPage={itemsPerPage}
        allItems={product.length}
        paging={paging}
      />
    </div>
  );
};

export default UserOrderDetail;
