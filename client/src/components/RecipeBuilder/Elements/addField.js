export default function addField(state, setState) {
    let newIngredientField = {...state}
        setState([...state, newIngredientField])
}

