import { BlankButton } from './tableStyles'

const SortButton = ({ direction, id, onClick, sortBy, content }) => {
    const arrows = { ascending: '\u21D3', descending: '\u21D1'}
    const arrow = sortBy === id ? arrows[direction] : '\u21D5'

    return (
        <BlankButton id={id} onClick={onClick}>
           {content} {arrow}
        </BlankButton>
    )

}

export default SortButton