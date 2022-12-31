import { useContext } from "react";
import { BagContext } from "../../../contexts/bag.context";
import './checkout.item.styles.scss';

const CheckOutItem = ({ item }) => {

    const { setQuantity,removeItemToCard } = useContext(BagContext);
    const { name, imageUrl, quantity, price } = item;

    const onChangeQuantity = (event) => {
        setQuantity(event.target.value,item);
    }

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
            <div className="arrow">&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow">&#10095;</div>
        </span>
        <span className="price">{price}</span>
            
        <div className="remove-button" onClick={onDelete}>&#10005;</div>
        </div>

    )


}

export default CheckOutItem;