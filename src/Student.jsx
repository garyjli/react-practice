// props = read-only properties that are shared between components.
//
// e.g. a parent component can send data to a child component.
//
// <Component key=value />

// propTypes = a mechanism that ensures that the passed value is of the correct datatype.
//
// age: PropTypes.number

// FOR SOME REASON PROP-TYPES ISN'T IN THE NODE_MODULES FOLDER
// import PropTypes from 'prop-types'

// When we send key/value pairs to this component, they are all stored inside the "props" object
// Before, we had "props" as the argument.
// To use defaultProps correctly, do it like this inside the argument:
function Student({ name = "Unknown Rap Artist", age = 100, isNonchalant = true }) {
    return (
        <div className="my-artists">
            {/* before was props.name, props.age, props.isNonchalant */}
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            {/* booleans aren't displayed in DOM so we have to print a string */}
            <p>Nonchalant: {isNonchalant ? "Very" : "Not at all"}</p>
        </div>
    );
}

// This is how to use propTypes (if it was actually imported)
// If I were to pass in a string to age in App.jsx, the page would
// still run normally, but it would trigger an error in the console
//
// Student.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isNonchalant: PropTypes.bool,
// }

// defaultProps are used incase certain props are not passed in
// NOTE: the below actually seems to be deprecated, see above in the Student() function's arguments
// 
// Student.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isNonchalant: false,
// }

export default Student