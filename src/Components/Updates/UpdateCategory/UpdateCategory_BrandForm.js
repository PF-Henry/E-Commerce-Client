import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCategoryAsync, updateBrandAsync } from "../../../Redux/productSlice";


const UpdateCategoryForm = ({ name, id, data }) => {
    const initialState = {
        name: name
      };
    const [newName, setNewName] = useState(initialState)

    let dispatch = useDispatch();

    function handleInputChange(e) {
        setNewName({
            name: e.target.value,
        });
        console.log(newName.name)
    }

    function onClickUpdate(e) {
        if (data === 'Brand') {
            dispatch(updateBrandAsync(id, newName));
            console.log(newName)
        }
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
                        value={newName.name}
                        placeholder="Name"
                        />
                    </div>
                    <div className="mb-5 d-flex justify-content-center mt-4">
                        <input
                        className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
                        type="button"
                        value={`Update ${data}`}
                        onClick={onClickUpdate}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateCategoryForm;