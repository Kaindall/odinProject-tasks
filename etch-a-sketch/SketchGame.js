class SketchGame {
    #sketchSize;
    #gameScreen = document.querySelector("#game-screen");
    
    constructor(sizeX, sizeY) {
        const trustedSizeX = (sizeX === undefined) ? 16 : sizeX;
        const trustedSizeY = (sizeY === undefined) ? 16 : sizeY;
        
        this.#sketchSize = `${trustedSizeX}x${trustedSizeY}`;

        this.createGame(trustedSizeX, trustedSizeY);

        console.log(this.#gameScreen.clientWidth);
        console.log(this.#gameScreen.clientHeight);
    }

    createGame(sizeX, sizeY) {
        const gameSizeMatrix = Array.apply(null, Array(sizeX));

        gameSizeMatrix.forEach((grid, i) => {gameSizeMatrix[i] = Array.apply(null, Array(sizeY))});
    
        gameSizeMatrix.forEach((row) => {
            const rowElement = document.createElement("div");
            rowElement.classList.add("row");
            row.forEach(() => {
                const gridElement = document.createElement("div");
                gridElement.classList.add("grid");
                gridElement.setAttribute("style", 
                                        `width:${this.#gameScreen.clientWidth/sizeX}px; 
                                        height:${this.#gameScreen.clientHeight/sizeY}px;`);
                rowElement.appendChild(gridElement);
            })
            this.#gameScreen.appendChild(rowElement);
        })
    }

    generateMatrix () {}



}