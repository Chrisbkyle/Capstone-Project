import React from 'react';
import HeaderSidenav from './HeaderSideNav';
import Footer from './Footer';
import BackgroundGrid from './LoginBackground';
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