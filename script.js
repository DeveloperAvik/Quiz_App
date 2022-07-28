//-------
//Window object
//-------
//The window object represents the browser window.
//Example:
//window.alert("Hello World!");
//window.alert("") is a method that displays an alert box with a message and an OK button.
//
//window.prompt("Enter your name: ");
//window.prompt("") is a method that displays a dialog box that asks the user to enter a value.
//
//window.confirm("Are you sure?");
//window.confirm("") is a method that displays a dialog box that asks a question and gives the user two options.
//It returns true if the user selects OK, or false if the user selects Cancel.

//let answer = window.confirm("Are you sure you want to quit?");
//answer is a boolean value. thus true/false

//check if property exists on object
//-------
//Example:
//var person = {
//    name: "John",
//    age: 30
//};
//
//if ('name' in person) {
//    alert("The person's name is " + person.name);
//}

//add two numbers using window object
//-------
//Example:
const num1 = window.prompt("Enter first number: ");
const num2 = window.prompt("Enter second number: ");

const sum = parseInt(num1) + parseInt(num2);

window.alert("The sum of " + num1 + " and " + num2 + " is " + sum);

document.write("The sum of " + num1 + " and " + num2 + " is " + sum);

//using window object to change the title of the page
//-------
//Example:
//window.document.title = "New Title";
//window.document.title is a property that returns the title of the document.
//window.document.title = "New Title" is a method that changes the title of the document.

//using window object to change the background color of the page
//-------
//Example:
//window.document.body.style.backgroundColor = "red";
//window.document.body is a property that returns the body element of the document.
//window.document.body.style.backgroundColor is a method that changes the background color of the body element.

//using window object to change the font color of the page
//-------
//Example:
//window.document.body.style.color = "red";

//using window object to make quiz questions
//-------
//Example:
//window.document.write("<h1>Quiz</h1>");
//window.document.write("<p>What is the capital of France?</p>");
//window.document.write("<input type='text' id='answer1' />");
//window.document.write("<button onclick='checkAnswer1()'>Submit</button>");
//
//function checkAnswer1() {
//    var answer = window.document.getElementById("answer1").value;
//    if (answer == "Paris") {
//        window.document.write("<p>Correct!</p>");
//    } else {
//        window.document.write("<p>Incorrect!</p>");
//    }
//}
