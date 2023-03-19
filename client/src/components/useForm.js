import React, { useState } from "react";


export default function RecipeFrom(initialFValues) {


    const [values, setValues] = useState(initialFValues)
    
    
    const handleChange = (event) => {
        const  [name, value] = event.target;
        console.log(name, value)
        setValues({
            ...values,
            [name]: value
        });
    };



            return {
                values,
                setValues,
                handleChange
            }
            
}