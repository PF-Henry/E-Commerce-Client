import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailProductAsync } from '../../Redux/productSlice';
import { Footer } from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './ProductDetail.css';



export const ProductDetail = () => {
    const product = useSelector(state => state.products.detailsOfProduct);
    let name = '';
    let img = '';
    let img2 = '';
    let img3= '';

    if (Object.values(product).length) {
        name = product.name;
        img = product.images[0].url_image;
        img2 = product.images[0].url_image;
        img3 = product.images[0].url_image;
    }

    const dispatch = useDispatch();
    const { id } = useParams();
    
    useEffect( () => {
        dispatch(getDetailProductAsync(id));
    }, [])

    console.log(id)
  
  return (
    <div>
        <Navbar />
        <div className='div-container'>
            <div className='div-container-sectionOne'>
                <div className='div-container-sectionOne-One'>
                    <div className='div-container-sectionOne-One-Picture--One'>
                        <img src={img} alt={name} className='img-fluid'/>
                    </div>

                    <div className='div-container-sectionOne-One-Picture--Two'>
                        <img src={img2} alt={name} className='img-fluid'/>    
                    </div>

                    <div className='div-container-sectionOne-One-Picture--Three'>
                        <img src={img3} alt={name} className='img-fluid'/>
                    </div>
        
                </div>

                <div className='div-container-sectionOne-Two'>
                    <img src={img} alt={name} className='img-fluid'/>
                </div>

                <div className='div-container-sectionOne-Three'>

                </div>
            </div>

            <div className='div-container-sectionTwo'>

            </div>
        </div>

        <Footer />

    </div>
  )
}
