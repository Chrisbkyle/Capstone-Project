import React from 'react';
import styled from "styled-components"

const RecipeTableTopBar = styled.div`
    font-size: 2rem;
    padding: 1rem;
    text-align: center;`

export default function TableTitle() {


    return (
        <div>
            <RecipeTableTopBar>
                Recipe Table
            </RecipeTableTopBar>
        </div>
    )
}