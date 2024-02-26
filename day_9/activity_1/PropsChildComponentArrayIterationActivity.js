import React from "react";

const PropsChildComponentArrayIterationActivity = (props) => {
    const { username, message, date, image } = props;

    return (
        <div>
            <p>Username: {username}</p>
            <p>Message: {message}</p>
            <p>Date: {date}</p>
            <img src={image}></img>
            <hr />
        </div>
    );
}

export default PropsChildComponentArrayIterationActivity;
