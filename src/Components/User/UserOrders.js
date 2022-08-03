import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersUserAsync } from '../../Redux/productSlice';
import OrdersTable from '../Tables/OrdersTable';

const UserOrders = () => {
    const dispatch = useDispatch();
    const allOrdersUser = useSelector((state) => state.products.ordersUser);
    const allDBProducts = useSelector((state) => state.products.productsLoaded);
    console.log(allOrdersUser)
    //const productsOrderId = allOrdersUser.ordersItems.map(e => e.productId);
    // const productsOrder = allDBProducts.filter(product => product.id === productsOrderId);
    // console.log(productsOrder)
  
    // useEffect(() => {
    //     dispatch(getOrdersUserAsync());
    // }, [dispatch]);

    return (
        <div> hi
            {/* <div>
                <div className="text-purple fs-1 fw-bold mt-3">Orders</div>
                    <div className="mt-4">
                    <div className="d-flex justify-content-evenly flex-wrap">
                        <OrdersTable orders={allOrdersUser} products={productsOrder.name}/>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default UserOrders;