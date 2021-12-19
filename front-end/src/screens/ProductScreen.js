import React from 'react'
import Product from '../components/Product';

function ProductScreen() {
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="col-3"></div>
                <div className="col-3"></div>
            </div> 
        </div>
    )
}

export default ProductScreen;

