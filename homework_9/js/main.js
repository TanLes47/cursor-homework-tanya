function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() *255);
    return `rgb(${r}, ${g}, ${b})`;
}
    
function generateBlocks(){
    const square =  document.getElementById("square");
        for (let i=0; i< 25; i++){
            square.appendChild(document.createElement("div")).style.backgroundColor = randomColor();
        }
}
generateBlocks();
    
function generateBlocksInterval(){
    const changeColorElement =  document.querySelectorAll("div");
    setInterval(() => {
        changeColorElement.forEach((square) => {square.style.backgroundColor = randomColor(); });
        }, 1000);
}
generateBlocksInterval();