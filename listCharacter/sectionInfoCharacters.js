
import helpHttp from "../helpers/helpHttp"
import { helpFilterNumber } from "../helpers/helpFilterNumber";
import { helpRemoveItems } from "../helpers/helpRemoveItems";
import helpDeployCard from "../helpers/helpDepleyCard";


// con esta funcion se carga un placeholder
export const loadPlaceholder = () => {
  const fragmentPlaceholder = document.createDocumentFragment();
  const $mainContent = document.querySelector(".section-listInfo");
  const $templateCard = document.querySelector(".placeholder").content;

  for (let i = 0; i < 6; i++) {
    // Clonar el contenido del template en cada iteración
    const clonedPlace = document.importNode($templateCard, true);
    fragmentPlaceholder.appendChild(clonedPlace);
  }

  $mainContent.appendChild(fragmentPlaceholder);
};

export const loadPage = (url) => {
    const page = helpHttp(url)
    
    page.then(characters => {
      
      helpRemoveItems()

      const $numberPage = document.querySelector(".page"),
      currentNumber = helpFilterNumber(url)
      console.log(currentNumber)
      $numberPage.innerHTML = currentNumber

      const $nextPage = document.querySelector(".next-page")
      if(characters.info.next) {
        $nextPage.setAttribute("data--href", `${characters.info.next}`)
        $nextPage.style.display ="block"
      } 
      else $nextPage.style.display ="none"
      

      const $prevPage = document.querySelector(".prev-page")
      if(characters.info.prev){
        $prevPage.setAttribute("data--href", `${characters.info.prev}`)
        $prevPage.style.display ="block"
      } 
      else $prevPage.style.display ="none"


      helpDeployCard(characters)
      
    })
}

