import './product-component.css'

import { useState, useEffect } from 'react';
// import DataService from '../services/data-service'
import NotificationService from '../services/notification-service'
import HttpService from '../services/https-service';
import CartAddModal from '../modals/cart-add-modal';

// let ds = new DataService()
// let ns = new DataService()
const http = new HttpService();
function ProductComponent(props) {



    return (
        <div className='card product'>
            <img className='card-img-top' src={props.product.imgUrl}></img>
            <div className='card-body'>
                <h4 className='card-title'>{props.product.title}</h4>
                <p className='card-text'>Price: ${props.product.price}</p>
                <CartAddModal product={props.product}/>
                {/* <a href='#' onClick={() => http.addToCart(props.product)} className='btn btn-dark'>Add to Cart</a> */}
            </div>
        </div>
    );


}

export default ProductComponent;