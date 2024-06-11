document.getElementById("fname").addEventListener("change", function() {
    NoNumber(this);
});

function NoNumber(obj) {
    const namePattern = /^[^\d]*$/;
    if (!namePattern.test(obj.value)) {
        document.getElementById("fspan").innerHTML = "Numbers are not allowed";
    } else {
        document.getElementById("fspan").innerHTML = "";
    }
}

document.getElementById("Bdate").addEventListener("change", function() {
    Bdate(this);
});

function Bdate(obj) {
    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!datePattern.test(obj.value)) {
        document.getElementById("Bspan").innerHTML = "The format should be dd/mm/yyyy";
    } else {
        document.getElementById("Bspan").innerHTML = "";
    }
}

document.getElementById("email").addEventListener("change", function() {
    validateEmail(this);
});

function validateEmail(obj) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(obj.value)) {
        document.getElementById("Espan").innerHTML = "The e-mail is not valid";
    } else if (obj.value === "") {
        document.getElementById("Espan").innerHTML = "The e-mail is required";
    } else {
        document.getElementById("Espan").innerHTML = "";
    }
}
