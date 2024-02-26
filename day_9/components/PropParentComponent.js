import React from "react";
import ChildComponent from './PropsChildComponent';

const ParentComponent = () => {
    const message = 'Hello, child!';

    return (
        <ChildComponent greeting={message}/> 
    )
}

export default ParentComponent;