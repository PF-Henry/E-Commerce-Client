import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailProductAsync } from '../../Redux/productSlice';
import { Footer } from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './ProductDetail.css';



export const ProductDetail = () => {
    const product = useSelector(state => state.products.detailsOfProduct);

    const productDetails = {
        name: '',
        img1: '',
        img2: '',
        img3: '',
        brandName: '',
        price: 0,
        stock: 0,
        technical_especification: '',
        categories: '',
    }

    // let name = '';
    // let img = '';
    // let img2 = '';
    // let img3= '';

    if (Object.values(product).length) {
        productDetails.name = product.name;
        productDetails.img1 = product.images[0].url_image;
        productDetails.img2 = product.images[0].url_image;
        productDetails.img3 = product.images[0].url_image;
        productDetails.brandName = product.brand.name;
        productDetails.price = product.price;
        productDetails.stock = product.stock;
        productDetails.technical_especification = product.technical_especification;
        productDetails.categories = product.categories[0].name;
        console.log(product)
    }

    const dispatch = useDispatch();
    const { id } = useParams();
    
    useEffect( () => {
        window.scrollTo(0, 0);
        dispatch(getDetailProductAsync(id));
    }, [])

    console.log(id)
  
  return (
    <div>
        <Navbar />
        <div className='div-container'>
            <h1>{productDetails.name}</h1>
            
            <div className='div-container-sectionOne'>
                <div className='div-container-sectionOne-One'>
                    <div className='div-container-sectionOne-One-Picture--One'>
                        <img src={productDetails.img1} alt={productDetails.name} className='img-fluid'/>
                    </div>

                    <div className='div-container-sectionOne-One-Picture--Two'>
                        <img src={productDetails.img1} alt={productDetails.name} className='img-fluid'/>    
                    </div>

                    <div className='div-container-sectionOne-One-Picture--Three'>
                        <img src={productDetails.img1} alt={productDetails.name} className='img-fluid'/>
                    </div>
        
                </div>

                <div className='div-container-sectionOne-Two'>
                    <img src={productDetails.img1} alt={productDetails.name} className='img-fluid'/>
                </div>

                <div className='div-container-sectionOne-Three'>

                </div>
            </div>

            <div className='div-container-sectionTwo'>
            <h3> $  {productDetails.price}</h3>
            <h3> {productDetails.stock}</h3>
            <h3> {productDetails.technical_especification}</h3>
            <h3> {productDetails.categories}</h3>
            </div>
        </div>

        <Footer />

    </div>
  )
}
