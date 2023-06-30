document.addEventListener("DOMContentLoaded", function(_) {
    game(0);
});

function game(level) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let chosen = Math.floor(Math.random() * (3 + Math.floor(level / 10)) * (3 + Math.floor(level / 10)));
    let different = Math.min(r, g, b, 40 - Math.floor(level / 5));
    let timeNum = 0;

    let points = document.querySelector(".points");
    let time = document.querySelector(".time");
    let board = document.querySelector(".game-board");

    board.style.gridTemplateColumns = `repeat(${3 + Math.floor(level / 10)}, auto)`;
    while(board.firstChild) {
        board.removeChild(board.lastChild);
    }
    points.textContent = points.textContent.substring(0, points.textContent.indexOf(" ")+1) + (level).toString();
    time.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    let id = setInterval(function() {
        timeNum++;
        time.style.width = `${timeNum}%`;
        if(timeNum == 100) {
            clearInterval(id);
            document.body.innerHTML = "";
        }
    }, 100);

    for(let i = 0; i < (3 + Math.floor(level / 10)) * (3 + Math.floor(level / 10)); i++) {
        let element = document.createElement("div");
        element.classList.add("game-tile");
        if(i == chosen) {
            element.style.backgroundColor = `rgb(${r-different}, ${g-different}, ${b-different})`;
            element.addEventListener("click", function(_) {
                clearInterval(id);
                game(level+1);
            });
            element.style.gridT
        }
        else {
            element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            element.addEventListener("click", function(_) {
                document.body.innerHTML = "";
            });
        }
        board.appendChild(element);
    } 
}