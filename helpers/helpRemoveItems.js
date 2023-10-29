export const helpRemoveItems = () => {
    const $mainContent = document.querySelector(".section-listInfo")
    const figures = document.querySelectorAll("figure")
    
    figures.forEach(figure => $mainContent.removeChild(figure))

    const $messageError = document.querySelector(".error-message")
    $messageError.classList.remove("error")

    
}