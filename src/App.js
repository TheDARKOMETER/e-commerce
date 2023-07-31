import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HttpService from './services/https-service';
import React, { useEffect, useState } from 'react';
import Home from './pages/home'
import Products from './pages/products';
import AboutUs from './pages/aboutus';
import Cart from './pages/cart';

const http = new HttpService();
function App() {
  // const [productState, setProduct] = useState({ products: [] });

  // useEffect(() => {
  //   loadData();
  // }, [])

  // const loadData = () => {
  //   http.getProducts().then(data => {
  //     setProduct({ products: data });
  //     console.log(data)
  //   }).catch(err => {
  //     console.log("Error could not load products", err)
  //   })
  // }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
