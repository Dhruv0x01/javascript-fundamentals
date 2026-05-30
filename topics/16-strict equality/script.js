/*
= assignment operator
== comparison operator (compare if values are equal)
=== strict equality operator (compare if values & datatype are equal)
!= inequality operator
!== strict inequality operator

*/

const PI = 3.14;

/*
if(PI == "3.14"){
    console.log("This is PI");
}else{
    console.log("This is NOT PI");
}
*/
// Acc to js, 3.14 which is a number becomes equal to the string "3.14"
// hence we have to use ===

if(PI === "3.14"){
    console.log("This is PI");
}else{
    console.log("This is NOT PI");
}
// now This is NOT PI
// Useful in case of user input, cause user input tends to be string, you can have this to check if the userinput has been
// converted to numbers or still a string.

// 3.14 != "3.14" false, acc to js 3.14 number is basically "3.14"
// 3.14 !== "3.14" true, as it is true that they are not equal as value and datatype both compared this time

if(PI !== "3.14"){
    console.log("This is NOT PI");
}else{
    console.log("This is PI");
}


// According to js
// 3.14 == "3.14" true
// 3.14 === "3.14" false

// 3.14 != "3.14" false
// 3.14 !== "3.14" true