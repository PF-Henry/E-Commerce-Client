import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getBrandByIDAsync } from '../../../Redux/productSlice'
import UpdateCategoryForm from "../UpdateCategory/UpdateCategory_BrandForm";

const UpdateBrand = () => {
    const brand = useSelector(state => state.products.brandID);
    const { id } = useParams()

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrandByIDAsync(id));
    }, [dispatch, id]);

    return (
        <div className="letter-spacing">
            <h1 className="formH1">Update Category</h1>

            {brand.name && brand.name.length &&
                <UpdateCategoryForm name={brand.name} id={brand.id} data='Brand'/>
            }
        </div>
    )
}

export default UpdateBrand;