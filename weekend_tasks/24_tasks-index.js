/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(NumberOfChildren,PartnersName,GeographicLocation,JobTitle){
    console.log(`You will be a ${JobTitle} in ${GeographicLocation}, and married to ${PartnersName} with ${NumberOfChildren} kids`);

}

tellFortune(6,"soso","Jordan","ComputerEngineering");

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/


function calculateDogAge(DogAge){
    DogAge=DogAge * 7;
    console.log(`Your doggie is ${DogAge} years old in dog years!`);
}

calculateDogAge(5);


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age,amount){
    const MaxAge=100;
    let YearsRemaining=MaxAge-age;
    let DaysRemaining=YearsRemaining*365;
    let TotalAmount=DaysRemaining*amount;
    console.log(`You will need ${TotalAmount} to last you until the ripe old age of X`)
}

calculateSupply(24,4);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name){
    console.log("hello"+" "+name);
}


greet("Bassam");


/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/


function double(cat) {
    return 2 * cat;//x is undefined;
  }
  
  function double(x) {//we cant use the value in parameter when we declare a function
    return 2 * 7;
  }
  
  function double(X) {//same error
    return 2 * 'x';
  }

  /*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/


function double1(x) {//syntax of keyword function and ")" it is not exist;
  return 2 * x ;
}

function double2 (x){//not found space between "function" and name of function &&error in syntax of "()";
return 2 * x;
}

function double3 (x) { //"(x)" before the name of function;
  return 2 * x;
}



/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/


 function cupe(value){
    console.log(value*value*value);
 }

 cupe(5);


 /*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(x,y){
    console.log(x*y);
}
multiply(3,3);


/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/


function canIGetADrivingLicense(age){
    let years=20-age;
    if(age>=20)
        console.log("yes you can");
    else
    console.log(`please come back after ${years} to get one`)
}
canIGetADrivingLicense(24);


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/


function sameLength(x,y){
    if(x.length===y.length)
        return true;
    else
    return false;
}

let length=sameLength("Bassam","Bassam Bany Ali");
console.log(length);

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(x,y){
    if(x>y)
        return x;
    else
    return y;
}

let large=largerNubmer(10,11);
console.log(large);

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer(x,y,z){
     return Math.min(x,y,z);

}
let min=smallerNubmer(5,10,2);
console.log(min);

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/


function shorterString(x,y,z,k,j){
    let short=[x,y,z,k,j];
    let shorter=short[0];
    for( let i=1;i<short.length;i++){
        if(short[i].length<shorter.length)
            shorter=short[i];
    }
    return shorter;
}
let shorter=shorterString("bassam", "bany ali", "age","dfgdfgdf","fgdfgfdgfdgdgdfgf");
console.log(shorter);


/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/


function longerString(x,y,z,k){
    let long=[x,y,z,k];
    let longest=long[0];
    for(let i=1;i<long.length;i++){
        if(long[i].length>longest.length)
            longest=long[i];

    }
    return longest;
}
let longest=longerString("bassam", "bany ali", "age","dfgdfgdf");
console.log(longest);

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(number){
    if(number%2===0)
        return true;
    else
    return false;
}

let even=isEven(5);
console.log(even);


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(number){
    if(number%2!==0)
        return true;
    else
    return false;
}
let odd=isOdd(5);
console.log(odd);


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/


function positive(number){
    return Math.abs(number);

}

let positive_number=positive(-255);
console.log(positive_number);


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/



function fullName(firstName,lastName){
    let arr=[firstName,lastName];
    let name=arr.join(" ");
    return name;
}
let fullName_value=fullName("Bassam","Bany Ali");
console.log(fullName_value);


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(x,y,z,k,j){
    let arr=[x,y,z,k,j];
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];

    }
    return sum/arr.length;
}
let average_value=average(1,22,4,60,7);
console.log(average_value);


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber(){
    return Math.random();
}
let random=randomNumber();
console.log(random);


/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/


function randomBetweenNumbers(min,max){
    return Math.random() * (max - min) + min;

}
let randomBetween=randomBetweenNumbers(10,11);
console.log(randomBetween);


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/


function scoreInUniversty(x){
    if(95<=x<=100)
        return 'A';
    else if(85<=x<=94)
        return 'B';
    else if(70<=x<=84)
        return 'C';
    else if(50<=x<=69)
        return 'D';
    else
    return "F";
}
let score=scoreInUniversty(90);
console.log(score);


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
function counter(){
    let count=0;
    let prevCount = 0;
    return function(){
         prevCount = count;
        return ++count;
    };
}

let increment=counter();
console.log(increment());
console.log(increment());
console.log(increment());



/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetCounter(){
    let old_value=increment()-1;
    increment = counter();
    return `${old_value} and the counter reset now`;
}
console.log(resetCounter());
console.log(increment());
console.log(increment());
console.log(increment());