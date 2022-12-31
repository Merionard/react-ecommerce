import { useContext } from "react";
import { BagContext } from "../../../contexts/bag.context";
import './checkout.item.styles.scss';

const CheckOutItem = ({ item }) => {

    const { removeItemToCard,increment,decrement } = useContext(BagContext);
    const { name, imageUrl, quantity, price } = item;


    const onDelete = () => {
        removeItemToCard(item);
    }


    return (
        <div className="checkout-item-container">
        <div className="image-container">
            <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=>decrement(item)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>increment(item)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
            
        <div className="remove-button" onClick={onDelete}>&#10005;</div>
        </div>

    )


}

export default CheckOutItem;