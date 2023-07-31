import 'whatwg-fetch'
import axios from 'axios';

class HttpService {
    getProducts = () => {
        var products = new Promise((resolve, reject) => {
            fetch('http://localhost:3004/product').then(response => {
                resolve(response.json())
            }).catch(err => {
                reject({ error: "An internal error has occcured" })
            })
        })
        return products;
    }

    addToCart = (selectedProduct) => {
        var isAlreadyInCart = new Promise((res, rej) => {
            axios.put('http://localhost:3004/cart/product/add', {
                cartID: "6479c591bce1464e99b3f1aa",
                productID: selectedProduct._id
            }).then(response => {
                res(response.data === true);
            }).catch(err => {
                rej(err)
            })
        })
        return isAlreadyInCart;
    }

    deleteCartItem = (item) => {
        return new Promise((res, rej) => {
            axios.delete(`http://localhost:3004/cart/delete/${item._id}`).then(response => {
                res(response)
                console.log(response.data)
            }).catch(err => {
                rej({ error: "An internal error has occured" })
                console.error(err)
            })
        })
    }

    getCartItems = () => {
        var cartProducts = new Promise((res, rej) => {
            fetch('http://localhost:3004/cart').then(response => {
                res(response.json())
            }).catch(err => {
                rej({ error: "An internal error has occured" })
            })
        })
        // return cartProducts.then(data => data.products); if you want to directly export the products prop
        return cartProducts
    }
}

export default HttpService

