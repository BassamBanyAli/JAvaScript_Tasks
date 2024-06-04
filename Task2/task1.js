/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */

{
let larger=function(num1,num2){
    let result;
    if(num1>num2)
        result=num1;
        else
        result=num2;
        return result;
    
}

let num1=100,num2=200;
let result=larger(200,100); 
document.getElementById("larger").innerHTML=`the larger number is ${result}`;
console.log(`larger number is ${result}`);

}
/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
{
    let num =[3,-7,2];
    for(let i=0;i<3;i++){
        if(num[i]>=0){
            console.log(`the ${num[i]} is positive number`);
        alert(`the ${num[i]} is positive number`);
    }
        else{
        console.log(`the ${num[i]} is negative number`);
        alert(`the ${num[i]} is negative number`);
        }
    }
} 
/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

{
    let num=[0,-1,4];
    num.sort(function(a,b){ return a-b;});
    console.log(num);
}

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */


{
    let num=[-5,-2,-6,0,-1];
    let large=0;
    for(let i=0;i<num.length;i++){
        if(num[i]>num[i+1])
            if(num[i]>large)
            large=num[i];


    }
    console.log(large);
}
 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/

 let x=5,y=2;
 if(x>y)
    console.log("Hello World");


