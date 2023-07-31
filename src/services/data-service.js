import HttpService from "./https-service";
import NotificationService, { NOTIF_CART_CHANGED } from "./notification-service";

let ns = new NotificationService()
let http = new HttpService()
let instance = null
let cartItems = []
localStorage.setItem('name', 'Bob')
localStorage.removeItem('name')
console.log(localStorage.getItem('name'))

sessionStorage.setItem('name', 'John')
sessionStorage.removeItem('name')

console.log(sessionStorage.getItem('name'))
document.cookie = 'name=Kyle; expires=' + new Date(3020, 0, 1).toUTCString();
document.cookie = 'lastName=Smith; expires=' + new Date(3020, 0, 1).toUTCString();



const loadCartItems = () => {
    return http.getCartItems().then(data => {
        cartItems = data[0].products
    }).catch(err => {
        console.log(err)
    })
}

class DataService {
    constructor() {
        // This implementation of singleton is wrong, revise it
        return !instance ? this : instance
        // return instance ? instance : (instance = this, loadCartItems())
    }

    addCartItem = (item) => {
        http.addToCart(item)
        loadCartItems().then(() => {
            ns.postNotification(NOTIF_CART_CHANGED, cartItems)
        })
    }

    initializeCartItems = () => {
        loadCartItems().then(() => {
            ns.postNotification(NOTIF_CART_CHANGED, cartItems)
        })
    }


    calculateCost = () => {
        let totalPrice = 0
        cartItems.forEach((cartItem) => { totalPrice += cartItem.price; })
        return totalPrice.toLocaleString("en-US")
    }

    deleteCartItem = (item) => {
        http.deleteCartItem(item).then(() => {
            return loadCartItems()
        }).then(() => {
            ns.postNotification(NOTIF_CART_CHANGED, cartItems)
        }).catch(error => {
            console.error(error)
        })
    }

}

export default DataService