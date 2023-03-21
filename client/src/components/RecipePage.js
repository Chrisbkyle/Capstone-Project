import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';





export default function RecipePage() {

    const [state, setState] = useState({})


    useEffect(() => {
        axios.get('http://localhost:3001/officechef/recipes')
        .then((response) => {
            setState(response.data); 
        })
}, []);

console.log(state);
    const { id } = useParams()
    return(
        <div>

            <h1>{id}</h1>

        </div>
    )
}