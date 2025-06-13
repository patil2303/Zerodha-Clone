import React from 'react';
import Hero from './Hero';
import Investment from "./Investment"
import AccountTypes from './AccountTypes';
import OpenAccount from '../OpenAccount';
function SignupPage() {
    return ( 
        <>
            <Hero/>
            <Investment/>
            <AccountTypes/>
            <OpenAccount/>
        </>
     );
}

export default SignupPage;