//////////////////////////////// REMOVENDO O PACIENTE ////////////////////////////////
var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){//para a tabela eu estou colocando o evento de escutar algo que neste caso foi o duplo click q é o dblclick...e quando clicamos chama uma funçao que vai conter o event...que vai chamar o event.target que pega qual elemento foi clicado
    //////////////////////////Criando Efeito ao Remover//////////////////////////////
    event.target.parentNode.classList.add("efeitoAoRemover");//adicionando a class q faz o efeito..antes devemos criar no index.css
    
    setTimeout(function(){//esse setTimeOut faz com q o javascript leve um tempo para executar a proxima linha e dentro dele passamos o q ele vai fazer..q no caso é deletar um paciente

    var alvoEvento = event.target;// esse deleta somente a td...nao serve
    var paiDoAlvo = alvoEvento.parentNode;//esse como esta com o .parentNode vai deletar o pai do td que é o tr...entao vai deletar a linha toda..
    paiDoAlvo.remove();

    },500);// tempo q levará para deleta 0.5s



   // this.remove();//esse diz está sempre atrelado ao dono do evento anterior..e o remove(); remove alguma coisa

   
   toastr.info("CADASTRO REMOVIDO COM SUCESSO!!");

});

