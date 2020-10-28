const ceil = document.querySelectorAll(".ceil");
const players = ["X", "O"];
let turn = 0;
let isEnded = false;

const valid = (ceil) => {
    return ceil.textContent.length == 0;
}

const setSymbol = (ceil, symbol) => {
    ceil.textContent = symbol;
}

const changeMessage = (content, secondContent) => {
    const view = document.querySelector("#messageGame");
    const view2 = document.querySelector('#secondMessage');
    view.textContent = content;
    view2.textContent = secondContent;
}

const checkResult = (ceil, players, turn) => {
    if ( ceil[0].textContent == players[turn] && ceil[1].textContent == players[turn] && ceil[2].textContent == players[turn]){
        return true;
    }

    if (ceil[3].textContent == players[turn] && ceil[4].textContent == players[turn] && ceil[5].textContent == players[turn]) {
        return true;
    }

    if (ceil[6].textContent == players[turn] && ceil[7].textContent == players[turn] && ceil[8].textContent == players[turn]) {
        return true;
    }

    if (ceil[0].textContent == players[turn] && ceil[3].textContent == players[turn] &&ceil[6].textContent == players[turn]) {
        return true;
    }

    if (ceil[1].textContent == players[turn] && ceil[4].textContent == players[turn] &&ceil[7].textContent == players[turn]) {
        return true;
    }

    if (ceil[2].textContent == players[turn] && ceil[5].textContent == players[turn] && ceil[8].textContent == players[turn]) {
        return true;
    }

    if (ceil[0].textContent == players[turn] && ceil[4].textContent == players[turn] && ceil[8].textContent == players[turn]) {
        return true;
    }

    if (ceil[2].textContent == players[turn] && ceil[4].textContent == players[turn] && ceil[6].textContent == players[turn]){
        return true;
    }
}

const matchNul = (ceil) => {
    for (let i = 0, len = ceil.length; i < len; i++) {
        if (ceil[i].textContent.length == 0){
            return false;
        }
    }

    return true;
}

const refreshPage = () => {
    window.location.reload();
}


const init = () => {
    for (let i = 0, len = ceil.length; i < len; i++) {
        ceil[i].addEventListener("click", function() {
        if (isEnded) return;

        if (!valid(this)) {
            changeMessage("Déjà utilisé !" + players[turn]);
        }else {
            setSymbol(this, players[turn]);
            isEnded = checkResult(ceil, players, turn);

        if (isEnded) {
            changeMessage("Les " + players[turn] + " ont gagné !", "Le jeu va recommencer tout seul !");
            setTimeout(refreshPage, 3000);
            return;
        }

        if (matchNul(ceil)) {
            changeMessage("Match Nul !", "Le jeu va recommencer tout seul !");
            setTimeout(refreshPage, 3000);
            return;
        }

        turn++;
        turn = turn % 2;
        changeMessage("Tour : " + players[turn]);
        }
    });
    }
}

window.addEventListener('load', init);
