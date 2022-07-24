import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBrandAsync } from "../../Redux/productSlice";


const CreateBrandForm = () => {
    const [brand, setBrand] = useState({name : ''})
    let dispatch = useDispatch();

    function handleInputChange(e) {
        setBrand({
            name: e.target.value
        });
    }

    function onClickCreate(e) {
        e.preventDefault();
        dispatch(createBrandAsync(brand));
        alert('Brand created')
    }

    return (
        <div class="collapse" id="collapseExample">
            <div className="letter-spacing">
                <form >
                    <div className="form-group">
                        <label htmlFor="name" className="formItem">
                        Name
                        </label>
                        <input
                        type="text"
                        onChange={handleInputChange}
                        className="form-control"
                        name="name"
                        value={brand.name}
                        placeholder="Name"
                        />
                    </div>
                    <div className="mb-5 d-flex justify-content-center mt-4">
                        <input
                        className="btn btn-success bg-purple-dark addToCartBtn border-0 letter-spacing"
                        type="button"
                        value="Create Brand"
                        onClick={onClickCreate}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateBrandForm;