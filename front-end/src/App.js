import React from 'react';
import data from './data';

function App() {
  return (
   <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
            <div className="container-fluid">
                <div><a href="#">logo</a></div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
        
              <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Centered nav only</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ">Disabled</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown08">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ">Cart</a>
                  </li>
                </ul>
              </div>
              
            </div>
          </nav>
    {/* <!-- end of navbar --> */}


    
    <div className = "collection-list mt-4 row gx-0 gy-3">
          {
            data.products.map((product)=>(
                <div key={product._id} className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                <div className = "collection-img position-relative">
                    <img src ={product.image} className = "w-100"/>
                    <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                </div>
                <div className = "text-center">
                    <div className = "rating mt-3">
                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                        <span className = "text-primary"><i className = "fas fa-star"></i></span>
                    </div>
                    <a href={`/procut/${product._id}`}></a><p className = "text-capitalize my-1">{product.name}</p>
                    <span className = "fw-bold">{product.price} $ </span>
                </div>
            </div>
            ))
          }     

        </div>
    
    
        
        
        </>
  );
}

export default App;
