import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryByIDAsync } from '../../../Redux/productSlice'
import UpdateCategoryForm from "./UpdateCategory_BrandForm";

const UpdateCategory = () => {
    const category = useSelector(state => state.products.categoryID);
    let error = useSelector((state) => state.products.error);
    let msg = useSelector((state) => state.products.msg);
    const { id } = useParams()

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryByIDAsync(id));
    }, [dispatch, id]);

    return (
        <div className="letter-spacing">
            <h1 className="formH1">Update Category</h1>

            <div>
                {msg && msg.length > 0 ? (
                    <div className="alert alert-succes">{msg} </div>
                ) : (
                    <div></div>
                )}
                {error && error.length > 0 ? (
                    <div className="alert alert-succes">{error} </div>
                ) : (
                    <div></div>
                )}
            </div>

            {category.name && category.name.length &&
                <UpdateCategoryForm name={category.name} id={category.id} data='Category'/>
            }
        </div>
    )
}

export default UpdateCategory;