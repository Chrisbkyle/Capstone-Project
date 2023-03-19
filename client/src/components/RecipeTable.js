import '../App.css'
import React, { useState, useEffect } from 'react';
import sortTableData from './RecipeTable/SortTableData';
import { headCells } from './RecipeTable/testObjects';
import { Table, TableHeaderRow, TableRow, TableHeaderContent, TableContent, TableCell, TableContainer, TableCellHeader } from './RecipeTable/tableStyles';
import SortButton from './RecipeTable/SortButton';
import { TablePagination } from '@mui/material';
import TableTitle from './RecipeTable/TableTitle';
import HeaderSidenav from './HeaderSideNav';
import Footer from './Footer';



const RecipeTable = ({ sortConfig }) => {



    useEffect(() => {
        fetch('http://localhost:3001/officechef/recipes', {
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

    console.log(items)
    console.log(sortedItems)

    return (
        <div>
            <HeaderSidenav />
            <TableContainer>
                <TableTitle />
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
                        {items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((item) => {
                            return (
                                <TableRow>
                                    
                                    <TableCell>{item.recipe}</TableCell>

                                    <TableCell>{item.dish}</TableCell>

                                    <TableCell>{item.station}</TableCell>

                                    <TableCell>{item.dateCreated}</TableCell>
                                    
                                </TableRow>
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
            <Footer />
        </div>
    )
}




export default RecipeTable