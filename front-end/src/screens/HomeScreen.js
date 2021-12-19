import React from 'react';
import Product from '../components/Product';
import data from '../data';

export default function HomeScreen() {
    return (
        
        <div className = "collection-list mt-4 row gx-0 gy-3">
            <h2 className='text-center fw-bold my-3'>colection </h2>
          {
            data.products.map((product)=>(
                <Product key={product._id} product={product}></Product>
            ))
          }     

        </div>
        
    );
}
