function UserGreeting(props) {
    return (
        // we can also set these <h2> elements to be constants, e.g.
        // const welcomeMessage = <h2>...
        // const loginPrompt = <h2>...
        props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : <h2 className="login-prompt">Please log in to continue</h2>
    );
}

export default UserGreeting