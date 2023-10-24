//Declaração/criação função TocaSomPom 
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}
//chamado/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSom;

//referencia constante listaDeTeclas, buscando todos os botoes
const listaDeTeclas = document.querySelector('.tecla');

//chamando a tecla tocaSomPom pelo item "0" da listadetecla
listaDeTeclas[0].onclick = tocaSom;

let contador = 0;
while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classlist[1];
    const idAudio = "#som_"=efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom(Audio);
    }; 
    contador = contador + 1;
    console.log(contador);
}