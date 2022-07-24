import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategoryAsync } from "../../Redux/productSlice";


const CreateCategoryForm = () => {
    const [name, setName] = useState('')
    let dispatch = useDispatch();

    function handleInputChange(e) {
        setName(e.target.value,);
    }

    function onClickUpdate(e) {
        e.preventDefault();
        dispatch(createCategoryAsync(name));
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
                        value={name}
                        placeholder="Name"
                        />
                    </div>
                    <div className="mb-5 d-flex justify-content-center mt-4">
                        <input
                        className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
                        type="button"
                        value="Create Category"
                        onClick={onClickUpdate}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateCategoryForm;