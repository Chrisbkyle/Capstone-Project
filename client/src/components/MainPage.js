import React from 'react';
import HeaderSidenav from './HeaderNavFooter.js/HeaderSideNav';
import Footer from './Footer';
import BackgroundGrid from './LoginBackground';



export default function () {


    return(
        <div>
            <BackgroundGrid />

            <HeaderSidenav position="fixed"/>

            <Footer />
        </div>
    )
}