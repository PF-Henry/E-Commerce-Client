import React, { useState, useEffect } from "react";
import {
  getBrandsAsync,
  getCategoriesAsync,
  getImagesAsync,
  createProductAsync,
} from "../../Redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import AdminNavBar from "../AdminDashboard/AdminNavBar";
import "./CreateForm.css";

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
  const images = useSelector((state) => state.products.imagesLoaded);

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

  // delete Categories de la lista
  function onClickDeleteImages(e) {
    e.preventDefault();
    let newImages = input.images.filter((item) => item !== e.target.value);
    setInput({
      ...input,
      images: newImages,
    });

    setErrors(
      validate({
        ...input,
        images: newImages,
      })
    );
  }

  function onChangeImages(e) {
    if (e.target.value === "0") return;

    if (input.images.filter((item) => item === e.target.value).length !== 0) {
      return;
    }

    setInput({
      ...input,
      images: [...input.images, e.target.value],
    });

    setErrors(
      validate({
        ...input,
        images: [...input.images, e.target.value],
      })
    );

    e.target.value = "0";
  }

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
    dispatch(getImagesAsync());

    // setInput(
    //   { name: 'Lenovo I7',
    //   description: 'Lenovo yoga 720',
    //   technical_especification: 'I7 8GB RAM 128GB SSD',
    //   price: 1000,
    //   stock: 10,
    //   brand: "Lenovo",
    //   categories: [],
    //   images: [],}
    // );
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

            <select
              className="form-select mb-5"
              defaultValue="0"
              onChange={onChangeImages}
              name="images"
            >
              <option value="0">Select Images</option>
              {images.map((item, index) => (
                <option key={index} value={item.url_image}>
                  {item.url_image}
                </option>
              ))}
            </select>
          </div>

          <div className="d-flex justify-content-center mt-3 flex-wrap gap-3 align-items-center">
            {input.images.map((item, index) => (
              <div key={index}>
                <img src={item} alt="product" width="100px" />
                <button
                  className="formBtnDelete ms-1"
                  value={item}
                  onClick={onClickDeleteImages}
                >
                  X
                </button>
              </div>
            ))}
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
