const api="https://66681676f53957909ff67af8.mockapi.io/users/Animals";

document.addEventListener('DOMContentLoaded', fetch_options);
document.getElementById("select").addEventListener('change',displayImage);
 async function fetch_options (){
    const response= await fetch(api);

    const images=await response.json();
    console.log(images);
    for(let i=0;i<images.length;i++){
    const newOption = document.createElement('option');
    
    newOption.value=images[i].image;
    newOption.textContent=images[i].name;
    let select=document.getElementById("select");
    select.appendChild(newOption);
    if (i === 0) {
        select.value = images[i].image;
        displayImage();
    }

}
}
function displayImage(){
    let select=document.getElementById("select");
    const selectedValue = select.value;
    let image=document.getElementById("image");
    image.innerHTML = '';
    if(selectedValue){
        const newImage=document.createElement('img');
        newImage.src=selectedValue;
        image.appendChild(newImage);
        
    }

}


