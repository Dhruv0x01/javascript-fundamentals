// for loops: Repeat some code a limited number of times
// (used when you know how many times it should repeat)


/*
for(let i = 10; i >= 0; i-=2){
    console.log(i);
}

console.log(`Happy New Year`);
*/

/*
for(let i=0; i<=10; i++){
    if(i==6){
        continue;   
    }else if(i==8){
        break;
    }else{
        console.log(i);
    }
}
*/


// Print numbers 1-20, 20-1, even numbers between 1-20, odd numbers between 20-1, tables for 13 and 17, repeat something

/*
for(let i=1; i<=20; i++){
    console.log(i);
}

for(let i=20; i>0; i--){
    console.log(i);
}

for(let i=0; i<=20; i+=2){
    console.log(i);
}

for(let i=19; i>0; i-=2){
    console.log(i);
}

for(let i=1; i<=15; i++){
    console.log(i*13);
}

for(let i=1; i<=15; i++){
    console.log(i*17);
}

for(let i=0; i<4; i++){
    console.log(`Dhruv`);
}
*/

for(let i=1; i<=5; i++){
    let row= "";
    for(let j=0; j<i; j++){
        row += "*";
    }
    console.log(row);

}

