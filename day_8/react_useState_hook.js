// You can only hooks inside of a function component.
// You cannot put hooks in functions, if conditions, or loops.

// How to use useState hook:
// Call it like you are calling a function.
// const [currentState, updateCurrentState] = useState(defaultState)
// Every time we call the updateCurrentState() function
// it is going to rerender our component with the new value for our count.

// For example:

function App(){
    const [count, setCount] = useState(4)

    function decrementCount(){
        // This is an incorrect way to update the value based on the previous value.
        // setCount(count - 1)
        // setCount(count - 1)
        // Why is it wrong?
        // If we use this code 'setCount(count - 1)' two times. We will expect that it will decrease the count by 2.
        // But that is not the case. Because the value of count is the value we have when we render the whole App().
        // They are essentially overwritting each other.

        // This is the second way and it is much better.
        // In this way the value of the previousCount will passed to the next setCount function.
        // Which in turn will decrement it by two.
        setCount(previousCount => previousCount - 1)
    }

    function incrementCount(){
        setCount(previousCount => previousCount + 1)
    }

    

    return (
        <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
        </>
    )
}

// In class based components you set the state on the constructor which ensures that it will only be run once.
// But with function based components, the value of 'useState(defaultState)' would run every time we create/render the component.
// So if the value of the 'defaultState' is complex or it requires many calculations this process will be hardware consuming.

// The useState hooks have two ways to pass the default state.
// 1. Pass the state like normal and it will run everytime.
// Example: 
// const [count, setCount] = useState(4)
// 2. Function version. It runs the function only the very first time your component renders.
// Example: 
const [count, setCount] = useState(() => {
    console.log('Run Function')
    return 4
})



