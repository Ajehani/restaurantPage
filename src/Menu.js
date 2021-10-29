import {content} from './index.js'
import xburger from './food/xburger.png'
import cyclopsSmores from './food/cyclopsSmores.jpeg'
import wolverineChips from './food/wolverineChips.jpeg'
import rogueSandwich from './food/rogueSandwich.jpeg'
import icemanCocktails from './food/icemanCocktails.jpeg'
import wolverineDiet from './food/wolverineDiet.jpeg'
let createMenu=()=>{
    content.textContent=''
    content.setAttribute('style','width:100%;')
    let makeThePictures=()=>{
        const food=[xburger,cyclopsSmores,wolverineChips,rogueSandwich,icemanCocktails,wolverineDiet]
        let f1=new Image()
        let f2=new Image()
        let f3=new Image()
        let f4=new Image()
        let f5=new Image()
        let f6=new Image()
        let label=[f1,f2,f3,f4,f5,f6]
        for(let i=0;i<6;i++){
            label[i].src=food[i]
            label[i].setAttribute('id',`label${i+1}`)
            label[i].setAttribute('class',`menuPics`)
        }
        return label
    }
    let menu=document.createElement('div')
    menu.setAttribute('id',"menu")
    let label=makeThePictures()
    for(let i=0;i<6;i++){
        let item=document.createElement('div')
        item.setAttribute('class',"menu-items")
        item.setAttribute('id',`item${i+1}`)
        item.appendChild(label[i])
        item.appendChild(document.createElement('h2'))
        item.appendChild(document.createElement('p'))
        console.log(item)
        menu.appendChild(item)
    }
    let t=document.querySelectorAll('.meny-items')
    console.log(t[0])
    content.appendChild(menu)
    let h2Array=document.querySelectorAll('h2')
    h2Array[0].textContent="X-Burger"
    h2Array[1].textContent="Cyclops Smores"
    h2Array[2].textContent="Wolverine Chips"
    h2Array[3].textContent="Rogue Sandwich"
    h2Array[4].textContent="Iceman Cocktails"
    h2Array[5].innerHTML="<span>Special</span> <br> The Wolverine Diet"
    let pArray=document.querySelectorAll('.menu-items p')
    pArray[0].innerHTML="An overpriced burger that kind of looks like an X <br> $45"
    pArray[1].innerHTML="I like smores <br> $10"
    pArray[2].innerHTML="It might just be burnt chips <br> $20"
    pArray[3].innerHTML="Just a regular sandwich<br> $10"
    pArray[4].innerHTML="I'll allow it<br> $5"
    pArray[5].innerHTML="A Hugh JackMan Approved Meal Plan<br> $10,000"


}
export {createMenu};