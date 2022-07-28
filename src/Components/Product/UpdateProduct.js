import React from "react";
import imageToBase64 from 'image-to-base64/browser';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetError, resetMsg, cleanDetail, getDetailProductAsync } from "../../Redux/productSlice";
import FormProduct from "./FormProduct";
import { useEffect } from "react";


export const UpdateProduct = () => {
  const { id } = useParams();
  const productDetails = useSelector((state) => state.products.detailsOfProduct);
  
  let idImage = 0;

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetMsg());
    dispatch(resetError());
    dispatch(cleanDetail());
    dispatch(getDetailProductAsync(id));


  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  let arrayB64 = [];
  if (parseInt(productDetails.id) === parseInt(id)) {
    
    const getB64Images = async () => {
      
        const coquito = productDetails.images.map( async (image) => {
                      
                let b64 = await imageToBase64(image.url_image)
                            .then(base64 => {
                              const completab64 = "data:image/jpeg;base64," + base64;
                              
                              arrayB64.push({
                                id: idImage++,
                                src: completab64});

                              return
                            });
                  return b64;})
        return coquito;          
        ;}

    getB64Images();

  }

  
  return (
    <div className="letter-spacing">
      <div>

        {productDetails.name && productDetails.name.length > 0 && (
          <FormProduct
            id={id}
            name={productDetails.name}
            description={productDetails.description}
            technical_especification={productDetails.technical_especification}
            price={productDetails.price}
            stock={productDetails.stock}
            brand={productDetails.brand.name}
            categories={productDetails.categories}
            // images={productDetails.images}
            images={arrayB64}
            state={productDetails.state}
          />
        )}
      </div>
    </div>
  );
};
