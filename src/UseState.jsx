// React hook => A special function that allows functional components to use React features,
// without writing class components (React v16.8)
// 
// useState, useEffect, useContext, useReducer, useCallback, etc.
// 
// useState() => A React hook that allows the creation of a stateful variable and a setter function
// to update its value in the Virtual DOM.
// 
// [name, setName]

import React, {useState} from 'react'

function UseState() {
    // when this stateful variable (name) gets updated with its setter function (setName),
    // it triggers a re-render of the virtual DOM
    // you can also pass in an initial state to useState()
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        // wrong:
        // name = "Larry Gee"

        // right:
        setName("Larry Gee");
    } 

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );
}

export default UseState