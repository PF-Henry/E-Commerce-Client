import React, { useState, useEffect, useCallback } from "react";
import DropBox from '../DropBox/DropBox';
import ImageDropBox from '../DropBox/ImageDropBox';
import { MAX_IMAGES_PRODUCT  } from "../../Constants/parameters";

import {
  getBrandsAsync,
  getCategoriesAsync,
  // getImagesAsync,
  createProductAsync,
} from "../../Redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import AdminNavBar from "../Admin/AdminNavBar";
import "./CreateForm.css";




const stringRegExp = /^[a-zA-Z]{1,20}$/;
const numberRegExp = /^([1-9][0-9]{0,2}|1000)$/;

export function validate(input) {
  let errors = {};
  // if (!input.name) {
  //   errors.name = 'Name is required';
  // } else if (!stringRegExp.test(input.username)) {
  //   errors.name = 'Name is invalid';
  // }

  // if(!input.image){
  //   errors.image = 'Image is required';
  //   } else if (!urlRegExp.test(input.image)){
  //   errors.image = 'Image URL invalid';
  // }

  // if(!input.height){
  //   errors.height = 'Height is required';
  //   } else if (!numberRegExp.test(input.height)){
  //   errors.height = 'Height invalid';
  // }

  // if(!input.weight){
  //   errors.weight = 'Weight is required';
  //   } else if (!numberRegExp.test(input.weight)){
  //   errors.weight = 'Weight invalid';
  // }

  // if(input.types.length <= 0){
  //   errors.types = 'Types is required';
  // }

  return errors;
}

export default function Create() {
  const brands = useSelector((state) => state.products.brandsLoaded);
  const categories = useSelector((state) => state.products.categoriesLoaded);
  
  let error = useSelector((state) => state.products.error);
  let msg = useSelector((state) => state.products.msg);

  let dispatch = useDispatch();

  const inputStateInitial = {
    name: "",
    description: "",
    technical_especification: "",
    price: 0,
    stock: 0,
    brand: "",
    categories: [],
    images: [],
  };

  const [input, setInput] = useState(inputStateInitial);
  const [imagesDropBox, setImagesDropBox] = useState([]);

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    technical_especification: "",
    price: "",
    stock: "",
    brands: "",
    categories: "",
    images: "",
  });

  function handleInputChange(e) {
    // if ((e.target.name === 'name')  && (e.target.value.length>1)){
    //   if (!stringRegExp.test(e.target.value) ) {
    //     return false;
    //   }
    // }

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



// -------------------------- DropBox methods ---------------------------------
let idImage = 0;
const onDrop = useCallback((acceptedFiles) => {
  acceptedFiles.map((file, index) => {

    //console.log("file ======", file);

    const reader = new FileReader();

    reader.onload = function (e) {
      
      if (input.images.length < MAX_IMAGES_PRODUCT) {        
      
        setInput((prevState) => {
          if (prevState.images.length < MAX_IMAGES_PRODUCT) {
                return {
                      ...prevState,
                      images: [ ...prevState.images , {id: idImage++,  src: e.target.result }],
                    };
          } else {
            return prevState;
          };
          });
          
      }
    };
  
    reader.readAsDataURL(file);
    return file;
  });
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


//console.log("imagenes:", images);

function onClickDelete(e) {
  e.preventDefault();
  const id = e.target.id;

  setInput((prevState) => {
    return {
      ...prevState,
      images : prevState.images.filter((image) => parseInt(image.id) !== parseInt(id)),
    }});
}
// -------------------------- DropBox methods ---------------------------------





  

  



  function onChangeBrands(e) {
    if (e.target.value === "0") return;

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

  function onClickCreate(e) {
    e.preventDefault();

    console.log("Input:", input);
    
    if (Object.keys(errors).length === 0) {
      dispatch(createProductAsync(input));
    } else {
      setErrors({
        ...errors,
      });
    }
  }

  useEffect(() => {
    dispatch(getCategoriesAsync());
    dispatch(getBrandsAsync());

  }, [dispatch]);

  // useEffect(() => {
  //   errorCreate();
  //   setTimeout(()=>{dispatch(resetCreatedPokemon())},3000);
  //   // eslint-disable-next-line
  // },[error_msg]);

  return (
    <div className="letter-spacing">
      <AdminNavBar />

      <h1 className="formH1">Create Product</h1>

      <div className="formContainer">
        <div>
          {msg && msg.length > 0 ? (
            <div className="alert alert-success">{msg} </div>
          ) : (
            <div></div>
          )}
          {error && error.length > 0 ? (
            <div className="alert alert-success">{error} </div>
          ) : (
            <div></div>
          )}
        </div>
        <form className="formCreate">
          <div className="form-group">
            <label className="formItem" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              onChange={handleInputChange}
              className="form-control"
              name="name"
              value={input.name}
              placeholder="Name"
            />
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
            <div className="form-group col-lg-3 col-md-6">
              <label className="formItem" htmlFor="name">
                Price
              </label>
              <input
                type="text"
                onChange={handleInputChange}
                className="form-control"
                name="price"
                value={input.price}
                placeholder="Price"
              />
            </div>
            <div className="form-group col-lg-3 col-md-6">
              <label className="formItem" htmlFor="stock">
                Stock
              </label>
              <input
                type="text"
                onChange={handleInputChange}
                className="form-control"
                name="stock"
                value={input.stock}
                placeholder="Stock"
              />
            </div>
            <div className="form-group col-lg-6">
              <label className="formItem" htmlFor="brands">
                Brand
              </label>

              <select
                defaultValue={input.brand}
                onChange={onChangeBrands}
                name="brands"
                className="form-select"
              >
                <option value="0">Select Brand</option>
                {brands.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="formItem" htmlFor="categories">
              Categories
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

          <div className="form-group">
            <label className="formItem" htmlFor="images">
              Images
            </label>

            <DropBox onDrop={onDrop} />

            
            { input.images && (input.images.length > 0) &&
              (<div className="containerDropBoxImage"> 
                 {input.images.map((image, index) => {
                  return <div key={index} className="containerDropBoxImageAndButton">
                  <ImageDropBox image={image} />
                  <button className="btnDropBox" onClick={onClickDelete} id={image.id} >Delete</button>
                </div>
                })} 
              </div>)
            }
          </div>



          <div className="mb-5 d-flex justify-content-center mt-4">
            <input
              className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
              type="button"
              value="Add Product"
              onClick={onClickCreate}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
