import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, NavLink, } from "react-router-dom";
import DropBox from "../DropBox/DropBox";
import ImageDropBox from "../DropBox/ImageDropBox";
import {
  MAX_IMAGES_PRODUCT,
  MAX_CATEGORIES_PRODUCT,
} from "../../Constants/parameters";

import {
  getBrandsAsync,
  getCategoriesAsync,
  getProductsAsync,
  createProductAsync,
  updateProductAsync,
  createProductError,
  resetError,
  resetMsg,
} from "../../Redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import "./FormProduct.css";

const stringRegExp = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]+$/;
const numberRegExp = /^[0-9]+$/;

export function validate(input) {
  let errors = {};
  if (!input.name || !(input.name.length > 0)) errors.name = "Name is required";
  if (!input.price) errors.price = "Price is required";
  if (!input.stock) errors.stock = "Stock is required";
  if (input.brand === "" || input.brand === "0")
    errors.brand = "Brand is required";

  if (input.categories.length <= 0)
    errors.categories = "Categories is required";

  return errors;
}










export default function FormProduct(props) {
  
  let idImage = 0; // indice para el dropbox de imagenes
  const titleTypeOperation = (props.id === 0) ? "Create Product" : "Update Product";

  const brands = useSelector((state) => state.products.brandsLoaded);
  const categories = useSelector((state) => state.products.categoriesLoaded);
  const productDetails = useSelector((state) => state.products.detailsOfProduct);

  let error = useSelector((state) => state.products.error);
  let msg = useSelector((state) => state.products.msg);

  let navigate = useNavigate();


  let dispatch = useDispatch();
  useEffect(() => {
      setInput(inputStateInitial);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  
  useEffect(() => {

    dispatch(resetError());
    dispatch(resetMsg());
    dispatch(getCategoriesAsync());
    dispatch(getBrandsAsync());

    if (parseInt(props.id) === 0) setInput(inputStateInitial);
    else {
                                 
            setInput({...productDetails,
                        brand: productDetails.brand.name,         
                        images : props.images,                       
                      });

            const selectBrands = document.getElementById("selectBrands");
            selectBrands.value = productDetails.brand.name;

    };


    
    return () => {
      dispatch(getProductsAsync());
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [(props && productDetails)]);
//}, [(props.id)]);




  const inputStateInitial = {
    name: "",
    description: "",
    technical_especification: "",
    price: "",
    stock: "",
    brand: "",
    categories: [],
    images: [],
    state: true,
  };

  const [input, setInput] = useState(inputStateInitial);
  const [errors, setErrors] = useState({});



  function handleInputChange(e) {
    if (e.target.value.length === 0) {
      e.target.value = "";
    } else {
      if (e.target.name === "name" && !stringRegExp.test(e.target.value))
        return false;
      if (e.target.name === "price" && !numberRegExp.test(e.target.value))
        return false;
      if (e.target.name === "stock" && !numberRegExp.test(e.target.value))
        return false;
    }

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function onChangeCategories(e) {
    if (e.target.value === "0") return;
    if (input.categories === MAX_CATEGORIES_PRODUCT) return false;

    if (
      input.categories.filter((item) => item.name === e.target.value).length !==
      0
    ) {
      return;
    }

    let newCategory = { name: e.target.value };

    setInput({
      ...input,
      categories: [...input.categories, newCategory],
    });

    setErrors(
      validate({
        ...input,
        categories: [...input.categories, newCategory],
      })
    );

    e.target.value = "0";
  }

  function onClickDeleteCategories(e) {
    e.preventDefault();

    let newCategories = input.categories.filter(
      (item) => item.name !== e.target.value
    );
    setInput({
      ...input,
      categories: newCategories,
    });

    setErrors(
      validate({
        ...input,
        categories: newCategories,
      })
    );
  }

  function onChangeBrands(e) {
    //if (e.target.value === "0") return;

    setInput({
      ...input,
      brand: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        brand: e.target.value,
      })
    );
  }

  function onChangeState(e) {
    setInput({
      ...input,
      state: e.target.checked,
    });
  }

  // -------------------------- DropBox methods ---------------------------------
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (input.images.length < MAX_IMAGES_PRODUCT) {
          setInput((prevState) => {
            if (prevState.images.length < MAX_IMAGES_PRODUCT) {

              return {
                ...prevState,
                images: [
                  ...prevState.images,
                  { id: idImage++, src: e.target.result },
                ],
              };
            } else {
              return prevState;
            }
          });
        }
      };
      reader.readAsDataURL(file);
      return file;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onClickDelete(e) {
    e.preventDefault();
    const id = e.target.id;

    setInput((prevState) => {
      return {
        ...prevState,
        images: prevState.images.filter(
          (image) => parseInt(image.id) !== parseInt(id)
        ),
      };
    });
  }
  // -------------------------- DropBox methods ---------------------------------

  function onClickSalve(e) {
    e.preventDefault();

    setErrors(validate({ ...input }));

    if (Object.keys(errors).length === 0) {
      console.log(input);
        if (props.id === 0) dispatch(createProductAsync(input)); // alta de producto
        if (props.id > 0){    //  ----------------- // update de producto
          console.log("listo para update:", input);
          dispatch(updateProductAsync(props.id, input));
        } 
    } else {
      const newError = "Form incomplete. Please check the errors.";
      dispatch(createProductError(newError));
    }
  }



  useEffect(() => {
    setTimeout(() => {
      dispatch(resetError());
    }, 4000);
    // eslint-disable-next-line
  }, [error]);

  useEffect(() => {

    setTimeout(() => {
      
      if (msg && (props.id === 0)){
        dispatch(resetMsg());
        setInput(inputStateInitial);
      }
      
    }, 4000);
    // eslint-disable-next-line
  }, [msg]);
  //}, [props.id===0]);



  return (
    <div className="letter-spacing">
       <NavLink
            to="/admin/products"
            className="div-container-header--btn animate__animated animate__fadeInLeft"
          >
            Back
          </NavLink>
      <h1 className="formH1">{titleTypeOperation}</h1>

      <div className="formContainer">
        <div>
          {msg && msg.length > 0 ? (
            <div className="alert alert-success" role="alert">
              {msg}
              {window.scrollTo(0, 0)}
            </div>
          ) : (
            <div></div>
          )}
          {error && error.length > 0 ? (
            <div className="alert alert-danger" role="alert">
              {error}
              {window.scrollTo(0, 0)}
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <form>
          <div className="row col-12">
            <div className="column col-12 col-md-6">
              <div className="form-group">
                <label className="formItem" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  onChange={handleInputChange}
                  className="form-control"
                  name="name"
                  value={input.name}
                  maxLength={60}
                  placeholder="Name"
                />
                <div className="form_error text-danger">
                  {errors.name && <span>{errors.name}</span>}{" "}
                </div>
              </div>
              <div className="form-group">
                <label className="formItem" htmlFor="name">
                  Description
                </label>
                <input
                  type="text"
                  onChange={handleInputChange}
                  className="form-control"
                  name="description"
                  value={input.description}
                  placeholder="Description"
                />
              </div>
              <div className="form-group">
                <label className="formItem" htmlFor="name">
                  Technical Specification
                </label>
                <textarea
                  rows={3}
                  onChange={handleInputChange}
                  className="form-control"
                  name="technical_especification"
                  value={input.technical_especification}
                  placeholder="Technical Specification"
                />
              </div>

              <div className="row">
                <div className="form-group col-12 col-sm-6">
                  <label className="formItem" htmlFor="name">
                    Price
                  </label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    className="form-control"
                    name="price"
                    value={input.price}
                    maxLength={15}
                    placeholder="Price"
                  />
                  <div className="form_error text-danger">
                    {errors.price && <span>{errors.price}</span>}{" "}
                  </div>
                </div>
                <div className="form-group col-12 col-sm-6">
                  <label className="formItem" htmlFor="stock">
                    Stock
                  </label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    className="form-control"
                    name="stock"
                    value={input.stock}
                    maxLength={10}
                    placeholder="Stock"
                  />
                  <div className="form_error text-danger">
                    {errors.stock && <span>{errors.stock}</span>}{" "}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label className="formItem" htmlFor="brands">
                      Brand
                    </label>

                    <select
                      defaultValue={input.brand}
                      onChange={onChangeBrands}
                      name="brands"
                      className="form-select"
                      id="selectBrands"
                    >
                      <option value="0">Select Brand</option>
                      {brands.map((item, index) => (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <div className="form_error text-danger">
                      {errors.brand && <span>{errors.brand}</span>}{" "}
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label className="formItem" htmlFor="categories">
                      Categories:{" "}
                      <span className="form_indications">4 max</span>
                    </label>

                    <select
                      defaultValue="0"
                      onChange={onChangeCategories}
                      name="categories"
                      className="form-select"
                    >
                      <option value="0">Select Category</option>
                      {categories.map((item, index) => (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <div className="form_error text-danger">
                      {errors.categories && <span>{errors.categories}</span>}{" "}
                    </div>
                    <div className="d-flex justify-content-center mt-3 flex-wrap gap-3">
                      {input.categories.map((item, index) => (
                        <div key={index}>
                          <span>{item.name}</span>
                          <button
                            className="formBtnDelete ms-1"
                            value={item.name}
                            onClick={onClickDeleteCategories}
                          >
                            X
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="formItem" htmlFor="name">
                  Product State
                </label>
                <div className="form-check form-control-lg form-switch">
                  <label className="form-check-label small" htmlFor="state">
                    {input.state ? "Active" : "Inactive"}
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="state"
                    name="state"
                    checked={input.state}
                    onChange={onChangeState}
                  />
                </div>
              </div>
            </div>

            <div className="column col-12 col-md-6">
              <div className="form-group col-12 ">
                <label className="formItem" htmlFor="images">
                  Images: <span className="form_indications">3 max</span>
                </label>

                <DropBox onDrop={onDrop} />

                {input.images && input.images.length > 0 && (
                  <div className="containerDropBoxImage">
                    {input.images.map((image, index) => {
                      return (
                        <div
                          key={index}
                          className="containerDropBoxImageAndButton"
                        >
                          <ImageDropBox image={image} />
                          <button
                            className="btnDropBox"
                            onClick={onClickDelete}
                            id={image.id}
                          >
                            Delete
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mb-5 d-flex justify-content-center mt-4">
            <input
              className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
              type="button"
              value={(props.id === 0) ? "Create Product" : "Update Product"}
              onClick={onClickSalve}
            />
          </div>
        </form>
      </div>



    </div>
  );
}






                        
                                        //  src: imageToBase64(productDetails.images[1].url_image)
                                        //  .then(base64 => {console.log(base64); return base64;})}],
                        

                        // productDetails.images.map( async (image) => {
                      
                        //   let b64 = await imageToBase64(image.url_image)
                        //               .then(base64 => {
                        //                 const completab64 = "data:image/jpeg;base64," + base64;
                        //                 console.log(completab64);
                        //                 return completab64;
                        //               });
                        //     return {
                        //       id: idImage++,
                        //       src: b64,
                        //     }
                        // }),


 // convertir utl imagenes a base64
           


          //  const b64_array = [];
          //  if (productDetails.image && productDetails.images.length !== 0) {
          //    console.log("estoy en b64");
          //      b64_array = productDetails.images.map( async (image) => {
                      
          //      const b64 = imageToBase64(image.url_image)
          //                  .then(base64 => {
                             
          //                    const completab64 = "data:image/jpeg;base64," + base64;
          //                    console.log(completab64);
          //                    return completab64;
          //                  });
          //        return {
          //          id: idImage++,
          //          src: b64,
          //        }
          //    });
          //  }
