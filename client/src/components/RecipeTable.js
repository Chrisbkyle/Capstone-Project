import '../App.css'
import React, { useState, useEffect } from 'react';

import sortTableData  from './RecipeTable/Elements/SortTableData';
import useMediaQuery from './RecipeTable/Elements/useMediaQuery';

import { headCells, headCellsMobile } from './RecipeTable/testObjects';
import SortButton from './RecipeTable/SortButton';
import TableTitle from './RecipeTable/TableTitle';

import { TablePagination } from '@mui/material';

import { Link } from 'react-router-dom';
import { FalseHeader } from './styledComponents';
import styled from 'styled-components';

import FilterOptions from './RecipeTable/FilterOptions';

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



const RecipeTable = ({ sortConfig }) => {
    const isTablet = useMediaQuery('(max-width: 768px)');

    const secondaryButton = {
        width: isTablet ? '20%' : '25%'
    }
    const mainButton = {
        width: isTablet ? '40%' : '25%'
    }
    const buttonHolderStyle = {
        padding: isTablet ? '0rem' : '1rem'
    }
    const disppearingButton = {
        display: isTablet ? 'none' : 'table-cell',
        width: isTablet ?  '0' : '25%'
    }

    

    useEffect(() => {
        fetch('http://localhost:3001/api/recipes/', {
        method: 'get',
        })
            .then(response => response.json())
            .then(data => setItems(data))
            .catch((err) => {
                console.log(err)
            })
        }, [])


        const [headCellsState, setHeadCellsState] = useState(headCells)

        const [items, setItems] = useState([]);
        const [sortedItems, setSortedItems] = useState(items)
        const [filterText, setFilterText] = useState('');


        const [direction, setDirection] = useState()
        const [sortBy, setSortBy] = useState()
        const { showSortUi } = sortConfig || {}

        const [rowsPerPage, setRowsPerPage] = React.useState(5);
        const [page, setPage] = React.useState(0);

console.log(items)

    //function for the Sort buttons
    const handleClick = event => {
        const sortDir = direction === 'descending' ? 'ascending' : 'descending'
        setDirection(sortDir)
        setSortBy(event.target.id)
        const sortConfig = { sortBy: event.target.id, direction: sortDir }
        setSortedItems(sortTableData(items, sortConfig))
    }        

    //for the pagination bar at bottom, from MUI
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    //Filter data functions
    const filteredData = items.filter(row =>
        Object.values(row).some(value =>
            value.toLowerCase().toString().includes(filterText.toLowerCase())
        )
    );
            

   
    // Handling responive features in the header
    const handleResize = () => {
        if (window.innerWidth <= 769) {
            setHeadCellsState(headCellsMobile)   
        } else {
            setHeadCellsState(headCells);
          }
        };
      
        // add event listener for window resize
        useEffect(() => {
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);

      
    


    return (
        <div>
            <FalseHeader />

            <TableContainer>

                <TableTitle />

                <FilterOptions 
                stateConfig={items}/>

                <Table>


                    <TableHeaderContent>
                        <TableHeaderRow>
                            {headCellsState.map((headCell) => (
                                
                                <TableCellHeader 
                                style={buttonHolderStyle}
                                    key={headCell.id}
                                >
                                    <SortButton
                                    direction={direction}
                                    id={headCell.id}
                                    onClick={handleClick}
                                    sortBy={sortBy}
                                    content={headCell.label}
                                    
                                />
                                </TableCellHeader>
                                
                            ))}
                        </TableHeaderRow>
                    </TableHeaderContent>
                    <TableContent>
                    
                        {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((item) => {

                            return (
                                <Link className='recipeTableLink' to={'/app/recipe_page/' + item.recipe}>

                                    <TableCell style={mainButton}>{item.recipe}</TableCell>

                                    <TableCell style={mainButton}>{item.dish}</TableCell>

                                    <TableCell style={secondaryButton}>{item.station}</TableCell>

                                    <TableCell style={disppearingButton}>{item.createdAt.slice(0, 10)}</TableCell>

                                </Link>
                          
                        )})}
                        
                    </TableContent>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={filteredData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage} />
            </TableContainer>
        </div>
    )
}




export default RecipeTable