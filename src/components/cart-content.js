import './cart-content.css'
import { useState, useEffect } from 'react';
import HttpService from '../services/https-service';
import CartComponent from './cart-item-component';
import DataService, { cartItems } from '../services/data-service'
import NotificationService, { NOTIF_CART_CHANGED } from '../services/notification-service';

const http = new HttpService();
const ds = new DataService();
const ns = new NotificationService();
function CartContent() {
    const [cartState, setCartProducts] = useState({ cartItems: [] });
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        // loadData();
        ns.addObserver(NOTIF_CART_CHANGED, onCartChanged)
        console.log("intiializing items")
        ds.initializeCartItems()
        return () => {
            ns.removeObserver(NOTIF_CART_CHANGED, onCartChanged)
        }
    }, []);

    const onCartChanged = (newCart) => {
        console.log("Setting state")
        setCartProducts({ cartItems: newCart })
        setTotalPrice(ds.calculateCost())
    }

    // useEffect(() => {
    //     console.log(cartState)
    // }, [cartState]) 
    // This code logs cartState when cartState is changed

    // const loadData = () => {
    //     http.getCartItems().then(data => {
    //         console.log(data[0].products)
    //         setCartProducts({ cartItems: data[0].products });
    //     }).catch(err => {
    //         alert("Error, could not load products", err);
    //     })
    // }

    const cartItemList = () => {
        const list = cartState.cartItems.map((cartItem) => {
            return (
                <div className='cart-item' key={cartItem._id}>
                    <CartComponent cartItem={cartItem} />
                </div>
            )
        })
        return list
    }

    return (
        <main className='cartMain'>
            <div className='container-fluid'>
                <section className='product-listings'>
                    <div className='row'>
                        <div className='col'></div>
                        <div className='col-9'>
                            <h1>Your Cart</h1>
                            <hr />
                            <div className='cart-list'>
                                {cartItemList()}
                            </div>
                        </div>
                        <div className='col'></div>
                    </div>
                    <div className='row'>
                        <div className='col'></div>
                        <div className='col-9'>
                            <h1>Total: ${totalPrice}</h1>
                        </div>
                        <div className='col'></div>
                    </div>
                    {/* <div className='row product-list'>
                        <div className='col-12'>
                            <div className='row center-cards'>
                                {cartItemList()}
                            </div>
                        </div>
                    </div> */}
                </section>
            </div>
        </main>
    )
}

export default CartContent;