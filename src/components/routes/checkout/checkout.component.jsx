import { useContext } from "react";
import { BagContext } from "../../../contexts/bag.context";
import CheckOutItem from "./checkout.item.component";

const Checkout = ()=>{

    const {cartItems} = useContext(BagContext)

    return(
        <div>
        <p>CHECKOUT</p>
        {cartItems.map(cartItem=><CheckOutItem key={cartItem.id} item={cartItem} />)}
        </div>
    )
}

export default Checkout;