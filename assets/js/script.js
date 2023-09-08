document.addEventListener('DOMContentLoaded' ,() => {
    var menu = document.querySelector(".menu")
    var menu_container = document.querySelector(".nav_items")
    menu.addEventListener('click', ()=>{
        menu_container.classList.toggle("menuActive")
    })
})