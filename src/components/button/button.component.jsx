
import './button.styles.scss';
const BUTTON_STYLES_CLASSES ={
    google:'google-sign-in',
    inverted:'inverted'
}

const Button = ({children,classKey,...otherProps}) =>{
    return(
        <button className={`button-container ${BUTTON_STYLES_CLASSES[classKey]}`} {...otherProps}>{children}
        </button>
    )
}

export default Button;