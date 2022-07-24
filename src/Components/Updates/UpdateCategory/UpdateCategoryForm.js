import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCategoryAsync } from "../../../Redux/productSlice";


const UpdateCategoryForm = ({ name, id }) => {
    const [newName, setNewName] = useState(name)

    let dispatch = useDispatch();

    function handleInputChange(e) {
        setNewName(e.target.value,);
    }

    function onClickUpdate(e) {
        e.preventDefault();
        dispatch(updateCategoryAsync(id, newName));
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
                        value={newName}
                        placeholder="Name"
                        />
                    </div>
                    <div className="mb-5 d-flex justify-content-center mt-4">
                        <input
                        className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
                        type="button"
                        value="Update Product"
                        onClick={onClickUpdate}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateCategoryForm;