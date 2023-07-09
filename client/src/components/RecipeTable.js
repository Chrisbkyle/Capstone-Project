import '../App.css'
import React, { useState, useEffect } from 'react';
import sortTableData  from './Elements/SortTableData';
import useMediaQuery from './Elements/useMediaQuery';
import { headCells, headCellsMobile } from './RecipeTable/tableObjects';
import SortButton from './RecipeTable/SortButton';
import TableTitle from './RecipeTable/TableTitle';
import { TablePagination } from '@mui/material';
import { Link } from 'react-router-dom';
import { FalseHeader } from './styledComponents';
import styled from 'styled-components';
import FilterListIcon from '@mui/icons-material/FilterList';

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
//Styles for hidden filter display
const FilterButton = styled.button`
    font-family: inherit!important;
    font-size: 1.25rem;
    background-color: transparent!important;
    box-shadow: 2px 2px grey;
    border: 1px solid lightgrey;
    border-left: 1px solid lightgrey;
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
const FilterDisplay = styled.div`
    margin-top:4px;
    background-color: #EADCA6; 
    box-shadow: 0px 2px lightgrey;
    height: 3.5rem;
`
const FilterFlexItem = styled.div`
    display: flex;
    justify-content: center;
    width:33%;
    border: 3px outset #EADCA6;
    @media (max-width: 768px) {
        width: 50%;
    }
`
const FilterSearch = styled.input`
    font-size: 1rem;
    padding: .5rem;
    margin: .25rem;
    background-color: #EADCA6;
    border: 1px solid black;
    border-bottom: 2px solid black;
    border-radius: 4px;
    box-shadow: 2px 2px lightgrey;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const FilterSelect = styled.select`
    font-size: 1rem;
    padding: .5rem;
    margin: .25rem;
    background-color: #EADCA6;
    border: 1px solid black;
    border-bottom: 2px solid black;
    border-radius: 4px;
    box-shadow: 2px 2px lightgrey;
`



const RecipeTable = ({ sortConfig }) => {

    //Media style for button row, to ensure forth button disappears on resize
    const isTablet = useMediaQuery('(max-width: 768px)');
    const isNotTablet = useMediaQuery('min-width: 768px')

    const smallCol = {
        width: isTablet ? '28%' : '25%',
        
    }
    const largeCol = {
        width: isTablet ? '36%' : '25%',
    }
    const buttonHolderStyle = {
        padding: isTablet ? '0rem' : '1rem'
    }
    const disppearingCol = {
        display: isTablet ? 'none' : 'table-cell',
        width: isTablet ?  '0' : '25%'
    }
    const filterSearches = {
        width: isTablet ? '100%' : '66%'
    }

    const localApi = 'http://localhost:3001/'
    const deployedApi = 'http://13.239.25.244/server/'

    useEffect(() => {
        fetch(deployedApi + 'api/recipeRoutes/recipes/', {
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
        const [filterDisplay, setFilterDisplay] = useState(false)


        const [direction, setDirection] = useState()
        const [sortBy, setSortBy] = useState()
        const { showSortUi } = sortConfig || {}

        const [rowsPerPage, setRowsPerPage] = React.useState(5);
        const [page, setPage] = React.useState(0);


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

    // Filter data functions

    // All the table data eventually comes through the filteredData variable, this variable is the data's last stop before being 
    // rendered on the page
    const filteredData = items.filter(row =>
        Object.values(row).some(value =>
            value.toLowerCase().toString().includes(filterText.toLowerCase())
        )
    );

    const stationFilter = Array.from(new Set(items.map(items => items.station)))

    const toggleFilterDisplay = () => {
        setFilterDisplay(current => !current)
    }
    const handleSearchChange = (e) => {
        setFilterText(e.target.value)
    }
            

   
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

                <FilterButton onClick={toggleFilterDisplay}><FilterListIcon></FilterListIcon></FilterButton>
                <FilterDisplay style={{display: filterDisplay ? 'flex' : 'none'}}>
                    <FilterFlexItem>
                        <FilterSearch
                            placeholder= 'Search'
                            onChange={handleSearchChange}>
                        </FilterSearch>
                    </FilterFlexItem>
                    <FilterFlexItem>
                        <FilterSelect
                            style={filterSearches}
                            defaultValue={''}
                            onChange={e => setFilterText(e.target.value)}>
                            <option value=''>Filter Station</option>
                            {stationFilter.map((item) =>
                            <option>{item}</option>
                            )}
                        </FilterSelect>
                    </FilterFlexItem>
                </FilterDisplay>

                <Table>


                    <TableHeaderContent>
                        <TableHeaderRow>
                            {headCellsState.map((headCell) => (
                                
                                <TableCellHeader 
                                // style={buttonHolderStyle}
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

                                    <TableCell style={largeCol}>{item.recipe}</TableCell>

                                    <TableCell style={largeCol}>{item.dish}</TableCell>

                                    <TableCell style={smallCol}>{item.station}</TableCell>

                                    <TableCell style={disppearingCol}>{item.createdAt.slice(0, 10)}</TableCell>

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