const menuBar = document.querySelector(".menu")
const exitBar = document.querySelector('.exit')
const sideBar = document.querySelector("#sidebar")

menuBar.addEventListener("click",()=>{
    sideBar.classList.add('view')
})

exitBar.addEventListener("click", ()=>{
    sideBar.classList.remove('view')
})

