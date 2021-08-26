///////////////////////////////FILTRAR TABELA /////////////////////////////////
var campoFiltro = document.querySelector("#filtrar-tabela");//esta chamando o campo filtro do html para o js

campoFiltro.addEventListener("input",function (){//add um evento de escutar no campo filtro q no caso ele vai add o evento input q é quando a pessoa digite alguma coisa.

   ////esse this quer disser q ele vai pegar o valor do dono do evento q no caso é o campo filtro..

    var pacientes = document.querySelectorAll(".paciente");//selecionando todos os paciente para fazer a filtragem
//////////////////////////FAZENDO APARECER E DESAPARECER OS NOMES QUANDO BUSCADO////////////

    if (this.value.length > 0 ){//se o campo de busca tiver algo digitado vai entrar no for

        for (var i  = 0; i < pacientes.length; i++){//vai pecorrer toda a lista de pacientes

        var paciente = pacientes[i];//estamos buscando um paciente dentro da classe paciente

        var tdNome = paciente.querySelector(".info-nome");//estamos chamando a classe infoNome e atribuindo a tdNome

        var nome = tdNome.textContent;//buscando os nomes do pacientes

        // FAZENDO COM QUE QUANDO COMEÇAMOS A ESCREVER NO CAMPO DE BUSCA SEJA FEITA A BUSCA LETRA POR LETRA

        var expressao = new RegExp(this.value,"i")//na RegExp a gente passa 2 coisa a 1° é o que a gente quer q ela busque que no caso é o valor digitado e 2° como que a gente quer q ela busque no caso o "i" vai buscar tanto minusculo quanto maiusculo

        if (!expressao.test(nome)){//devemos passar para expressao.test o que a gente quer testar q no caso é o (nome)..estamos falando q se a expressao nao for igual ao nome colocamos a classe escondePaciente

            paciente.classList.add("escondePaciente");//foi adicionado uma classe que foi criado no index.css que vai esconder todos os paciente se os nomes nao bater com o nome buscado

        }else{//se o nome for = a this.value a gente remove a classe .escondePaciente
            paciente.classList.remove("escondePaciente");
        }
    }
     
    }else{//se o campo de busca nao conter nada escrito nele vai ser feito esse for

          for (var i  = 0; i < pacientes.length; i++){//para cada paciente da tabela
            var paciente = pacientes[i];
            paciente.classList.remove("escondePaciente");//vai remover a classe escondePaciente
          }
    }

});