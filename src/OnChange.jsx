// onChange = event handler used primarily with form elements
// ex. <input> <textarea> <select> <radio>
// triggers a function everytime the value of the input changes

import React, {useState} from 'react'

function OnChange() {
    // name with default value of ""
    const [name, setName] = useState("");

    function handleNameChange(event) {
        // change the value of the name
        setName(event.target.value);
    }

    return(
        <div>
            {/* every time the input value changes, call handleNameChange */}
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>
        </div>
    );
}

export default OnChange