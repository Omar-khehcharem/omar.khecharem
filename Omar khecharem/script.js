const burgor=document.getElementById("btn");
const items=document.getElementById("items");

burgor.addEventListener("click",function (){
    items.classList.toggle("hidden");
    burgor.classList.toggle("bg-white");
    
});