//CHAPTER#9
//MathExpression


//QUESTION.1
var a = 10;
document.write("<h2>Result:</h2>");
document.write("The value of a is: " + a + "<br>");
document.write("..............................................."+"<br><br>");


document.write("the value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of s is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br><br>");


//QUESTION.2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
 
//Explain the output at each stage:
 var a = 2, b = 1;
 var result = --a - --b + ++b + b--;

 document.write("a is: " + a + "<br>");
 document.write("b is: " + b + "<br>");
 document.write("result is " + result + "<br>");


 //QUESTION.3
 var userName = prompt("Rida");
 alert("Hello, " + userName + "! Welcome to our website.");
   

 //QUESTION.5
//complicated...


//QUESTION.6 
var subject1 = prompt("English");
var subject2 = prompt("Urdu");
var subject3 = prompt("Math");

var totalMarksPerSubject = 100;

var marks1 = +prompt("Enter obtained marks for " + subject1 + "54");
var marks2 = +prompt("Enter obtained marks for " + subject2 + "54");
var marks3 = +prompt("Enter obtained marks for " + subject3 + "48");

var totalObtained = marks1 + marks2 + marks3;
var totalMarks = totalMarksPerSubject * 3;
var percentage = (totalObtained / totalMarks) * 100;

document.write("<h1>Marks Sheet</h2>");
document.write("<table border='1' cellpadding='8'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>percentage</th></tr>");
document.write("<tr><td>" + subject1 +"</td><td>100</td><td>" + marks1 + "</td></tr>");
document.write("<tr><td>" + subject2 +"</td><td>100</td><td>" + marks2 + "</td></tr>");
document.write("<tr><td>" + subject3 +"</td><td>100</td><td>" + marks3 + "</td></tr>");
document.write("<tr><th colspan='2'>Total</th><th>" + totalObtained + "</th></tr>");
document.write("</table>");
document.write("<br><strong>Percentage:</strong>" + percentage.toFixed(2)+ "%");




