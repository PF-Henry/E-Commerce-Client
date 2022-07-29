import React from "react";
import { useEffect } from "react";
import FormProduct from "./FormProduct";
import { useDispatch } from "react-redux";
import { resetError, resetMsg, cleanDetail } from "../../Redux/productSlice";

export const CreateProduct = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(resetMsg());
    dispatch(resetError());
    dispatch(cleanDetail());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="letter-spacing">
      <div>
          <FormProduct
            id={0}
            name={""}
            description={""}
            technical_especification={""}
            price={0}
            stock={0}
            brand={""}
            categories={[]}
            images={[]}
            state={true}
          />
      </div>
    </div>
  );
};
