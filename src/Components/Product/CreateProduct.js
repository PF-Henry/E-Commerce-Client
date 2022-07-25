import React from "react";
import FormProduct from "./FormProduct";

export const CreateProduct = () => {

  
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
