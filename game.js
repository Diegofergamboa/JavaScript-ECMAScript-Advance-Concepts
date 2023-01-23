const canvas = document.getElementById('game');
const game = canvas.getContext('2d');




function startGame() {
    let canvasSize = () => {
        if (window.innerHeight > window.innerWidth) {
            canvasSize = window.innerWidth * 0.8;
        } else {
            canvasSize = window.innerHeight * 0.8;
        }
        return canvasSize;
    };
    const result = canvasSize();
    
    canvas.setAttribute('width', result);
    canvas.setAttribute('height', result);
    console.log('Content loaded.');
}

window.addEventListener('load', startGame); 