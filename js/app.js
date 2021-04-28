'use strict';

let name = prompt("please enter your name to continue");

alert("The entire team of About-Me is thrilled to welcome you Mr or Ms " + name + " . We hope you’ll do some amazing works here!");

let score = 0 ;

function firstQ()
{
let q1 = prompt("My favorite color is black?").toLowerCase();

while (q1 !== 'yes' && q1 !== 'no' && q1 !== 'y' && q1 !== 'n') {

    alert('You are enter a wrong answer');
    q1 = prompt('My favorite color is black?').toLowerCase();

}
if (q1 == 'y' || q1 == 'yes') {

    console.log(q1 + " : It's a correct answer");
    alert("You are correct");
    score++;

} else if (q1 == 'n' || q1 == 'no') {

    console.log(q1 + " : It's not a correct answer");
    alert("You are not correct");
    

}
}
firstQ();

function seconedQ()
{
let q2 = prompt("My favorite food is healthy?").toLowerCase();

while (q2 !== 'yes' && q2 !== 'no' && q2 !== 'y' && q2 !== 'n') {

    alert('You are enter a wrong answer');
    q2 = prompt('My favorite food is healthy?').toLowerCase();

}
if (q2 == 'y' || q2 == 'yes') {

    console.log(q2 + " : It's not a correct answer");
    alert("You are not correct");

} else if (q2 == 'n' || q2 == 'no') {

    console.log(q2 + " : It's a correct answer");
    alert("You are correct");
    score++;

}
}
seconedQ();
function thirdQ(){
let q3 = prompt("My favorite drink is coffee?").toLowerCase();

while (q3 !== 'yes' && q3 !== 'no' && q3 !== 'y' && q3 !== 'n') {

    alert('You are enter a wrong answer');
    q3 = prompt('My favorite drink is coffee?').toLowerCase();

}
if (q3 == 'y' || q3 == 'yes') {

    console.log(q3 + " : It's not a correct answer");
    alert("You are not correct");

} else if (q3 == 'n' || q3 == 'no') {

    console.log(q3 + " : It's a correct answer");
    alert("You are correct");
    score++;

}
}
thirdQ();

function fourthQ(){

let q4 = prompt("Do I Smoke?").toLowerCase();

while (q4 !== 'yes' && q4 !== 'no' && q4 !== 'y' && q4 !== 'n') {

    alert('You are enter a wrong answer');
    q4 = prompt('Do I Smoke?').toLowerCase();

}
if (q4 == 'y' || q4 == 'yes') {

    console.log(q4 + " : It's a correct answer");
    alert("You are correct");
    score++;

} else if (q4 == 'n' || q4 == 'no') {

    console.log(q4 + " : It's not a correct answer");
    alert("You are not correct");

}
}
fourthQ();

function fifthQ(){
let q5 = prompt("Did I Get Married?").toLowerCase();

while (q5 !== 'yes' && q5 !== 'no' && q5 !== 'y' && q5 !== 'n') {

    alert('You are enter a wrong answer');
    q5 = prompt('Did I Get Married?').toLowerCase();

}
if (q5 == 'y' || q5 == 'yes') {

    console.log(q5 + " : It's not a correct answer");
    alert("You are not correct");

} else if (q5 == 'n' || q5 == 'no') {

    console.log(q5 + " : It's a correct answer");
    alert("You are correct");
    score++;

}
}
fifthQ();

alert("Thank you " + name + " for answering these five yes or no questions.Seems now you know me better than before.^^");

function sixthQ(){
let numtest = 12;

let guessList = [];

let guess = Number(prompt("Hello " + name + " , I'm thinking of a number between 1-20. What is it?"));


while (guess !== numtest && guessList.length < 3) {

    if (guess == null) {

        alert('Quitting game now.');
        break;

    } else if (guessList.indexOf(guess) >= 0) {

        guess = Number(prompt("You already guessed this number. Try again."));

    } else {

        guessList.push(guess);

        if (guess > numtest) {
            guess = Number(prompt("Your guess is too high! Try again."));
        } else if (guess < numtest) {
            guess = Number(prompt("Your guess is too low! Try again."));
        }

    }

}
if (guess == numtest) {
    alert("Nice job! " + name + " You guessed the correct number! It took you " + (guessList.length + 1) + " tries!");
    score++;
} else {
    alert("Sorry " + name + " that's all your guesses! " + (guessList.length + 1) + " tries! The number was 12");
}

}
sixthQ();

function seventhQ(){
let favfood = ['hummus', 'kofta', 'galayet bandora', 'musakhan'];

let flag = false;

let attempts = 0;

do {
    let guessfav = prompt('What is my favorite food?').toLowerCase();
    for (let i = 0; i < favfood.length; i++) {
        if (guessfav === favfood[i]) {
            alert("Yes that's one of my favorite food");
            score++;
            flag = true;
            break;
        }
    }
    attempts = attempts + 1 ;
} while (flag === false && attempts < 6);  

alert("These are my favorite food : 'hummus', 'kofta', 'galayet bandora', 'musakhan' ");


alert("The total number of correct answers and your final score is : " + score + " correct out of the 7th questions");
}
seventhQ();
