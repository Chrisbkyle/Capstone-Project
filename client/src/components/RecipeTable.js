import '../App.css'
import React, { useState, useEffect } from 'react';
import sortTableData from './RecipeTable/SortTableData';
import { headCells } from './RecipeTable/testObjects';
import { Table, TableHeaderRow, TableHeaderContent, TableContent, TableCell, TableContainer, TableCellHeader, BlankButton } from './styledComponents';
import SortButton from './RecipeTable/SortButton';
import { TablePagination, TextField } from '@mui/material';
import TableTitle from './RecipeTable/TableTitle';
import { Link } from 'react-router-dom';
import { FalseHeader } from './styledComponents';
import FilterListIcon from '@mui/icons-material/FilterList';



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

 
    const filteredData = items.filter(row =>
        Object.values(row).some(value =>
          value.toLowerCase().toString().includes(filterText.toLowerCase())
      )
    );

    const pop = () => {
        alert('pop')
    }

    return (
        <div>
            <FalseHeader />
            <TableContainer>

                <TableTitle />
                <ul>
                    <li><BlankButton><FilterListIcon></FilterListIcon></BlankButton></li>
                    <li>
                        <div style={{height:'200px', width: '300px', backgroundColor:'pink', position:'absolute', right: '0', marginRight: '3rem'}}>
                            <ul>
                                <li>
                                    <select
                                    onChange={e => setFilterText(e.target.value)}>
                                        <option value=''>Filter Station </option>
                                        {items.map((item) =>
                                        <option>{item.station}</option>
                                        )}
                                    </select>
                                </li>
                                <li>
                                    <select
                                    onChange={e => setFilterText(e.target.value)}>
                                        <option value=''>Filter Dish</option>
                                        {items.map((item) =>
                                        <option>{item.dish}</option>
                                        )}
                                    </select>
                                </li>
                                <li>
                                    <TextField
                                    variant='filled'
                                    onChange={e => setFilterText(e.target.value)}
                                    sx={{
                                        "& .MuiFormLabel-root": {
                                            color: 'black'
                                        },
                                        "& .MuiFormLabel-root.Mui-focused": {
                                            color: 'black'
                                        },
                                        "& .MuiInputBase-root::after": {
                                            borderBottom: '2px solid black'
                                        }
                                    }}>
                                    </TextField>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>


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