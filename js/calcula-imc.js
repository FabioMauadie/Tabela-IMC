/*	alert("ola fabio");	tag alert cria uma caixa de msg*/				
		/*-------------------------------------------------------------------------------------------*/
		/*	console.log ("teste console"); ela mostra a msg no console do navegador*/
		/*-------------------------------------------------------------------------------------------*/
		
		/*alterando o html atraves do javascript*/

		var titulo = document.querySelector("#titulo");/*é preciso criar uma variavel e esse document.querySelector é o utilizado para selecionar o que vc quer alterar*/
		
        titulo.textContent = "Fábio Nutricionista";/*depois devemos pegar a variavel e dar um .textContent=.... que é o que vai ser possivel fazer a alteraçao*/

        //////////////////////////////////////////////////////////////////////////////////////
        // PEGANDO O PESO E ALTURA DO PACIENTE PARA CALCULAR O IMC
        //pegando o peso

        //foi criado uma variavel paciente e  buscamos o id primeiro_paciente e falamos a variavel paciente é igual ao conteudo do id primeiro_paciente
        //querySelector só busca um elemento...para buscar mais de um elemento utilizamos o querySelectorAll ...vai selecionar todos..
        var pacientes = document.querySelectorAll(".paciente");

        //fazendo com que o imc seja calculado para todos os pacientes..
        // esse pacientes.lenght; vai pega a lista de pacientes toda..e vai incrementando o i+1  
        for (var i = 0;  i < pacientes.length ; i++){
            var paciente = pacientes[i];
        

         //foi criado uma variavel tdPeso e  buscamos o id info-peso e falamos a variavel tdPeso é igual ao conteudo do id info-peso
        var tdPeso = paciente.querySelector(".info-peso");

        //foi criado uma variavel Peso e  buscamos o tdPeso e falamos q peso vai conter o conteudo de tdPeso
        var Peso = tdPeso.textContent;
            //pegando a altura
         var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;
        

  ///////////////////////////////////////////////////////////////////////////////////////////      


        // cria a variavel tdImc e associa ela a class info-imc
          var tdImc = paciente.querySelector (".info-imc");

          //fazendo uma validação para caso o peso nao esteja de acordo, nao sera exibido o imc
          function validaPeso(peso){
            if (peso>=0 && peso < 1000){
                return true;
            }else{
                return false;
            }
    
        }
        var pesoValido = validaPeso(Peso);// Esse Peso Maiusculo ta vindo da variavel mais acima esta salvando a resposta da funcao validaPeso que vai ser true o false e passando para a variavel pesovalido
        var alturaValida = validaAltura(altura);// associando a funçao criada mais abaixo a variavel alturaValida
          

         if(!pesoValido){// o ! da negação... entao só vai entrar nesse if se o peso for false     
            pesoValido = false;
            tdImc.textContent = "Peso invalido!";//vai exibir para o usuario 
            //mudando a cor do pacinete quando der um erro, para isso foi criado uma classe no  index.css com o nome de paciente-invalido e colocamos um background-color..
            paciente.classList.add("paciente-invalido");//esse classList.add é possivel adicionar uma class para o js... q no caso foi o add a class paciente-invalido do css no paciente
        }
        ///////////////////////////////////////////////////////////////////////////////////////
        function validaAltura(altura){
            if(altura>=0 && altura<3.0){
                return true;   
            }else{
                return false;
            }
        }
        
        if(!alturaValida){//se altura nao for valida 
            alturaValida = false;
           tdImc.textContent = "altura invalida";//vai exibir para o usuario
           paciente.classList.add("paciente-invalido");//mudando a cor se tiver erro 
        }
       ////////////////////////////////////////////////////////////////////////////////////////
    
        //calculando o imc.. se alturaValida e pesoValido estiver como true vai exibir o imc caso contrario nao.
        if (alturaValida && pesoValido){
            var imc = calculaImc(Peso,altura);
           
            tdImc.textContent = imc;// mostra o imc para o usuario esse .tofixed a gente consegue escolher quantas casas decimais queremos mostrar...sem ele fica um numero muito grande  
        }
    }
    

    function calculaImc (Peso,altura){
        var imc = 0;
        imc = Peso / (altura * altura);
        return imc.toFixed(2);
    } 
   
  
/////////////////////////////////////////////////////////////////////////////////////////////
  
      

        

        

      
        
           
           
        
        

       
      
