import styles from './Button.module.css'

function Button() {
    // inline CSS example (i am currently using modules):
    // const styles = {
    //     backgroundColor: "hsl(200, 100%, 50%)",
    //     color: "white",
    //     padding: "10px 20px",
    //     borderRadius: "5px",
    //     border: "none",
    //     cursor: "pointer",
    // }

    // return (
    //     <button style={styles}>Click Me!</button>
    // );

    return (
        // "styles" is the import
        <button className={styles.button}>Click Me!</button>
    );
}

export default Button