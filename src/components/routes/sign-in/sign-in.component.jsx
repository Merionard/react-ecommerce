import {signInWithGooglePopup,createUserDocumentFromAuth,createAuthUserWithEmailAndPsw} from '../../../utils/firebase/conf-firebase'
import SignUpForm from '../../sign-up-form/sign-up.component';

const SignIn = () => {
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in
            </button>
            <SignUpForm/>
        </div>
    )

}

export default SignIn;