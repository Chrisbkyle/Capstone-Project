import React from 'react';
import LoginBox from './LoginPage/LoginBox';
import LoginHeader from './LoginPage/LoginHeader';
import Footer from './SharedComponents/Footer'
import styled from 'styled-components';
import LoginBackground from './LoginBackground'




export default function LoginPage() {
return  (
    <div>
        
        <LoginHeader />
        <LoginBackground />
            <div>
                <LoginBox />
            </div>
        <Footer />

    </div>
    )
};
