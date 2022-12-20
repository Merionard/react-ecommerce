import { Fragment,useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import './navigation.styles.scss'
import {ReactComponent as Logo} from '../../../assets/crown.svg';
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/conf-firebase";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropDown from "../../cart-dropdown/cart-dropdown.component";
import { BagContext } from "../../../contexts/bag.context";


const Navigation = () => {
const {currentUser, setCurrentUser} = useContext(UserContext);
const {isBagOpen} = useContext(BagContext);

const signOutHandler = async ()=>{
    await signOutUser();
    setCurrentUser(null);

}

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <Logo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>Shop</Link>
                    {currentUser?(
                    <span className="nav-link" onClick={signOutHandler}>Sign out</span>
                    )
                    :(<Link className="nav-link" to='/sign-in'>Sign in</Link>)}
                    <CartIcon/>
                </div>
                {isBagOpen && <CartDropDown/>}
            </div>
            <Outlet />
        </Fragment>

    )
}

export default Navigation;