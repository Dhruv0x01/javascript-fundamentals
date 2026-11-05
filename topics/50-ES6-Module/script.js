// ES6 Module = An external file that containes reusable code that can be imported into other JavaScript files.
//              Write reusable code for many apps.
//              Can contain variables, classes, functions and more
//              Introduced as part of SCMAScript 2015 update

// If we want to import or export other modules freely, we have to set type="module" for script.js in the html file

// Anything you want to import, you will place inside the curly braces
import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(5);

console.log(`Circumference: ${circumference.toFixed(2)} cm`);
console.log(`Area: ${area.toFixed(2)} cm^2`);
console.log(`Volume: ${volume.toFixed(2)} cm^3`);