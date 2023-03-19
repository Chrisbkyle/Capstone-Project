import React from "react";
import styled from "styled-components";
import "../App.css"


const Grid = styled.div`
    display: grid;
    height 100vh;
    width 100vw;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    z-index: -1;
`


export default function BackgroundGrid() {
    return(

            <Grid>
                <div className='bg1'></div>
                <div className='bg2'></div>
                <div className='bg3'></div>
                <div className='bg4'></div>
            </Grid>

    )
}