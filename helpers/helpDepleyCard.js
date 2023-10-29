import imgAlive from "../public/images/live.png"
import imgDead from "../public/images/dead.png"
import imgUnknown  from "../public/images/unknown.png"

const helpDeployCard = (characters) => {

  const BASE_URL = import.meta.env.BASE_URL;
  const $mainContent = document.querySelector(".section-listInfo"),
  fragment = document.createDocumentFragment(),
  $templateCard = document.querySelector(".template-cardInfo");
  
  characters.results.map(character => {
        const cloneCard = document.importNode($templateCard,true).content
        cloneCard.querySelector("figure img").src = character.image
        cloneCard.querySelector(".name").textContent = character.name
        cloneCard.querySelector(".status img").src = character.status === "Alive" ? imgAlive : character.status === "Dead" ? imgDead : imgUnknown
        cloneCard.querySelector(".status b").textContent = `${character.status}`
        cloneCard.querySelector(".gender").textContent = `Gender : ${character.gender}`
        cloneCard.querySelector(".origin").textContent = `Origin : ${character.origin.name}`
        cloneCard.querySelector(".link-character").href = `${BASE_URL}character.html?id=${character.id}`

        cloneCard.querySelector(".link-character").addEventListener
        ("click",(e) => localStorage.setItem("char",JSON.stringify(character)))
        
        fragment.appendChild(cloneCard)
      })

      const placeholder = document.querySelectorAll(".card-placeholder")
      placeholder.forEach(card => $mainContent.removeChild(card))
      $mainContent.appendChild(fragment)

      const $linksCharacters = $mainContent.querySelectorAll("figure .card .link-character")

}

export default helpDeployCard