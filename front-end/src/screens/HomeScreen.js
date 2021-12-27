import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function HomeScreen() {
  const [products, setProducts]= useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () =>{
      try{
        setLoading(true);
      const {data} = await axios.get('/api/products');
      setLoading(false);
      setProducts(data);
      }
      catch(err){
        setError(err.message);
        setLoading(false);
      }
      
    };
    fetchData();
   
  }, [])
    return (
        
        <div >
            {loading ? (<LoadingBox></LoadingBox>) :
            error ? (<MessageBox variant="danger">{error}</MessageBox>) : (
              <div className = "collection-list mt-4 row gx-0 gy-3">
                <h2 className='text-center fw-bold my-3'>colection </h2>
                {products.map((product) =>
                  ( < Product key={product._id} product={product}></Product>
                ))} 
              </div>
            )}    

        </div>
        
    );
}
