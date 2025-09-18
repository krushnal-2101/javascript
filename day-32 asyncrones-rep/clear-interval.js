
// the program executes a block of code at every specified time interval. If you want to stop this function call, then you can use the clearInterval() method.

// The syntax of clearInterval() method is:

// clearInterval(intervalID);

// example




let intervalId;


const currentTime = () => {
    const time = new Date().toLocaleTimeString();
    console.log(time)
}

intervalId = setInterval(currentTime, 1000)

setTimeout(() => {
    clearInterval(intervalId)
    console.log("timed stopped:")
}, 10000);