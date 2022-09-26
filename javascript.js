let selectedTiles = [];



document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("tile")) return;
    event.target.classList.add("selected");
    selectedTiles.push(event.target);

    if (selectedTiles.length >= 9) {
            const interval = setInterval(() => {
            selectedTiles[0].classList.remove("selected");
            selectedTiles.shift();
            
            if (selectedTiles.length === 0) {
                clearInterval(interval);
            }
        }, 100)

        if (selectedTiles.length === 0) {
            clearInterval(interval);
        }
    }
})