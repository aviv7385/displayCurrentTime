//display a clock on page that changes every second. 
//also change the font color to a random color, every second

// function displayClock(callback) {
//     setInterval(() => {
//         const d = new Date();
//         const time = d.toLocaleTimeString();
//         callback(time);
//     }, 1000);
// }

// displayClock(t => {
//     const clock = document.getElementById("clock");
//     clock.innerHTML = t;
//     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     clock.style.color = randomColor;
// })


//another version

function displayClock() {
    setInterval(() => {
        //get date data
        const d = new Date();
        //get local current time
        const time = d.toLocaleTimeString();
        //get object from DOM
        const clock = document.getElementById("clock");
        //insert time to the DOM object
        clock.innerHTML = time;
        //get random color
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        //change the font color to a random color
        clock.style.color = randomColor;
    }, 1000);
}

displayClock()