class SketchGame {
    #gameSize;
    #gameScreen = document.querySelector("#game-screen");
    
    constructor(gameSize) {
        this.#gameSize = (gameSize === undefined) ? 16 : gameSize;

        this.createGame(this.#gameSize);
    }

    createGame(size) {
        this.#gameScreen.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`)
        console.log(this.#gameScreen);
        console.log(this.#gameSize);
    
        for (let i = 0; i < size * size; i++) {
            const pixelElement = document.createElement("div");
            pixelElement.setAttribute("style", `height: ${this.#gameScreen.clientHeight / this.#gameSize}px;`);
            pixelElement.classList.add("grid");
            this.#gameScreen.appendChild(pixelElement);
        }
    }
}