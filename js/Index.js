window.onload = init 

var scelta = 2;
let matrice = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function init(){
    let btnX = document.getElementById("buttonSceltaX")
    let btnO = document.getElementById("buttonSceltaO")

    btnX.style.backgroundColor = "#3D3C39";
    btnX.style.color = "white";
    btnX.style.width = "30px";
    btnO.style.backgroundColor = "#3D3C39";
    btnO.style.color = "white";
    btnO.style.width = "30px";
}

function sceltaInput(s){
    let btnX = document.getElementById("buttonSceltaX")
    let btnO = document.getElementById("buttonSceltaO")
    let p = document.getElementById("divTitle")

    if(s == 0){
        btnX.style.backgroundColor = "blue";
        btnO.style.backgroundColor = "#3D3C39";
        p.innerHTML = "Inizia X"
        scelta = 0
    }

    if(s == 1){
        btnO.style.backgroundColor = "blue";
        btnX.style.backgroundColor = "#3D3C39";
        p.innerHTML = "Inizia O"
        scelta = 1
    }
}

function input(i){
    
    let ip
    if(scelta == 2){
        alert("Devi scegliere chi inizia!!")
        return
    }

    switch(i){
        case 1:
            ip = document.getElementById("tdUpSx")
            if(scelta == 0){
                ip.innerHTML = "X"
                scelta += 1
            }
            else{
                ip.innerHTML = "O"
                scelta -= 1
            }
            verifica(0, 0)
            break;
        case 2:
            ip = document.getElementById("tdUp")
            if(scelta == 0){
                ip.innerHTML = "X"
                scelta += 1
            }
            else{
                ip.innerHTML = "O"
                scelta -= 1
            }
            verifica(0, 1)
            break;
        case 3:
            ip = document.getElementById("tdUpDx")
            if(scelta == 0){
                ip.innerHTML = "X"
                scelta += 1
            }
            else{
                ip.innerHTML = "O"
                scelta -= 1
            }
            verifica(0, 2)
            break;
        case 4:
            ip = document.getElementById("tdMidSx")
            if(scelta == 0){
                ip.innerHTML = "X"
                scelta += 1
            }
            else{
                ip.innerHTML = "O"
                scelta -= 1
            }
            verifica(1, 0)
            break;
        case 5:
            ip = document.getElementById("tdMid")
            if(scelta == 0){
                ip.innerHTML = "X"
                scelta += 1
            }
            else{
                ip.innerHTML = "O"
                scelta -= 1
            }
            verifica(1, 1)
            break;
        case 6:
            ip = document.getElementById("tdMidDx")
            if(scelta == 0){
                ip.innerHTML = "X"
                scelta += 1
            }
            else{
                ip.innerHTML = "O"
                scelta -= 1
            }
            verifica(1, 2)
            break;
        case 7:
            ip = document.getElementById("tdBotSx")
            if(scelta == 0){
                ip.innerHTML = "X"
                scelta += 1
            }
            else{
                ip.innerHTML = "O"
                scelta -= 1
            }
            verifica(2, 0)
            break;
        case 8:
            ip = document.getElementById("tdBot")
            if(scelta == 0){
                ip.innerHTML = "X"
                scelta += 1
            }
            else{
                ip.innerHTML = "O"
                scelta -= 1
            }
            verifica(2, 1)
            break;
        case 9:
            ip = document.getElementById("tdBotDx")
            if(scelta == 0){
                ip.innerHTML = "X"
                scelta += 1
            }
            else{
                ip.innerHTML = "O"
                scelta -= 1
            }
            verifica(2, 2)
            break;
    }
}

function verifica(i, j){
    if(i == 0){
        if(j == 0){
            if(scelta == 0)
                matrice[0][0] = 0
            else
                matrice[0][0] = 1
        }
        else if(j == 1){
            if(scelta == 0)
                matrice[0][1] = 0
            else
                matrice[0][1] = 1
        }
        else if(j == 2){
            if(scelta == 0)
                matrice[0][2] = 0
            else
                matrice[0][2] = 1
        }
    }
    else if(i == 1){
        if(j == 0){
            if(scelta == 0)
                matrice[1][0] = 0
            else
                matrice[1][0] = 1
        }
        else if(j == 1){
            if(scelta == 0)
                matrice[1][1] = 0
            else
                matrice[1][1] = 1
        }
        else if(j == 2){
            if(scelta == 0)
                matrice[1][2] = 0
            else
                matrice[1][2] = 1
        }
    }
    else if(i == 2){
        if(j == 0){
            if(scelta == 0)
                matrice[2][0] = 0
            else
                matrice[2][0] = 1
        }
        else if(j == 1){
            if(scelta == 0)
                matrice[2][1] = 0
            else
                matrice[2][1] = 1
        }
        else if(j == 2){
            if(scelta == 0)
                matrice[2][2] = 0
            else
                matrice[2][2] = 1
        }
    }
    
    controlloVincitore(matrice)
}

function controlloVincitore(matrice) {
    let i = 0;
    let j = 0;
    let esci = null;
    
    while (i < 3 && !esci) {
        if (matrice[i][0] !== null && matrice[i][0] === matrice[i][1] && matrice[i][1] === matrice[i][2]) {
            esci = matrice[i][0];
        }

        if (matrice[0][i] !== null && matrice[0][i] === matrice[1][i] && matrice[1][i] === matrice[2][i]) {
            esci = matrice[0][i];
        }
        i++;
    }

    if (!esci && matrice[0][0] !== null && matrice[0][0] === matrice[1][1] && matrice[1][1] === matrice[2][2]) {
        esci = matrice[0][0];
    }

    if (!esci && matrice[0][2] !== null && matrice[0][2] === matrice[1][1] && matrice[1][1] === matrice[2][0]) {
        esci = matrice[0][2];
    }
    
    if(esci == 0)
        alert("Il giocatore O vince!!!")
    else if(esci == 1)
        alert("Il giocatore X vince!")
}