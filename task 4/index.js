

// Storing data:
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
console.log(typeof(myJSON));
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
console.log(typeof(obj));
document.getElementById("demo").innerHTML = obj.name


