import React from 'react';
import HeaderSidenav from './SharedComponents/HeaderSideNav';
import Footer from './SharedComponents/Footer';
import BackgroundGrid from './notinuse/LoginBackground';
import MainPageBox from './MainPage/MainPageBox';
import { FalseHeader } from './styledComponents';



export default function () {


    return(
        <div>


            {/* <HeaderSidenav /> */}
            <FalseHeader/>
            <MainPageBox />

            {/* <BackgroundGrid /> */}

            {/* <Footer /> */}
        </div>
    )
}