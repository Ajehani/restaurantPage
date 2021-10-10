import './style.css';
import restaurant from './restaurant.jpeg';
import xmen from './xmen.png';
let content=document.querySelector('#content')
let nav=document.createElement('nav')
document.body.prepend(nav)
const logo=new Image()
logo.src=xmen;
nav.appendChild(logo)
let Home=document.createElement("a")
let Menu=document.createElement("a")
let About=document.createElement("a")
let array=[Home,Menu,About]
for(let i=0;i<=2;i++){
    nav.appendChild(array[i])
    array[i].setAttribute('class','nav')
}
let footer=document.createElement('footer')
document.body.appendChild(footer)
Home.textContent="Home"
Menu.textContent="Menu"
Menu.href="../dist/menu.html"
About.textContent="About"
content.textContent="helo"
const background=new Image();
background.src=restaurant;
content.textContent="This is a x-men themed restaurant, prolly the first ever. Enjoy."
footer.innerHTML="<a href='https://github.com/Ajehani'>More Content</a>"


