  //titulo.addEventListener("click",mostrarMsg);//addEventListener..fica esperando por um tipo de evento q no caso foi um click e quando é clicado ele vai chamar a funçao mostramsg.
   // function mostrarMsg(){
      //  console.log("eu fui clicado")
  //  }
      
 // ADICIONANDO UMA AÇÃO NO BOTAO ADICIONAR
 var botaoAdicionar = document.querySelector("#adicionar-paciente"); 
 //selecionado o botao enviar  

 //adicionando um evento quando o botao for clicado
botaoAdicionar.addEventListener("click",function(event){
   
    event.preventDefault();//event.preventDefault vai tirar o comportamento padrao do botao  e ai a gente consegui colocar o que a gente que,para isso precisamos colocar o (event)na funcion
//////////////////////////////////////////////////////////////////////////////////////////
  //PEGANDO OS DADOS DO FORM HTML 

  // foi criado um variavel form ... e selecionamos o form do html e passamos os dados para o javascript
  var form = document.querySelector("#form-adiciona");
  
 // foi criado uma funcao que contem o form e foi criado a var paciente com os objetos que preenche o form do paciente esse .value é o que pega o valor do html
  function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)// vai chamar a funçao calcular imc e vai pegar o peso e altura vindo do form e fazer o calculos
    }
    return paciente;//vai pegar os dados armazenados no objetos e vai retornar para paciente
}
//foi criado uma variavel paciente que esta virando uma função declarada mais em baixo com os objtos nome,altura,peso,gordura,imc
var paciente = obtemPacienteDoFormulario(form);//ta pegando a variavel paciente e dizendo q é a mesma coisa q a função

 
  

//////////////////////////////////////////////////////////////////////////////////////////////
  //CRIANDO OS CAMPOS DA TABELA NO JAVASCRIPT PARA DEPOIS ENVIARMOS PARA A TABELA

  //para isso devemos criar os campos com o document.createElement
  // esta criando uma variavel que no caso seria a classe paciente tr do html
  // e em baixo criando os lugares que vao armazenar o resultado que vai vim do form
 
  function montarTr(paciente){
    var pacienteTr = document.createElement("tr");//criando tr na tabela
    pacienteTr.classList.add("paciente");//estamos falando q o elemento tr vai ter a classe paciente
    var nomeTd = document.createElement("td");//criando td ns tabela
    nomeTd.classList.add("info-nome");
    
    var pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");

    var alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");

    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");

    var imcTd = document.createElement("td");
    imcTd.classList.add("info-imc");
      /////////////////////////////////////////////////////////////////////////////////////

  // PEGANDO OS DADOS DO FORM HTML PARA PASSAR PRA TABELA QUE CRIAMOS NO JAVASCRIPT 
  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;//chamando a funçao q foi criada no calc-imc
  ///////////////////////////////////////////////////////////////////////////////////
   // COLOCANDO UM ELEMENTO DENTRO DO OUTRO EXEMPLO::
  //<tr pacienteTr>
  //<td nomeTd> teste </td>
  //</tr>...................para criarmos essa hierarquia de tr e td utilizamos .appendChild que é o q vai dizer q os td é filho dos tr

  pacienteTr.appendChild(nomeTd);//estamos falando que nomeTd é filha de pacienteTr
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);   
  
    return pacienteTr;
  }
  var pacienteTr =  montarTr (paciente);
  console.log(paciente);
///////////////////////////////////////////////////////////////////////////////////
// VALIDANDO O FORM ANTES DE ADICIONAR O PACIENTE NA TABELA e mostrando msg ao usuario criamos o id no html mensagem erro

var erros = validaPaciente(paciente);
function validaPaciente (paciente){
    var erros = []; //criando array para poder mostrar 2 ou mais mensagens ao mesmo tempo

    if(!validaPeso(paciente.peso)){//se o peso nao for validado
    erros.push("Peso inválido!");//vamos adicionar alguma a mensagem com o array.push   
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida!");
    }
    if(paciente.nome.length == 0){
        erros.push(" O nome não pode ser em branco!");
    }
    if(paciente.peso.length == 0){
        erros.push(" O peso não pode ser em branco!");
    }
    if(paciente.altura.length == 0){
        erros.push(" A altura não pode ser em branco!");
    }
    if(paciente.gordura.length == 0){
        erros.push(" A gordura não pode ser em branco!");
    }
   

    return erros;//esse return  faz com q ele volte com todos os erros colocados.. e saia da funcao e nao adicione na tabela q é a proxima coisa q ele iria fazer
}
///////////////////////////////////////////////////////////////////////////////
                                //mensagem de erro
if (erros.length>0){
    exibeMensagemDeErro(erros);
return;
}
function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    //limpando as mensagens de erro, com a propriedade.innerHTML

    ul.innerHTML = "";//innerHtml permite controlar um html interno de um elemento..por isso estamos colocando que ul fica vazio..assim sempre vai apagar as anteriores e colocar as novas

    erros.forEach(function(erroOcorrido){// esse forEach pecorre o array todo e aqui esta sendo dito q pra cada item do array erros queremos fazer alguma coisa..q seria funcion
        var li = document.createElement("li");//criando li
        li.textContent = erroOcorrido;//escrever o erro
        ul.appendChild(li);//colocando a li dentro da ul

    });

}
  //////////////////////////////////////////////////////////////////////////////////
    // ADICIONANDO O PACIENTE NA TABELA
  //primeiro devemos buscar a tabela do mundo html
  var tabela = document.querySelector("#tabela-pacientes");
  // e agora devemos dizer pra tabela colocar dentro dela o tr que acabamos de criar com o javascript o pacienteTr
  tabela.appendChild(pacienteTr);

  // LIMPANDO O FORM QUANDO O PACIENTE É ADICIONADO NA TABELA
  form.reset();//esse form reset faz com que quando enviamos os dados o form seja limpo

  // LIMPANDO AS MENSAGENS DE ERRO QUANDO O PACIENTE É ADICIONADO NA TABELA
  var mensagemDeErro = document.querySelector("#mensagens-erro");
  mensagemDeErro.innerHTML = "";
  toastr.success("CADASTRO REALIZADO COM SUCESSO!!");
});




