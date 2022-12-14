
import { useState } from "react"
import { createAuthUserWithEmailAndPsw,createUserDocumentFromAuth } from '../../utils/firebase/conf-firebase'
import FormInput from "../form-input/form-input.component"
import './sign-up-form.styles.scss'
import Button from "../button/button.component"


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        if (password !== confirmPassword) {
            alert('wrong password!');
            return;

        }
        try {
            const {user}= await createAuthUserWithEmailAndPsw(email, password)
            await createUserDocumentFromAuth(user,{displayName});
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign up here</span>
            <form onSubmit={handleSubmit}>

            <FormInput 
            label='DisplayName'
            required
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange} />

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

            <FormInput 
            label='Confirm password'
            required
            type='password'
            name='password'
            value={password}
            onChange={handleChange} />

            <Button type="submit" >Submit</Button>
            </form>
        </div>
    )

}

export default SignUpForm;