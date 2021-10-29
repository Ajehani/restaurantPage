import './style.css';
import restaurant from './restaurant.jpeg';
import xmen from './xmen.png';
let content=document.querySelector('#content')
let nav=document.createElement('nav')
document.body.prepend(nav)
const logo=new Image()
logo.src=xmen;
logo.setAttribute('id',"logo")
nav.appendChild(logo)
let Home=document.createElement("button")
Home.setAttribute('id',"Home")
let Menu=document.createElement("button")
Menu.setAttribute('id',"Menu")
let About=document.createElement("button")
About.setAttribute('id',"About")
let array=[Home,Menu,About]
for(let i=0;i<=2;i++){
    nav.appendChild(array[i])
    array[i].setAttribute('class','nav')
}
let footer=document.createElement('footer')
document.body.appendChild(footer)
Home.textContent="Home"
Menu.textContent="Menu"
About.textContent="About"
const background=new Image();
background.src=restaurant;
import {createMenu} from './Menu.js'
import { createAbout } from './about';
footer.innerHTML="<a href='https://github.com/Ajehani'>More Content</a>"
array.forEach(element=>element.addEventListener('click',()=>{
    array.forEach(el=>el.classList.remove('nav', 'active'))
    array.forEach(el=>el===element?{}:el.classList.add('nav'))
    element.classList.add("nav","active")
    if(Home.matches(".nav.active")){
        content.textContent="This is a x-men themed restaurant, prolly the first ever. Enjoy."
    }
    if(Menu.matches(".nav.active")){
        createMenu()
    }
    if(About.matches(".nav.active")){
        createAbout()
    }
}))
window.addEventListener('load',()=>{
    Home.classList.add("active")
    if(Home.matches(".nav.active")){
        content.textContent="This is a x-men themed restaurant, prolly the first ever. Enjoy."
    }
})
export {content}

