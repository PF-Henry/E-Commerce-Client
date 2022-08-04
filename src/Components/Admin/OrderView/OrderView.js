import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanOrderDetails, getOrderDetailsAsync } from "../../../Redux/productSlice";
import pesos from "../../../Functions/currency";

import { useEffect } from "react";
import "./OrderView.css";


export const OrderView = () => {
  const { orderId } = useParams();
  const orderDetails = useSelector((state) => state.products.orderDetails);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderDetailsAsync(orderId));
    return () => {
      dispatch(cleanOrderDetails());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
      
 

  const zerofilled = (numero) =>{
    return ('000000'+numero).slice(-5);
  }

let total = 0;
if (orderDetails.id) {
  const a = orderDetails.ordersItems.map((item) => (item.unit_price * item.quantity));
  total = a.reduce((acc, b) => acc + b, 0);
}

     
  
  return (
    <div className="letter-spacing centrar_order">
        <NavLink
             to="/admin/admin/orders"
             className="div-container-header--btn animate__animated animate__fadeInLeft">
         <div  className="div-container-header--btn animate__animated animate__fadeInLeft">Back</div>
       </NavLink>
       <h1 className="formH1">ORDER VIEW</h1>


      <div>

            {orderDetails.id &&  (
              <div >
                
                    {/* ------------------------ 1 linea     */}
                    <div className="bg-app-header1 p-3 d-flex justify-content-between"> 
                      <div className="font-weight-bold">
                          ORDER NUMBER: {zerofilled(orderDetails.id)}
                       </div>
                       <div className="">
                          { (orderDetails.state === "created") ?
                                    <span className="bg-secondary text-white border border-primary rounded-pill item_state">{orderDetails.state.toString().toUpperCase()}</span>
                          : (orderDetails.state === "canceled") ?            
                                    <span className="bg-danger text-white border border-primary rounded-pill item_state">{orderDetails.state.toString().toUpperCase()}</span>
                          : (orderDetails.state === "processing") ?
                                    <span className="bg-warning text-white border border-primary rounded-pill item_state">{orderDetails.state.toString().toUpperCase()}</span>
                          : (orderDetails.state === "completed") ?
                                    <span className="border border-primary rounded-pill item_state item_state_completed">{orderDetails.state.toString().toUpperCase()}</span>
                           : ""}
                        </div>           
                    </div>

                    {/* ------------------------ 2 linea     */}
                    <div className="bg-app-header2 p-3 d-flex justify-content-between border-bottom border-secondary"> 
                      <div className="">
                            User:
                            <br></br>
                            {orderDetails.user.first_name}, {orderDetails.user.last_name}
                      </div>
                      <div className="">
                            email:<br></br>
                            {orderDetails.user.email}
                      </div>
                      <div className="">
                            Cellphone:<br></br>
                            {orderDetails.user.cellphone}
                      </div>
                    </div>



                    <div className="bg-app-header2 p-3 d-flex justify-content-between border-bottom border-secondary"> 
                      <div className="fw-bold">
                          ORDER DATE: {orderDetails.sell_date.substring(8,10)}/{orderDetails.sell_date.substring(5,7)}/{orderDetails.sell_date.substring(0,4)}
                      </div>
                      <div className="fw-bold">Payment:<br></br> {orderDetails.mp_order_status.replaceAll('_', ' ',)} </div>
                      <div className="fw-bold">
                          ORDER TIME: {orderDetails.sell_time}
                      </div>
                    </div>
                    
                    {/* ------------------------ 3 linea     */}
                    <div className="d-md-flex p-3 border-bottom border-secondary text-secondary letter-spacing d-none">
                        <div className="col-md-3 text-start">Product</div>  
                        <div className="col-md-4 text-start">Product</div>
                        <div className="col-md-2 text-start">Price</div>
                        <div className="col-md-1">Qty</div>
                        <div className="col-md-2 text-end">Subtotal</div>
                    </div>

                    {/* ------------------------ ITEM COMPRA     */}
                    {orderDetails.ordersItems.map((item) => (
                         <div className="d-md-flex p-3 border-bottom border-secondary text-secondary letter-spacing d-none">
                            <div className="col-3 d-flex justify-content-center pe-3 mb-2 mb-md-0">
                                <img
                                  src={
                                    item.product.images.length
                                      ? item.product.images[0].url_image
                                      : "https://www.sunrisemovement.org/es/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                                  }
                                  alt="product img"
                                  className="img-fluid maxH"
                                />
                            </div>
                            
                            <div className="col-md-4 text-start">{item.product.name}</div>
                            <div className="col-md-2 text-start">${pesos.format(item.unit_price)}</div>
                           <div className="col-md-1">{item.quantity}</div>
                           <div className="col-md-2 text-end">${pesos.format(item.unit_price * item.quantity)}</div>
                         </div>
                      ))}


                    {/* ------------------------ TOTAL COMPRA     */}
                    <div className="d-md-flex p-3 border-top border-secondary text-secondary letter-spacing d-none">
                        <div className="col-md-7 text-start">TOTAL ORDERS</div>
                        <div className="col-md-1 text-start"></div>
                        <div className="col-md-3"></div>   
                        <div className="col-md-1 text-end fw-bold">${pesos.format(total)}</div>
                    </div>

                </div>
            )}

      </div> 

        {/* {orderDetails.name && (orderDetails.name.length > 0) && ( */}

      
                            
            {/* id={id}
            name={orderDetails.name}
            description={orderDetails.description}
            technical_especification={orderDetails.technical_especification}
            price={orderDetails.price}
            stock={orderDetails.stock}
            brand={orderDetails.brand.name}
            categories={orderDetails.categories}
            images={orderDetails.images}
            state={orderDetails.state} */}
          
        
    </div>
  );
};
