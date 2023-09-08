document.addEventListener('DOMContentLoaded' ,() => {
    console.log("fad")
    var menu = document.querySelector(".menu")
    var menu_container = document.querySelector(".nav_items")
    menu.addEventListener('click', ()=>{
        menu_container.classList.toggle("menuActive")
        console.log("clicked")
    })
})