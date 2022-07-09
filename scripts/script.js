const loaded=()=>{
    const button = document.querySelector(".title");
    const navbar = document.querySelector(".nav-bar__items--responsive");
    
    button.addEventListener("click", e=>{
        navbar.classList.toggle("active")
    })
}

window.onload=()=>loaded();