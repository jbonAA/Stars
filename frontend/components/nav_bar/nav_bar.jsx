import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logOut }) => {
    const display = currentUser ? (
        <div>
            <h3>Welcome</h3>
            <button onClick={logOut}>Logout</button>
        </div>
    ) : (
        <div>
            <Link className="link-button" to="./login">Log In</Link>
            <Link className="link-button" to="./signup">Sign Up</Link>
        </div>
    );

    return (
        <header className="top-nav">
            <h1 className="title">Stars</h1>
            <div>
                {display}
            </div>
        </header>
    )
}