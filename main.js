//Declaração/criação função TocaSomPom 
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play()
}
//chamado/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSomPom;

//referencia constante listaDeTeclas, buscando todos os botoes
const listaDeTeclas = document.querySelector('.tecla');

//chamando a tecla tocasompom pelo item "0" da listadetecla
listaDeTeclas[0].onclick = tocaSomPom;

let contador = 0;
while(contador < 9){
    listaDeTeclas[contador].onclick = tocaSomPom; 
    contador = contador = 1;
    
}