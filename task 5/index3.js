document.getElementById("fname").addEventListener("input", function() {
    NoNumber(this);
});

function NoNumber(obj) {
    const namePattern = /^[^\d]*$/;
    if ((!namePattern.test(obj.value))&&obj.value!=="") {
        document.getElementById("fspan").innerHTML = "Numbers are not allowed";
    } else{
        document.getElementById("fspan").innerHTML = "";
    }
}

document.getElementById("Bdate").addEventListener("input", function() {
    Bdate(this);
});

function Bdate(obj) {
    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if ((!datePattern.test(obj.value))&&obj.value!="") {
        document.getElementById("Bspan").innerHTML = "The format should be dd/mm/yyyy";
    } else {
        document.getElementById("Bspan").innerHTML = "";
    }
}

document.getElementById("email").addEventListener("input", function() {
    validateEmail(this);
});

function validateEmail(obj) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if ((!emailPattern.test(obj.value))&& obj.value!=="") {
        document.getElementById("Espan").innerHTML = "The e-mail is not valid";
    } else {
        document.getElementById("Espan").innerHTML = "";
    }
}
