import React from 'react'
import Rating from './Rating';

function Product(props) {
    const {product} = props;
    return (
        <div key={product._id} className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                <div className = "collection-img position-relative">
                <a href={`/product/${product._id}`}>
                    <img src ={product.image} className = "w-100"/>
                    <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">promo</span>
                    </a>
              </div>
                <div className = "text-center">
                    <Rating rating={product.rating} numReviews={product.numReviews}/>
                    <p className = "text-capitalize my-1">{product.name}</p>
                    <span className = "fw-bold">{product.price} $ </span>
                </div>
            </div>
    )
}

export default Product;


