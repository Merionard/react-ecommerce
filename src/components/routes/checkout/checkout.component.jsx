import { useContext } from "react";
import { BagContext } from "../../../contexts/bag.context";
import CheckOutItem from "./checkout.item.component";
import './checkout.styles.scss';

const Checkout = ()=>{

    const {cartItems,totalPrice} = useContext(BagContext)

    return(
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                <span>Product</span>
                </div>
                <div className="header-block">
                <span>Description</span>
                </div>
                <div className="header-block">
                <span>Quantity</span>
                </div>
                <div className="header-block">
                <span>Price</span>
                </div>
                <div className="header-block">
                <span>Remove</span>
                </div>
            
            </div>
        {cartItems.map(cartItem=><CheckOutItem key={cartItem.id} item={cartItem} />)}
        <span className="total">Total: ${totalPrice}</span>
        </div>
    )
}

export default Checkout;