// import { BlankButton } from '../RecipeTable'
import styled from "styled-components"
import useMediaQuery from "./Elements/useMediaQuery";

const BlankButton = styled.button`
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
        font-size:1.25rem;
    }
  `



const SortButton = ({ direction, id, onClick, sortBy, content }) => {

    const isTablet = useMediaQuery('(max-width: 768px)');
    const buttonStyle = {
      width: isTablet ? '100%' : '40%;',
      fontSize: isTablet ? '1rem' : '1.25rem'
  }






    const arrows = { ascending: '\u21D3', descending: '\u21D1'}
    const arrow = sortBy === id ? arrows[direction] : '\u21D5'

    return (
        <BlankButton id={id} onClick={onClick} style={buttonStyle}>
           {content} {arrow}
        </BlankButton>
    )

}

export default SortButton