// SWITCH = can be efficient replacement to many else if statements

/*

let day = window.prompt(`Enter day(1-7)`);
day = Number(day);

switch(day){
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`Wednesday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 7:
        console.log(`Sunday`);
        break;
    default:
        console.log(`Enter a valid number(1-7) and not ${day}`);
}
*/

let testScore = window.prompt(`Enter your test score(0-100): `);
let letterGrade;

testScore = Number(testScore);

switch(true){
    case testScore >= 90 && testScore <= 100:
        letterGrade = `A`;
        console.log(`Your grade: ${letterGrade}`);
        break;
    case testScore >= 80 && testScore < 90:
        letterGrade = `B`;
        console.log(`Your grade: ${letterGrade}`);
        break;
    case testScore >= 60 && testScore < 80:
        letterGrade = `C`;
        console.log(`Your grade: ${letterGrade}`);
        break;
    case testScore >= 45 && testScore < 60:
        letterGrade = `D`;
        console.log(`Your grade: ${letterGrade}`);
        break;
    case testScore >= 35 && testScore < 45:
        letterGrade = `E`;
        console.log(`Your grade: ${letterGrade}`);
        break;
    case testScore < 35 && testScore >= 0:
        letterGrade = `F`;
        console.log(`Your grade: ${letterGrade}`);
        break;
    default:
        console.log(`Enter valid marks(0-100)`);
}

