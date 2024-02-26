import React, { useState } from "react";

const HookComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Click Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click Me!</button>
        </div>
    );
}

export default HookComponent;
