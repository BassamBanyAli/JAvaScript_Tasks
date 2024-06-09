document.getElementById("index").style.background="blue";
function change_background(){
     let color=document.getElementById("index");
     color.style.background="red"
}

// Exercise #3 (3): Changing images
    document.getElementById("image").innerHTML=`<img src="no-image.png" name="no_image">`
function list_image(){
    let image=document.getElementById("list");
    document.getElementById("image").innerHTML=`<img src=${image.value} name=${image.alt}>`
}

//4

const selectFontSize = document.getElementById("gfg1"); 
const updateElement = document.getElementById("gfg"); 
updateElement.style.fontFamily="fantasy"

selectFontSize.addEventListener("change", function () { 
    const selectedValue = selectFontSize.value; 
    updateElement.style.fontSize = selectedValue; 
});
const selectFontFamily=document.getElementById("font");
selectFontFamily.addEventListener("change",function(){
    const selectedValue=selectFontFamily.value;
    updateElement.style.fontFamily = selectedValue; 

})
const selectFontItalic=document.getElementById("Italic"); 
selectFontItalic.addEventListener("change", function() {
    if (selectFontItalic.checked) {
        updateElement.style.fontStyle = "italic";
    } else {
        updateElement.style.fontStyle = "normal";
    }
});
const selectFontBold=document.getElementById("Bold"); 
selectFontBold.addEventListener("change", function() {
    if (selectFontBold.checked) {
        updateElement.style.fontWeight = "bold";
    } else {
        updateElement.style.fontWeight = "normal";
    }
});
const selectFontUnderLine=document.getElementById("UnderLine"); 
selectFontUnderLine.addEventListener("change", function() {
    if (selectFontUnderLine.checked) {
        updateElement.style.textDecoration = "underline";
    } else {
        updateElement.style.textDecoration = "none";
    }
});


//5
document.getElementById('passwordForm').addEventListener('change', validatePasswordsForm);
document.getElementById('password').addEventListener('change', validatePasswords);
document.getElementById('confirmPassword').addEventListener('change', validateConfirmPasswords);

function validatePasswords(){
    let password = document.getElementById('password').value;
    let message1 = document.getElementById('message1');
    let minLengthRegex = /^.{6,}$/;
     if (!minLengthRegex.test(password)) 
        message1.textContent = "Password must be at least 6 characters long.";
    else
    message1.textContent = "";


};
function validateConfirmPasswords(){
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let message2 = document.getElementById('message2');
     if (password !== confirmPassword) 
        message2.textContent = "Passwords do not match!";
        else {
        message2.textContent = "";
        alert("Passwords match. Form can be submitted.");
        }
}
function validatePasswordsForm(){
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let submit=document.getElementById("submit");
    if(password===confirmPassword)
        submit.style.display="block";

}
//6

function addSong() {
    var songInput = document.getElementById("songInput");
    var playlist = document.getElementById("playlist");

    var songName = songInput.value;

    if (songName === "") {
        alert("Please enter both song name and artist name.");
        return;
    }

    var listItem = document.createElement("li");
    listItem.textContent = songName;
    playlist.appendChild(listItem);

    // Clear input fields
    songInput.value = "";
}

