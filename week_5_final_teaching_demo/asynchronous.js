/*
    Asynchronous JavaScript:
        Utilizes non-blocking I/O operations and event-driven architecture to handle asynchronous tasks efficiently.
        Asynchronous operations are still executed within the same thread, but they don't block the execution of other tasks.
        Instead, they are scheduled to run in the background, and their results are handled asynchronously once they are available.
        
    Asynchronous Programming:
        Enables concurrency by allowing tasks to run concurrently rather than sequentially.
        Is essential for tasks that involve I/O operations:
        Such as network requests, file operations, and database queries.
    
    Asynchronous Operations:
        Tasks executed independently, not blocking program flow immediately.
        Allow tasks to run concurrently, improving performance and responsiveness.
*/

console.log("Sort laundry by color and fabric.");
console.log("Load clothes into washing machine.");
setTimeout(() => {
  console.log("Add detergent and fabric softener.");
}, 2000);
console.log("Select appropriate wash cycle and settings.");
console.log("Start machine and wait patiently.");
