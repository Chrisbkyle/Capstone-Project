import React from 'react';
import styled from 'styled-components';

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
    // border: 0px!important;
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



export {TableContainer, Table, TableLink, TableRowGroup, TableHeaderRow, TableRow, TableHeaderContent, TableContent, TableCell, TableCellHeader, BlankButton, RecipeTableTopBar}