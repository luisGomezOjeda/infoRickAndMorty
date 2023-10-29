import helpDeployCard from "../helpers/helpDepleyCard"
import helpHttp from "../helpers/helpHttp"
import { helpRemoveItems } from "../helpers/helpRemoveItems"

export const serchCharacter = async (character) => {
    const $errorMesage = document.querySelector(".error-message")
    const res = await helpHttp(`https://rickandmortyapi.com/api/character/?name=${character}`)
    
    console.log(res)

    if(!res.error){
        $errorMesage.classList.remove("error") 

        helpRemoveItems()
        helpDeployCard(res)

    }else {
        const $input = document.querySelector("#formSerch input[type=text]")
        $input.value = ""

        $errorMesage.classList.add("error") 
        $errorMesage.innerHTML = `${res.statusText}`
    }
}