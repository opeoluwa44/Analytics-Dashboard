const menuBar = document.querySelector(".menu")
const exitBar = document.querySelector('.exit')
const sideBar = document.querySelector("#sidebar")

const themeSwitch = document.querySelector("label")
const sidebarContainer = document.querySelector(".sidebar-container")
const sidebar = document.querySelector("#sidebar")
const stroke = document.querySelector(".menu-item.active")
const boxes = document.querySelectorAll(".box")
const header  = document.querySelector(".header")
const searchTab = document.querySelector("#search-input")
const searchBar = document.querySelector(".search-bar")
const main = document.querySelector("#main")
const items = document.querySelectorAll(".item")
const middles = document.querySelectorAll(".middle")
const lists = document.querySelectorAll(".list")
const dashboardSvg = document.querySelector(".menu-item.active svg")
const exit = document.querySelector(".exit svg")
const menu = document.querySelector(".menu svg")
const tops = document.querySelectorAll(".top-line")
const titles = document.querySelectorAll(".title")
const headerSvgs = document.querySelectorAll(".right-header-item svg")

console.log(menu)

menuBar.addEventListener("click",()=>{
    sideBar.classList.add('view')
})

exitBar.addEventListener("click", ()=>{
    sideBar.classList.remove('view')
})


themeSwitch.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    sidebarContainer.classList.toggle("dark")
    sidebar.classList.toggle("dark")
    stroke.classList.toggle("dark")
    boxes.forEach(box => {
        box.classList.toggle("dark")
    });
    items.forEach(item => {
        item.classList.toggle("dark")
    });
    header.classList.toggle("dark")
    searchTab.classList.toggle("dark")
    searchBar.classList.toggle("dark")
    main.classList.toggle("dark")
    middles.forEach(middle => {
        middle.classList.toggle("dark")
    });

    lists.forEach(list => {
        list.classList.toggle("dark")
    });
    dashboardSvg.classList.toggle("dark")
    menu.classList.toggle("dark")
    exit.classList.toggle("dark")
    tops.forEach(top => {
        top.classList.toggle("dark")
    });
    titles.forEach(title => {
        title.classList.toggle("dark")
    });
    headerSvgs.forEach(svg => {
        svg.classList.toggle("dark")
    });
})