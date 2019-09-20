import React from 'react';
import './SigninandSignoutPage.scss';
import SignIn from '../../components/sign-in'
import SignUp from '../../components/sign-up'

const SigninandSignoutPage = () => (
    <div className="sign-in-and-sign-up">
        < SignIn /> 
        < SignUp />
    </div>
)

export default SigninandSignoutPage;