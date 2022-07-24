import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategoryAsync } from "../../Redux/productSlice";


const CreateCategoryForm = () => {
    const [category, setCategory] = useState({name : ''})
    let dispatch = useDispatch();

    function handleInputChange(e) {
        setCategory({
            name: e.target.value
        });
        console.log(category)
    }

    function onClickCreate(e) {
        e.preventDefault();
        dispatch(createCategoryAsync(category));
        alert('Category created')
    }

    return (
        <div className="letter-spacing">
            <div className="formContainer">
                <form className="formCreate">
                    <div className="form-group">
                        <label htmlFor="name" className="formItem">
                        Name
                        </label>
                        <input
                        type="text"
                        onChange={handleInputChange}
                        className="form-control"
                        name="name"
                        value={category.name}
                        placeholder="Name"
                        />
                    </div>
                    <div className="mb-5 d-flex justify-content-center mt-4">
                        <input
                        className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
                        type="button"
                        value="Create Category"
                        onClick={onClickCreate}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateCategoryForm;