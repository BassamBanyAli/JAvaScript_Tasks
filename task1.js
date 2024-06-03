//task 1
let x = 250;
//create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 
let percentage = 2.5/100; // 2.5%
let result = x*percentage; // Calculate 2.5% of 250
console.log(result); // Output: 6.25 
document.getElementById("task1").innerHTML=`the result=${result}`;

//task 2
/*
Array Tasks : 
1
Correct the syntax error
*/
const arr1=[1,7,9,45];
const arr2=["str","alex","moh"];
const arr3=['the','fox','over','lazy','dog'];
document.getElementById("task2.1").innerHTML=`the result is ${(arr1.toString())}`;
document.getElementById("task2.2").innerHTML=`the result is ${(arr2.toString())}`;
document.getElementById("task2.3").innerHTML=`the result is ${(arr3.toString())}`;

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits=["Tomato","Banana","Watermelon"];

for (const [index,fruit] of fruits.entries()) {
    if(fruit=="Tomato"){
       var TomatoIndex=index;
       document.getElementById("tomato").innerHTML=`the Index of tomato is ${TomatoIndex}`;

    }
    else if(fruit=="Banana")
        var BananaIndex=index;
    document.getElementById("banana").innerHTML=`the Index of banana is ${BananaIndex}`;
    
}
/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
const food=["Shawerma","Mansaf"];
const sport=["Football","Tennis"];
const movie=["Game Of Throns","Viking"];
document.getElementById("food").innerHTML=`the result is ${(food.toString())}`;
document.getElementById("sport").innerHTML=`the result is ${(sport.toString())}`;
document.getElementById("movie").innerHTML=`the result is ${(movie.toString())}`;
/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
const FirstArray=[1,4,5];
const SecondArray=["t","u","g","x"];
const first_element_one=FirstArray[0];
const first_element_two=SecondArray[0];
document.getElementById("first").innerHTML=`the result is ${first_element_one}`;
document.getElementById("second").innerHTML=`the result is ${first_element_two}`;
/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
const last_element_one=FirstArray[FirstArray.length-1];
const last_element_two=SecondArray[SecondArray.length-1];
document.getElementById("last_one").innerHTML=`the result is ${last_element_one}`;
document.getElementById("last_two").innerHTML=`the result is ${last_element_two}`;
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array=[0,5,7,9];
array.push(10);
console.log(array.toString());
array.shift();
array.shift();
array.shift();
array.unshift(1,3,4,6,8);
console.log(array.toString());
document.getElementById("arr").innerHTML=`the result is ${array.toString()}`;
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2=[5,9,-7,3,5];
array2.push(1);
console.log(array2);
array2.unshift(1);
console.log(array2);
array2.shift();
console.log(array2);
array2.pop();
console.log(array2);
/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
 let Array_for_sort=[-3,8,7,6,5,-4,3,2,1];
 Array_for_sort.sort(function(a,b){
    return a-b;
 })
 document.getElementById("Array_for_sort").innerHTML=`the result is ${Array_for_sort.toString()}`;
 console.log(Array_for_sort);






