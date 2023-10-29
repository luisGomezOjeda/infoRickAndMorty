import imgUnknown from "../public/images/unknown.png"
import imgDead from "../public/images/dead.png"
import imgAlive from "../public/images/live.png"

const deplyCharacter = () => {

    const character = JSON.parse(localStorage.getItem("char"))
    
    console.log(character)

    const $sectionCharacter = document.querySelector(".section-character")

    $sectionCharacter.querySelector("img").src = `${character.image}`
    $sectionCharacter.querySelector("article .name").innerHTML = `${character.name}`
    $sectionCharacter.querySelector("article .status b ").innerHTML = `${character.status}`
    $sectionCharacter.querySelector("article .status img").src = character.status === "Alive" ? imgAlive : character.status === "Dead" ? imgDead : imgUnknown
    $sectionCharacter.querySelector("article .spicies b").innerHTML = `${character.species}`
    $sectionCharacter.querySelector("article .gender b").innerHTML = `${character.gender}`
    $sectionCharacter.querySelector("article .origin b").innerHTML = `${character.origin.name}`
    $sectionCharacter.querySelector("article .location b").innerHTML = `${character.location.name}`
    $sectionCharacter.querySelector("article .episodes b").innerHTML = `${character.episode.length}`

    const $buttonPrev = document.getElementById("button-prev")
    if ('serviceWorker' in navigator) {
        $buttonPrev.classList.add("visible")
        $buttonPrev.addEventListener("click",(e) => {
            console.log($buttonPrev)
            window.history.back()
        })
      } 
}

export default deplyCharacter
