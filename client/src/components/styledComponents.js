// 1. Login Page Styles 

import styled from "styled-components";

const LoginBoxStyle = styled.div`
    width: 350px;
    height: 300px;          
    position: absolute;
    bottom: 40%;
    right:0;
    left:0;
    margin-left:auto; 
    margin-right:auto;
    background-color: rgba(226,194,117,.95);
    padding: 1rem;
    box-shadow: 4px 4px rgba(0,0,0,.25);
    border-radius: 8px;
`
const LoginBoxTitle = styled.div`
    font-size: 2rem;
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
`

const LoginFormContainer = styled.div`
    margin-top: 1.5rem;
    margin-bottom: auto;

`
const LoginButton = styled.button`
    margin-top: 1.5rem;
    background-color: #C36A2D;
    width: 60%;
    font-size: 1.75rem;
    padding: .5 rem;
    border-radius: 8px;
    box-shadow: 2px 2px rgba(0,0,0,.25);
`
const LoginInput = styled.input`
    margin-top: 1rem;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    width: 100%;
    box-shadow: 0px 1px rgba(0,0,0,.25); 
    border: 0;
    background-color: rgba(226,194,117,.95);
    color: black;
`

// 2. Main Page Styles

const MainPageButton = styled.button`
    font-family: inherit!important;
    font-size: 1.25rem;
    font-weight: bold;
    background-color: #C3442D!important;
    box-shadow: 2px 2px grey;
    border: 1px solid lightgrey;
    border-left: 1px solid lightgrey;
    margin: 1rem;
    padding: 1rem;

    &:active {
        background-color: #C36A2D!important;
        // color: white!important;
    }
    @media (max-width: 768px) {
        font-size:1rem;
    }
  `


// 3. Styles for Recipe Search Table

const TableContainer = styled.div`
    margin: 2rem;
    border: 1px solid #EADCA6;
    @media (max-width: 768px) {
        margin: 0rem;
        font-size: 12px;
    }
`
const Table = styled.div`
    display: table;
    width: 100%;
    margin: 0px;
    border-collapse: collapse;
`
const TableRowGroup = styled.div`
    display: table-row-group;
    `
const TableRow = styled.div`
    display: table-row;
    margin: 0px;
    height: 3rem;
    border-top: 2px outset #EADCA6!important;
    border-bottom: 2px outset #EADCA6!important;
    &:hover{
        background-color: #EADCA6;
    };
    &:active{
        border-top: 2px inset black!important;
        border-bottom: 2px inset black!important;
    };
`
const TableLink = styled.a`
    width: 100%;
`
const TableHeaderRow = styled.div`
    display: table-row;
    margin: 0px;
    height: 3rem;
    border-bottom: 3px outset #EADCA6!important;
`
const TableHeaderContent = styled.div`
    display: table-header-group;
    padding: .6rem;
    height: 3rem;
    `
const TableContent = styled.div`
    display: table-row-group;
    padding: .6rem; 
    height: 3rem;
    `
const TableCell = styled.div`
    display: table-cell;
    width: 25%;
    text-align: left;
    padding-left: 5%;
    padding: 1rem;
    font-size: 1rem;    
    `
const TableCellHeader = styled.div`
    display: table-cell;
    border-bottom: 1px solid #EADCA6;
    width: 25%;
    text-align: left;
    padding-left: 5%;
    padding: 1rem;
    font-size: 1.25rem;    
    `
const RecipeTableTopBar = styled.div`
    font-size: 2rem;
    padding: 1rem;
`

const BlankButton = styled.button`
    font-family: inherit!important;
    font-size: 1.25rem;
    background-color: transparent!important;
    box-shadow: 2px 2px grey;
    border: 1px solid lightgrey;
    border-left: 1px solid lightgrey;
    margin-left: 1rem;
    &:hover {
        background-color: #EADCA6!important;
    }
    &:active {
        background-color: #C36A2D!important;
        color: white!important;
    }
    @media (max-width: 768px) {
        font-size:1rem;
    }
  `

  //4 Menu Builder Styles



const RecipeBuilderHolder = styled.div`
    background-color: #EADCA6;
    margin: 2rem;
    width: 75%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto auto auto;
    
`





export {
    LoginBoxStyle,
    LoginBoxTitle,
    LoginFormContainer,
    LoginInput,
    LoginButton,
    MainPageButton,
    TableContainer,
    Table,
    TableLink,
    TableRowGroup,
    TableHeaderRow,
    TableRow,
    TableHeaderContent,
    TableContent,
    TableCell,
    TableCellHeader,
    BlankButton,
    RecipeTableTopBar,
    RecipeBuilderHolder
}