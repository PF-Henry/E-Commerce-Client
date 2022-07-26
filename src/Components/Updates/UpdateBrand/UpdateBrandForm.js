import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCategoryAsync } from "../../../Redux/productSlice";
// import DropBox from '../DropBox/DropBox.jsx';
// import ImageDropBox from '../DropBox/ImageDropBox.jsx';


const UpdateBrandForm = ({ name, image, id }) => {
    const initialState = {
        name: name,
        image: image
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
        e.preventDefault();
        dispatch(updateCategoryAsync(id, newName));
        alert('succesfull')
    }

    // -------------------------- DropBox methods ---------------------------------
    // let idImage = 0;
    // const onDrop = useCallback((acceptedFiles) => {
    // acceptedFiles.map((file, index) => {
    //     const reader = new FileReader();
    //     reader.onload = function (e) {
    //     if (input.images.length < 2) {        
    //         setInput((prevState) => {
    //         if (prevState.images.length < 2) {
    //                 return {
    //                     ...prevState,
    //                     images: [ ...prevState.images , {id: idImage++,  src: e.target.result }],
    //                     };
    //         } else {
    //             return prevState;
    //         };
    //         });          
    //     }
    //     };
    //     reader.readAsDataURL(file);
    //     return file;
    // });
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // function onClickDelete(e) {
    //     e.preventDefault();
    //     const id = e.target.id;

    //     setInput((prevState) => {
    //     return {
    //         ...prevState,
    //         images: prevState.images.filter(
    //         (image) => parseInt(image.id) !== parseInt(id)
    //         ),
    //     };
    //     });
    // }
    // -------------------------- DropBox methods ---------------------------------

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

                    {/* <div className="column col-12 col-md-6">
                        <div className="form-group col-12 ">
                            <label className="formItem" htmlFor="images">
                            Images: <span className="form_indications">1 max</span>
                            </label>

                            <DropBox onDrop={onDrop} />

                            
                            { newName.image && (newName.image.length > 0) &&
                            (<div className="containerDropBoxImage"> 
                                <div className="containerDropBoxImageAndButton">
                                    <ImageDropBox image={image} />
                                    <button className="btnDropBox" onClick={onClickDelete} id={image.id} >Delete</button>
                                </div>
                            </div>)
                            }

                        </div>
                    </div> */}

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

export default UpdateBrandForm;