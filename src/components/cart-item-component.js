import DataService from "../services/data-service";
import NotificationService from "../services/notification-service";

let ds = new DataService()
let ns = new NotificationService()
function CartComponent(props) {
    const { cartItem } = props

    var onButtonClick = () => {
        ds.deleteCartItem(cartItem)
    }

    return (
        // <div className="card product">
        //     <img className="card-img-top" src={cartItem.imgUrl}></img>
        //     <div className="card-body">
        //         <h4 className="card-title">{cartItem.title}</h4>
        //         <p className="card-text">Price: ${cartItem.price}</p>
        //     </div>
        // </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="row cart-row">
                    <div className="col-md-2 col-sm-6 cart-img-container">
                        <img className="img-fluid cart-item-img" src={cartItem.imgUrl}></img>
                    </div>
                    <div className="col-md-10 col-sm-6 cart-item-body">
                        <h1>{cartItem.title}</h1>
                        <p className="item-price">Price: ${cartItem.price}</p>
                        <button className="btn btn-danger" onClick={onButtonClick}>Remove item</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartComponent;