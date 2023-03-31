export default function handleObjectChange(state, setState, index, event)  {
    let data = [...state];
    data[index][event.target.name] = event.target.value;
    setState(data);
    console.log(data)
}