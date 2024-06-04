/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
{
    let Rate=function(rate){
        if(rate<50)
            return "Fail";
        else if(50<=rate<=59)
        return "E";
        else if(60<=rate<=69)
        return "D";
        else if(70<=rate<=79)
        return "C";
        else if(80<=rate<=89)
        return "B";
        else if(90<=rate<=100)
        return "A";
        
        
    }

    let TextRate=Rate(70);
    console.log(TextRate);
}
//Task 3
// 1. Write a JS code to print numbers from 1 to 10
{
    for(let i=1; i<=10;i++){
        console.log(i);
    }
}
/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
{
    var arr=[13,23,12,45,22,48,66,100];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0)
            console.log(`the number ${arr[i]} is even`);
    }

}

/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/




for (let i = 1; i <= 8; i++) {

    let row_data= '';


    for (let j = 1; j <= i; j++) {

        row_data += j + ' ';
    }


    console.log(row_data);
}

 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/
{
    let letter="";
    let str="don’t know wh";
    for(char of str){
        if(char=="y")
            letter="yes";
            console.log(letter);
    }
    if(letter=="")
        console.log("no");
}

