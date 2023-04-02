import styled from "styled-components"

const Button = styled.button`
    width: 40%;
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
        width: 100%;
    }
  `



const SortButton = ({ direction, id, onClick, sortBy, content }) => {



    const arrows = { ascending: '\u21D3', descending: '\u21D1'}
    const arrow = sortBy === id ? arrows[direction] : '\u21D5'

    return (
        <Button id={id} onClick={onClick}>
           {content} {arrow}
        </Button>
    )

}

export default SortButton