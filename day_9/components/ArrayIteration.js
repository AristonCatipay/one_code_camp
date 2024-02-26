import React from "react";

const ArrayIterationComponent = () => {
    const isLoggedIn = true;
    const usernameList = ['John', 'May', 'Ian'];
    return (
        <div>
            <h1>Welcome {isLoggedIn ? 'User': 'Guest'}</h1>
            <ul>
                {usernameList.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    )
}

export default ArrayIterationComponent;