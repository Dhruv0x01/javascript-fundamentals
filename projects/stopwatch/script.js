
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10); // Calls update function every 10 ms
        isRunning = true;
    }

    

}

function stop(){
    if(isRunning){
        clearInterval(timer); // This will stop the stopwatch from running
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = `00:00:00:00`;

}

function update(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime; // will be in ms

    let hours = Math.floor(elapsedTime/ (1000 * 60 * 60)); // 1000*60*60 is the number of ms in an hour
    let mins = Math.floor((elapsedTime / (1000*60) ) % 60);
    let secs = Math.floor((elapsedTime / 1000) % 60);
    let ms = Math.floor(elapsedTime % 1000 / 10); // ms is always in 4 digits, we are going to divide by 10, we only need first two digit( 4567 to 45)

    hours = String(hours).padStart(2, 0);
    mins = String(mins).padStart(2, 0);
    secs = String(secs).padStart(2, 0);
    ms = String(ms).padStart(2, 0);

    display.textContent = `${hours}:${mins}:${secs}:${ms}`;
    


}