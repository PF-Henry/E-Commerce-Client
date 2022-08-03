import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBrandByIDAsync } from '../../../Redux/productSlice'
import UpdateCategoryForm from "../UpdateCategory/UpdateCategory_BrandForm";

const UpdateBrand = () => {
    const brand = useSelector(state => state.products.brandID);
    let error = useSelector((state) => state.products.error);
    let msg = useSelector((state) => state.products.msg);
    const { id } = useParams()

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrandByIDAsync(id));
    }, [dispatch, id]);

    return (
        <div className="letter-spacing">
            <h1 className="formH1">Update Category</h1>

            <div>
                {msg && msg.length > 0 ? (
                    <div className="alert alert-warning">{msg} </div>
                ) : (
                    <div></div>
                )}
                {error && error.length > 0 ? (
                    <div className="alert alert-warning">{error} </div>
                ) : (
                    <div></div>
                )}
            </div>

            {brand.name && brand.name.length &&
                <UpdateCategoryForm name={brand.name} image={brand.image} id={brand.id} data='Brand'/>
            }
        </div>
    )
}

export default UpdateBrand;