//to remove lines from recipe builder

export default function removeField(state, setState, index) {
    let data = [...state];
    data.splice(index, 1)
    setState(data);
}