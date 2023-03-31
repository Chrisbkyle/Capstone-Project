import React, {useState, useEffect} from "react"
import FilterListIcon from '@mui/icons-material/FilterList';
import { TextField } from "@mui/material";
import styled from "styled-components";
import useMediaQuery from "../client/src/components/RecipeTable/Elements/useMediaQuery";


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
const FilterSearch = styled.input`
    font-size: 1rem;
    padding: .5rem;
    margin: .25rem;
    background-color: #EADCA6;
    border: 1px solid black;
    border-bottom: 2px solid black;
    border-radius: 4px;
    box-shadow: 2px 2px lightgrey;
`


export default function FilterOptions({ stateConfig }) {



    const [filterDisplay, setFilterDisplay] = useState(false)
    const [filterText, setFilterText] = useState('');
    const [items, setItems] = useState([]);
    const { passedState } = stateConfig || {}

    const filteredData = stateConfig.filter(row =>
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



    const isTablet = useMediaQuery('(max-width: 768px)');
    const filterDisappear = {
        display: isTablet ? 'none' : 'flex'
    }
    const filterSearchDisappear = {
        width: isTablet ? '0%' : '66%'
    }
    const filterFlex = {
        width: isTablet ? '50%' : '33%'
    }
    const filterSearches = {
        width: isTablet ? '100%' : '66%'
    }

return (

    
    <div>
        <FilterButton onClick={toggleFilterDisplay}><FilterListIcon></FilterListIcon></FilterButton>
        <FilterDisplay style={{display: filterDisplay ? 'flex' : 'none'}}>
            <FilterFlexItem style={filterFlex}>
            <FilterSearch
            style={filterSearches}
                value={filterText}
                placeholder= 'Search'
                onChange={handleSearchChange}>
            </FilterSearch>
            </FilterFlexItem>
            <FilterFlexItem style={filterDisappear}>
                <FilterSelect 
                    style={filterSearchDisappear}
                    onChange={e => setFilterText(e.target.value)}>
                    <option style={{borderBottom: '1px solid black'}}>Filter Dish</option>
                    {filteredData.map((item) =>
                    <option>{item.dish}</option>
                    )}
                </FilterSelect>
            </FilterFlexItem>
            <FilterFlexItem style={filterFlex}>
            <FilterSelect
            style={filterSearches}
                onChange={e => setFilterText(e.target.value)}>
                    <option value=''>Filter Station</option>
                    {filteredData.map((item) =>
                    <option>{item.station}</option>
                    )}
                </FilterSelect>
            </FilterFlexItem>
        </FilterDisplay>
    </div>
)}