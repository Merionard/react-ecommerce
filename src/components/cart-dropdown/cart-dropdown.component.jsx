import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { BagContext } from '../../contexts/bag.context'
import CartItem from '../cart-item/cart-item.component'
import { Link } from 'react-router-dom'


const CartDropDown = ()=>{
    const {cartItems,setBagOpen} = useContext(BagContext);
    const closeBag = ()=>{setBagOpen(false)};

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {cartItems.map(cartItem=>(<CartItem key={cartItem.id} cartItem={cartItem}/>))}
            <Link to='checkout' onClick={closeBag}><Button>CHECKOUT</Button></Link>
            </div>
        </div>
    )
}

export default CartDropDown;