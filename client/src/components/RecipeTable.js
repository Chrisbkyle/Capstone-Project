import '../App.css'
import React, { useState, useEffect } from 'react';
import sortTableData from './RecipeTable/Elements/SortTableData';
import { headCells } from './RecipeTable/testObjects';
import { Table, TableHeaderRow, TableHeaderContent, TableContent, TableCell, TableContainer, TableCellHeader, BlankButton } from './styledComponents';
import SortButton from './RecipeTable/SortButton';
import { TablePagination, TextField } from '@mui/material';
import TableTitle from './RecipeTable/TableTitle';
import { Link } from 'react-router-dom';
import { FalseHeader } from './styledComponents';
import FilterListIcon from '@mui/icons-material/FilterList';
import styled from 'styled-components';


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
`
const FilterSelect = styled.select`
    width: 50%;
    font-size: 1rem;
    padding: .5rem;
    margin: .25rem;
    background-color: #EADCA6;
    border: 1px solid black;
    border-bottom: 2px solid black;
    border-radius: 4px;
    box-shadow: 2px 2px lightgrey;
`
const FilterSearch = styled.input`
    width: 50%;
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



    useEffect(() => {
        fetch('http://localhost:3001/officechef/recipes/', {
        method: 'get',
        })
            .then(response => response.json())
            .then(data => setItems(data))
            .catch((err) => {
                console.log(err)
            })
        }, [])
    
        const [items, setItems] = useState([]);
        const [sortedItems, setSortedItems] = useState(items)
        const [direction, setDirection] = useState()
        const [sortBy, setSortBy] = useState()
        const { showSortUi } = sortConfig || {}
        const [rowsPerPage, setRowsPerPage] = React.useState(5);
        const [page, setPage] = React.useState(0);
        const [filterText, setFilterText] = useState('');
        const [filterDisplay, setFilterDisplay] = useState(false)
  

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
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };

    //Filter data functions
    const filteredData = items.filter(row =>
        Object.values(row).some(value =>
          value.toLowerCase().toString().includes(filterText.toLowerCase())
      )
    );

    const toggleFilterDisplay = () => {
        setFilterDisplay(current => !current)
    }
    const handleSearchChange = (e) => {
        setFilterText(e.target.value)
    }


    

// useEffect(() => {
//     console.log('search value was changed')
// }, [filterText])
    return (
        <div>
            <FalseHeader />
            <TableContainer>
            <TableTitle />
                <BlankButton onClick={toggleFilterDisplay}><FilterListIcon></FilterListIcon></BlankButton>
                <FilterDisplay style={{display: filterDisplay ? 'flex' : 'none'}}>
                    <FilterFlexItem>
                    <FilterSearch
                        value={filterText}
                        placeholder= 'Search'
                        onChange={handleSearchChange}>
                    </FilterSearch>
                    </FilterFlexItem>
                    <FilterFlexItem>
                        <FilterSelect 
                            onChange={e => setFilterText(e.target.value)}>
                            <option style={{borderBottom: '1px solid black'}}>Filter Dish</option>
                            {items.map((item) =>
                            <option>{item.dish}</option>
                            )}
                        </FilterSelect>
                    </FilterFlexItem>
                    <FilterFlexItem>
                    <FilterSelect
                        onChange={e => setFilterText(e.target.value)}>
                            <option value=''>Filter Station </option>
                               {items.map((item) =>
                            <option>{item.station}</option>
                            )}
                        </FilterSelect>
                    </FilterFlexItem>
                </FilterDisplay>                    


                <Table>
                    <TableHeaderContent>
                        <TableHeaderRow>
                            {headCells.map((headCell) => (
                                <TableCellHeader 
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

                                <Link className='recipeTableLink'to={'/recipe_page/' + item.recipe}>

                                {/* <TableRow> */}

                                    <TableCell>{item.recipe}</TableCell>

                                    <TableCell>{item.dish}</TableCell>

                                    <TableCell>{item.station}</TableCell>

                                    <TableCell>{item.createdAt.slice(0, 10)}</TableCell>
                                    
                                {/* </TableRow> */}
                                </Link>
                                
                        )})}
                    </TableContent>
                </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={items.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage} />
            </TableContainer>
            {/* <Footer /> */}
        </div>
    )
}




export default RecipeTable