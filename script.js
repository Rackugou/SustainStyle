for (let index = 1; index < 10; index++) {
    
    const img_selector = "#img-" + index
    const img = document.querySelector(img_selector);

    const button_selector = "#toggleButton" + index
    const button = document.querySelector(button_selector)

    button.addEventListener("click", () => {
        if (img.style.display === 'none') {
            img.style.display = 'block';
            button.innerHTML = 'Locatie &#9660;';
        } else {
            img.style.display = 'none';
            button.innerHTML = 'Locatie &#9650;';
        }
    })
}