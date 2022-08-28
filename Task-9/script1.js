// Part 1: Find the culprits and nail them — debugging javascript

// 1. Find the culprit
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( “I’m JavaScript!’);
//  </script>
//  Whats the error in this ?
// </body>
// </html>

answer:
alert("i'm JavaScript")  //starts with double quotes and ends with single quote, corrected as both double quotes.

//---------------------------------------------------------------------------------------------------------------------------//

// 2. Find the culprit and invoke the alert
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// scripts.js
// alert(“I’m invoked!”);

answer:
linked script src file name is wrong it should be scripts.js

//---------------------------------------------------------------------------------------------------------------------------//

// 3. Explain the below how it works
// explain.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working

answer:
I'm JavaScript   // first alert message
Hello           // second alert message
Wor            // since the world word is covered with quotes, space between the letters also be considered as a complete string 
ld
6             //alert function can do simple math like addition before alerting the message since its not a string.

//---------------------------------------------------------------------------------------------------------------------------//

// 4. Fix the below to alert Guvi geek
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;
// alert( admin ); // "Guvi geek"

answer:
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = `"${fname} ${lname}"`;   //"Guvi geek"
alert( admin ); 

//---------------------------------------------------------------------------------------------------------------------------//

// 5. Fix the below to alert hello Guvi geek
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( 'hello ${name}' );

answer:
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+" "+lname;   
alert(`hello ${name}`);       //hello Guvi geek

//---------------------------------------------------------------------------------------------------------------------------//

// 6. Fix the below to alert sum of two numbers
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

answer:
let a = prompt("First number?");   //10
let b = prompt("Second number?");  //20
alert(Number(a) + Number(b));     //30

//---------------------------------------------------------------------------------------------------------------------------//

// 7. Fix the below to alert sum of two numbers
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

answer:
let a = prompt("First number?");   //10
let b = prompt("Second number?");  //20
alert(Number(a) + Number(b));     //30

//---------------------------------------------------------------------------------------------------------------------------//

// 8. If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// var a = "2" > "12";
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

answer:
var a = "2" > "12";  // variable a is a boolean type, here a is true because of as per alpha order.
if (a) {       // here if condition is checking whether var a condition is true or not, condition is true so "code is blasted"
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

var a = "2" < "12"; // if we change var a condition like this it will be false then else part will be printed.

//---------------------------------------------------------------------------------------------------------------------------//

// 9. How to get the success in console.
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// let a = prompt("Enter a number?");
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

answer:
if an empty input has given, a will became false hence else part will be printed as "success".

//---------------------------------------------------------------------------------------------------------------------------//

// 10. How to get the correct score in console.
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// let value = prompt('How many runs you scored in this ball');
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

answer:
let value = prompt('How many runs you scored in this ball');  //here prompt value will be considered as string
if (Number(value) === 4) {          // so here Number of function will convert string to number
      console.log("You hit a Four");
} else if (Number(value) === 6) {       // so here Number of function will convert string to number
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

//---------------------------------------------------------------------------------------------------------------------------//

// 11. Fix the code to welcome the Employee
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// let login = 'Employee';
// let message = (login == 'Employee') ? :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';
// console.log(message);


answer:
let login = 'Employee';
let message = (login == 'Employee') ? 'Greetings' : 'No login';
console.log(message);

//---------------------------------------------------------------------------------------------------------------------------//

// 12. Fix the code to welcome the boss
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// // You cant change the value of the msg
// let message;
// if (null || 2 || undefined )
// {
//  let message = "welcome boss";
// }
// else
// {
//  let message = "Go away";
// }
//   console.log(message);

answer:
let message1;
if (null || 2 || undefined )
{
  message1 = "welcome boss";
}
else
{
  message1 = "Go away";
}
  console.log(message1);

//---------------------------------------------------------------------------------------------------------------------------//

// 13. Fix the code to welcome the boss
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// // You cant change the value of the msg
// let message;
// if (null || 2 || undefined )
// {
//  let message = "welcome boss";
// }
// else
// {
//  let message = "Go away";
// }
//   console.log(message);

answer:
let message1;
if (null || 2 || undefined )
{
  message1 = "welcome boss";
}
else
{
  message1 = "Go away";
}
  console.log(message1);

//---------------------------------------------------------------------------------------------------------------------------//

// 14. Fix the code to welcome the boss
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// // You cant change the value of the msg
// let message;
// if (null || 2 || undefined )
// {
//  let message = "welcome boss";
// }
// else
// {
//  let message = "Go away";
// }
//   console.log(message);

answer:
let message1;
if (null || 2 || undefined )
{
  message1 = "welcome boss";
}
else
{
  message1 = "Go away";
}
  console.log(message1);

//---------------------------------------------------------------------------------------------------------------------------//

// 15. Change the code to print
// 3
// 2
// 1
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// //You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log( --i );
// }

answer:
let i = 3;
while (i) {
  console.log( i-- );
};

//---------------------------------------------------------------------------------------------------------------------------//

// 16. Change the code to print 1 to 10 in 4 lines
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// let num = 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)

answer:
let num = 1;
console.log(num+" "+(num+1)+" "+ (num+2));
num += 3;
console.log(num+" "+(num+1)+" "+ (num+2));
num += 3;
console.log(num+" "+(num+1)+" "+ (num+2));
num += 3;
console.log(num);

//---------------------------------------------------------------------------------------------------------------------------//

// 17. Change the code to print even numbers
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// //You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 1) {
//   console.log(num)
// }

answer:
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }

//---------------------------------------------------------------------------------------------------------------------------//

// 18. Change the code to print all the gifts
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log('Wrapped ${'gifts[i]'} and added a bow!');
// }

answer:
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

//---------------------------------------------------------------------------------------------------------------------------//

// 19. Fix the code to disarm the bomb.
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
// }

answer:
let countdown = 0;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

//---------------------------------------------------------------------------------------------------------------------------//

// 20. Whats the msg printed and why?
// var lemein = “0”;
// var lemeout = 0;
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg);

answer:
hi         // 0 is false, since here lemein variable is treated as string so its true so if part printed in the console.

//---------------------------------------------------------------------------------------------------------------------------//

// 21. Whats the msg printed and why? Guess you answer before running it.
// var lemein = “0”;
// var lemeout = 0;
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg);

answer:
hi         // 0 is false, since here lemein variable is treated as string so its true so if part printed in the console.

//---------------------------------------------------------------------------------------------------------------------------//