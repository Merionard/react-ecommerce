import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { BagContext } from '../../contexts/bag.context'
import CartItem from '../cart-item/cart-item.component'


const CartDropDown = ()=>{
    const {cartItems} = useContext(BagContext);
    return(
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
        {cartItems.map(cartItem=>(<CartItem key={cartItem.id} cartItem={cartItem}/>))}
        <Button>CHECKOUT</Button>
        </div>
        
        </div>
    )
}

export default CartDropDown;