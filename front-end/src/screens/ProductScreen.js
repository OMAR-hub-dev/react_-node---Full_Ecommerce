import React from 'react'
import Rating from '../components/Rating';
import data from '../data';
import {Link, useParams} from 'react-router-dom';

function ProductScreen(props) {
    const params = useParams();
    const product = data.products.find((x) => x._id = params);
    if(!product){
        return <div> Product not Found</div>;
    }
    return (
        <div>
            <Link to='/' className='btn my-3 mx-3'>Back to result</Link>
            <div className="row container my-5">
                <div className="col-6">
                    <img src={product.image} className='img-fluid' alt={product.name} />
                </div>
                <div className="col-3">
                    <ul>
                        <li>{product.name}</li>
                        <li><Rating rating={product.rating} numReviews={product.numReviews} /> </li>
                        <li> Price: $ {product.price}</li>
                        <li> Description <p>{product.description}</p></li>
                    </ul>
                </div>
                <div className="col-3">
                    <div className="card card-body bg-gray">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>price</div>
                                    <div>{product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>{ product.countInStock>0 ? (<span className=' text-success'>In Stock</span>) : (<span className=' text-danger'>Unavailable</span>)}</div>
                                </div>
                            </li>
                            <li>
                                <button className='btn btn-block text-white bg-warning'>add to cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default ProductScreen;

