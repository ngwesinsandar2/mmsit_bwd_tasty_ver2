ScrollReveal({ 
    reset: true,
    distance: "80px",
    duration: 2500
});

ScrollReveal().reveal(".text1, .menu1", {origin: "left"});
ScrollReveal().reveal(".homeFood, .menu3", {origin: "right"});

ScrollReveal().reveal(".text2, .menu2", {origin: "bottom"});
ScrollReveal().reveal(".aboutFood", {origin: "top"});

let menu = document.getElementById("menu");
let toggle = document.getElementById("toggle");

document.addEventListener("click", (e)=>{
    if(e.target.id !== "menu" && e.target.id !== "toggle"){
        menu.classList.remove("show");
    }
})