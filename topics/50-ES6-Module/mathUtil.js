// To use these elsewhere we need to prefix all the variables and functions with export
// With export keyword for these variables and functions, we can import these elsewhere

export const PI = 3.14159;

export function getCircumference(radius){
    return 2*PI*radius;
}

export function getArea(radius){
    return PI*radius*radius;
}

export function getVolume(radius){
    return 4 * PI * radius * radius;
}