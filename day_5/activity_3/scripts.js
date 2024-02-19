function createRandomSizedBubble(event) {
    const bodyContainer = document.getElementById('body-container');
    const bubble = document.createElement('div');
    const radius = Math.floor(Math.random() * 300) + 10;

    // Calculate the position where the circle will be placed relative to the container
    // event.clientX and event.clientY give the coordinates of the mouse click event
    // container.offsetLeft and container.offsetTop give the position of the container relative to the page
    // We subtract half of the radius to center the circle on the clicked point
    const x = event.clientX - bodyContainer.offsetLeft - radius / 2;
    const y = event.clientY - bodyContainer.offsetTop - radius / 2;

    bubble.style.width = radius + 'px';
    bubble.style.height = radius + 'px';
    bubble.style.backgroundColor = randomColor();
    bubble.style.borderRadius = '50%';
    bubble.style.position = 'absolute';
    bubble.style.top = y + 'px';
    bubble.style.left = x + 'px';

    // Append the circle to the container
    // Add the circle as a child of the container
    bodyContainer.appendChild(bubble); 
}

function randomColor(event){
    let colorArray = ['yellow', 'orange', 'blue', 'violet'];
    let random_number = Math.floor(Math.random() * 3);
    return colorArray[random_number];
}