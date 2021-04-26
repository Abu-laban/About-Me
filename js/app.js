'use strict'

let name = prompt("please enter your name to continue");

alert("The entire team of About-Me is thrilled to welcome you Mr or Ms " + name + " . We hope you’ll do some amazing works here!");

let q1 = prompt("My favorite color is black?").toLowerCase();

while (q1 !== 'yes' && q1 !== 'no' && q1 !== 'y' && q1 !== 'n') {

    alert('You are enter a wrong answer');
    q1 = prompt('My favorite color is black?').toLowerCase();

}
if (q1 == 'y' || q1 == 'yes') {

    console.log(q1 + " : It's a correct answer");
    alert("You are correct");

} else if (q1 == 'n' || q1 == 'no') {

    console.log(q1 + " : It's not a correct answer");
    alert("You are not correct");

}

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

}

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

}

let q4 = prompt("Do I Smoke?").toLowerCase();

while (q4 !== 'yes' && q4 !== 'no' && q4 !== 'y' && q4 !== 'n') {

    alert('You are enter a wrong answer');
    q4 = prompt('Do I Smoke?').toLowerCase();

}
if (q4 == 'y' || q4 == 'yes') {

    console.log(q4 + " : It's a correct answer");
    alert("You are correct");

} else if (q4 == 'n' || q4 == 'no') {

    console.log(q4 + " : It's not a correct answer");
    alert("You are not correct");

}

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

}

alert("Thank you " + name + " for answering these five yes or no questions.Seems now you know me better than before.^^");