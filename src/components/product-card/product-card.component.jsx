import Button from "../button/button.component"
import './product-card.styles.scss'
import { useContext } from "react"
import { BagContext } from "../../contexts/bag.context"


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const { addItemToCard } = useContext(BagContext)

    const addProductToCart = () => addItemToCard(product);
    
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button classKey='inverted' onClick={addProductToCart}>Add to card</Button>

        </div>
    )
}

export default ProductCard