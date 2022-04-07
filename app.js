let x = 0
let y = 0
let jogador = document.getElementById("jogador")
function mover(event){
    console.log(event.key)
    if (event.key === "d"){
    x = x +5
    jogador.style.left = x + "px"
}
    if (event.key === "a"){
        x -= 5
        jogador.style.left = x + "px"
    }
    if (event.key === "s"){
        y += 5
        jogador.style.top = y + "px"
    }
    if (event.key === "w"){
        y -= 5
        jogador.style.top = y + "px"
    }
}
