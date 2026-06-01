// counter program

//Constants as we will not change them
const countLabel = document.getElementById("count");
const decreasebtn = document.getElementById("decreasebtn");
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");

//Variable as we will change it
let count = 0;

//functions for each button now
decreasebtn.onclick = function(){
    count--;  // decremented
    countLabel.textContent = count; //update the content
}
increasebtn.onclick = function(){
    count++;  // incremented
    countLabel.textContent = count; //update the content
}
resetbtn.onclick = function(){
    count = 0; // the function that we needed to perform i.e reset the count to 0
    countLabel.textContent = count; //update the content
}