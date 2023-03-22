import React from 'react';
import HeaderSidenav from './HeaderSideNav';
import Footer from './Footer';
import BackgroundGrid from './LoginBackground';
import MainPageBox from './MainPage/MainPageBox';



export default function () {


    return(
        <div>


            {/* <HeaderSidenav /> */}

            <MainPageBox />

            <BackgroundGrid />

            {/* <Footer /> */}
        </div>
    )
}