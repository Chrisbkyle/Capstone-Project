import React from 'react';
import LoginBox from './LoginPage/LoginBox';
import LoginHeader from './LoginPage/LoginHeader';
import Footer from './SharedComponents/Footer'
import styled from 'styled-components';




export default function LoginPage() {
return  (
    <div>
        
        <LoginHeader />
            <div>
                <LoginBox />
            </div>
        <Footer />

    </div>
    )
};
