import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCategoryByIDAsync } from '../../../Redux/productSlice'
import UpdateCategoryForm from "./UpdateCategoryForm";

const UpdateCategory = () => {
    const category = useSelector(state => state.products.categoryID);
    const { id } = useParams()

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryByIDAsync(id));
    }, [dispatch, id]);

    return (
        <div className="letter-spacing">
            <h1 className="formH1">Update Category</h1>

            {category.name && category.name.length &&
                <UpdateCategoryForm name={category.name} id={category.id}/>
            }
        </div>
    )
}

export default UpdateCategory;