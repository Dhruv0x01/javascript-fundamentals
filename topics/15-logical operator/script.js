// logical operator = used to combine or manipulate boolean values (true or false)

// AND = && both has to be true
// OR = ||  either has to be true
// NOT = !  complement true -> false and false -> true

const temp = -10;

if(temp > 0 && temp <= 30){
    console.log("Weather is good");
}else if(temp > 30 || temp < 0 ){
    console.log("Weather is not good");
}

const isSunny = false;

if(!isSunny){
    console.log("It is SUNNY");
}else{
    console.log("It is CLOUDY");
}