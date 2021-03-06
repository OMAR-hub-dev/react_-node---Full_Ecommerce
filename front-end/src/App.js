import React from 'react';
import {BrowserRouter, Route, Router, Routes,} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
  <BrowserRouter> 
   
        <header>
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
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen/>} exact />
            <Route path="/product/:id" element={<ProductScreen/>} />
          </Routes>
        </main>      
    
  </BrowserRouter> 
         
  );
}

export default App;
