
function mOver() {
    document.getElementById("task1").innerHTML="Can i help you!"
   
  }
  
  function mOut() {
    document.getElementById("task1").innerHTML="Hello World!"
  }

//task2




function ChangeValue(obj) {
    let imagePath = '';
    let altText = '';

    if(obj.value === "Palestine") {
        imagePath = '29515_source_1699443686.jpg';
        altText = 'Flag of Palestine';
    } else if(obj.value === "Jordan") {
        imagePath = 'Flag_of_Jordan.svg.png';
        altText = 'Flag of Jordan';
    } else if(obj.value === "Syria") {
        imagePath = 'download.jpeg';
        altText = 'Flag of Syria';
    }

    document.getElementById("image").innerHTML = imagePath 
        ? '<img src="' + imagePath + '" alt="' + altText + '">'
        
        : '';
}

const selectFontSize = document.getElementById("gfg1"); 
const updateElement = document.getElementById("gfg"); 

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