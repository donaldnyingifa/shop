import React from 'react';
import './sign-in.scss';
import FormInput from '../form-input'
import CustomButton from '../custom-button'
import { signInWithGoogle } from '../../firebase'

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }


    handleChange = (event) => {
        const { name, value} = event.target
        this.setState({[name] : value }, ()=> {
            console.log(this.state)
        })
        
    }

    handleSubmit = event => {
        event.preventDefault();
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}> 
                    <FormInput 
                        name="email"
                        type="email"
                        label="Email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    
                    <FormInput 
                        name="password"
                        type="password"
                        label="Password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton onSubmit={this.handleSubmit}>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle } isGoogleSignIn>
                            {' '}
                            Sign in with Google{' '}
                        </CustomButton>
                    </div>
                </form> 
            </div>
        )
    }
}

export default SignIn;