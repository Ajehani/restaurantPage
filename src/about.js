import {content} from './index.js'
import location from './xmenLocation.png'
let createAbout=()=>{
    content.textContent=''
    content.setAttribute('style','width:50%;')
    let Location=new Image()
    Location.src=location
    Location.setAttribute('style',"height:30rem;width:30rem;padding:4rem;")
    let p1=document.createElement('p')
    let p2=document.createElement('p')
    p1.textContent='Tele: 123 456 789'
    p2.textContent='Addess: Xavier Academy, USA.'
    content.appendChild(p1)
    content.appendChild(p2)
    content.appendChild(Location)
}
export {createAbout}