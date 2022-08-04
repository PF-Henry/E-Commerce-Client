import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersUserAsync, getAllDBProductsAsync } from '../../Redux/productSlice';
import OrdersTable from '../Tables/OrdersTable';
import './UserStyles.css'

const UserOrders = () => {
    const dispatch = useDispatch();
    const allOrdersUser = useSelector((state) => state.products.ordersUser);
    const allDBProducts = useSelector((state) => state.products.allDBProducts);
    const userId = useSelector((state) => state.products.userId);

    const productsOrderId = allOrdersUser.flatMap(e => e.ordersItems.map(e => e.productId));
    const productsOrder = [];

    for (let id of productsOrderId) {
        productsOrder.push(allDBProducts.filter(e => e.id === id))
    }

    const products = productsOrder.flat()

    console.log(products)

    useEffect(() => {
        dispatch(getOrdersUserAsync(userId));
        if (!allDBProducts.length) {
        dispatch(getAllDBProductsAsync());
        }
    }, [allDBProducts, dispatch]);

    return (
        <div>
            <div>
                <div className="text-purple fs-1 fw-bold mt-3">Orders</div>
                    <div className="mt-4">
                    <div className="d-flex justify-content-evenly flex-wrap">
                        <OrdersTable orders={allOrdersUser} products={products}/>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default UserOrders;