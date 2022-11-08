function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio); //-> parâmetros
   
    if(elemento && elemento.localName === 'audio'){

        elemento.play();
    }
     else {
        alert('Elemento não encontrado ou seletor não encontrado');
        //console.log('Elemento não encontrado ou seletor não encontrado');
     }   
    }
    
const listaDeTeclas = document.querySelectorAll('.tecla');

//while = enquanto-> estrutura de repetição
//for = para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//-> template string

    //console.log(idAudio);
    
    tecla.onclick = function() {
        tocaSom(idAudio);
    } //-> lista

    //contador = contador + 1;-> Se usado com while

    //console.log(contador);

    tecla.onkeydown = function(evento) {
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function() {
      tecla.classList.remove('ativa');  
    }
}















//document.querySelector('.tecla_pom').onclik = tocaSomPom - > repetição de códigos, não é uma boa pratica

/*
Clap
function tocaSomClap (){
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap');
*/