import { useState } from "react"
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import './sign-in-form.styles.scss'
import {signInWithGooglePopup,mySignInWithUserAndPsw} from '../../utils/firebase/firebase.utils'



const SignInForm = () =>{

    const defaultValues = {
        email:'',
        password:''
    }
    const [fields,setFields] = useState(defaultValues);
    const {email,password} = fields;


    const handleChange = (event)=>{
        const {name,value} = event.target;
        setFields({...fields,[name]:value})

    }

    const handleSubmit = async(event)=>{

        event.preventDefault();
        try {
            await mySignInWithUserAndPsw(email,password);

        } catch (error) {
            console.log(error)
        }
        

    }

    const handleSignWithGoogle = async(event) =>{
        event.preventDefault();
        try {
             await signInWithGooglePopup();
        } catch (error) {
            console.log(error);
        } 

    }
    


    return(
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label='Email'
                required
                type='email'
                name='email'
                value={email}
                onChange={handleChange} />

                <FormInput 
                label='Password'
                required
                type='password'
                name='password'
                value={password}
                onChange={handleChange} />

                <div className="buttons-container">
                    <Button type='submit'>SIGN IN</Button>
                    <Button classKey='google' onClick={handleSignWithGoogle} type='button'>SIGN IN WITH GOOGLE</Button>
                </div>
                
            </form>
        </div>
    )
}

export default SignInForm;