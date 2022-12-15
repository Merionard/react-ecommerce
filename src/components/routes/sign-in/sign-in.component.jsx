import SignInForm from '../../sign-in-form/sign-in-form.component';
import SignUpForm from '../../sign-up-form/sign-up.component';
import './authentication.styles.scss'

const SignIn = () => {

    return(
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    )

}

export default SignIn;