import { useContext } from "react";
import { BagContext } from "../../../contexts/bag.context";

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
        <div>
            <img src={imageUrl} alt={name} />
            <input type='number' value={quantity} onChange={onChangeQuantity} />
            <a onClick={onDelete} href='#'>X</a>
            <p>{name}</p>
        </div>

    )


}

export default CheckOutItem;