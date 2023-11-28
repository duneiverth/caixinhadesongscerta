//Declaração/criação função TocaSomPom 
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//chamado/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSom;

//referencia constante listaDeTeclas, buscando todos os botoes
const listaDeTeclas = document.querySelectorAll('.tecla');

//chamando a tecla tocaSomPom pelo item "0" da listadetecla
listaDeTeclas[0].onclick = tocaSom;

for(let contador = 0; contador < listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(){
        if(evento.code==='space'|| evento.code==='enter'){
            tecla.classList.add('ativa') 
        } 
        tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
        }    
    }
    
}
