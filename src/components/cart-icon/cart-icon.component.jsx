import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { useContext } from 'react'
import { BagContext } from '../../contexts/bag.context'

const CardIcon = () =>{

    const {isBagOpen,setBagOpen} = useContext(BagContext);
    const toogle = ()=>{
        setBagOpen(!isBagOpen)
    }
    return(
        <div className='cart-icon-container' onClick={toogle}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CardIcon;