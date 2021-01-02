let jogador, vencedor = null;

let quads = document.querySelectorAll(".quadrado");

let jogadorSelecionadoText = document.getElementById("jogador-selecionado");

function escolherQuadrado(id)
{
    if(vencedor !== null)
    {
        return;
    }
    let quad = document.getElementById(id);

    if(quad.innerText !== "-")
    {
        return;
    }
    quad.innerHTML = jogador;
    quad.style.color = "#000";
    

    if (jogador == "X") 
    {
        trocaJogador("O")
    }
    else 
    {
        trocaJogador("X")
    }
    verificaVencedor();
}

function trocaJogador(valor)
{
    jogador = valor;
    jogadorSelecionadoText.innerHTML = jogador;
}

function iniciaJogo()
{
    jogador = null;
    vencedor = null;
    quads.forEach(quad => {
        quad.innerHTML = "-";
        quad.style.color = "#eee";
        quad.style.background = "#eee";
    });
    let ran = Math.floor(Math.random() * 2);
    if(ran == 1)
    {
        trocaJogador("X");
        console.log("Jogador que começa: X");
    }
    else
    {
        trocaJogador("O");
        console.log("Jogador que começa: O");
    }

}

function verificaVencedor()
{
    let quad1 = document.getElementById(1);
    let quad2 = document.getElementById(2);
    let quad3 = document.getElementById(3);
    let quad4 = document.getElementById(4);
    let quad5 = document.getElementById(5);
    let quad6 = document.getElementById(6);
    let quad7 = document.getElementById(7);
    let quad8 = document.getElementById(8);
    let quad9 = document.getElementById(9);

    if(verificaTrio(quad1,quad2,quad3))
    {
        mudarCores([quad1, quad2, quad3]);
        mudarTextVencedor(quad1);
        return;
    }
    else if(verificaTrio(quad4,quad5,quad6))
    {
        mudarCores([quad4, quad5, quad6]);
        mudarTextVencedor(quad4);
        return;
    }
    else if(verificaTrio(quad7,quad8,quad9))
    {
        mudarCores([quad7, quad8, quad9]);
        mudarTextVencedor(quad7);
        return;
    }
    else if(verificaTrio(quad1,quad4,quad7))
    {
        mudarCores([quad1, quad4, quad7]);
        mudarTextVencedor(quad1);
        return;
    }
    else if(verificaTrio(quad2,quad5,quad8))
    {
        mudarCores([quad2, quad5, quad8]);
        mudarTextVencedor(quad2);
        return;
    }
    else if(verificaTrio(quad3,quad6,quad9))
    {
        mudarCores([quad3, quad6, quad9]);
        mudarTextVencedor(quad3);
        return;
    }
    else if(verificaTrio(quad1,quad5,quad9))
    {
        mudarCores([quad1, quad5, quad9]);
        mudarTextVencedor(quad1);
        return;
    }
    else if(verificaTrio(quad3,quad5,quad7))
    {
        mudarCores([quad3, quad5, quad7]);
        mudarTextVencedor(quad3);
        return;
    }
}

function verificaTrio(quad1, quad2, quad3)
{
    let iguais = false;

    if(quad1.innerHTML !== "-" && quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML)
    {
        iguais = true;
    }

    return iguais;
}

function mudarCores(quads)
{
    quads.forEach(element => {
        element.style.background = "green";
    });
}

function mudarTextVencedor(quadrado)
{
    vencedor = quadrado.innerText;
    jogadorSelecionadoText.innerHTML = quadrado.innerText + " VENCEDOR!";
}

iniciaJogo();