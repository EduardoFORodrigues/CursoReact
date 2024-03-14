
//Função com condição validação
function entrar(){

    var area = document.getElementById('area');
    var texto = prompt("Digite seu nome:");
    
    if(texto =="" || texto== null){
     alert = prompt('Digite seu nome correto:')
     area.innerHTML = 'Bem vindo'
     }
     else{
         area.innerHTML = 'Seu nome é:'+ texto;  
     }
   
   
  
}    
function entrar3(){

    var area = document.getElementById('area3');
    var idade = prompt('Digite sua idade?');
    area.innerHTML = idade ;
}
function entrar2(nome){

    var area = document.getElementById('area2');
    var texto = prompt('Digite seu sobrenome?');
    area.innerHTML = nome + " " + texto  ;
}
