import { loadPage, loadPlaceholder } from "./listCharacter/sectionInfoCharacters"
import "./listCharacter/listCharacter.css"
import "./sectionSerch/sectionSerch.css"
import { serchCharacter } from "./sectionSerch/sectionSerch"

import "./character/character.css"
import deplyCharacter from "./character/character"

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(`./public/serviceWorker.js`)
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }

document.addEventListener("DOMContentLoaded",()=> {
    const location = window.location.href
    console.log(location)
    if(!location.includes("character")){
        loadPlaceholder()
        loadPage("https://rickandmortyapi.com/api/character/?page=1")
    }else {
        deplyCharacter()
    }

})


// home
document.addEventListener("click", (e)=> {
    if(e.target.matches(".prev-page, .next-page")){
        loadPlaceholder()
        const link = e.target.getAttribute("data--href")
        loadPage(link)
    }
})

document.addEventListener("click", (e)=> {
    if(e.target.matches("input[type=submit]")){
        e.preventDefault()
        const inputValue = document.querySelector("input[type=text]").value
        if(inputValue.length !== 0) serchCharacter(inputValue)
    }
})

