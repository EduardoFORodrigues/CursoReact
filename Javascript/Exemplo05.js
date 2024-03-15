
//Aplicando WebStorage
//Exemplo de lista utilizando localStorage.lista = ["Eduardo",23,"dudacriativo@gmail.com"]

var nome = ''

if(typeof localStorage.nome == 'undefined'){

    localStorage.nome = prompt("Informe seu  nome");
}
 nome = localStorage.nome;

 document.getElementById ("nome").innerHTML = nome;




var sobrenome = ''

if(typeof localStorage.sobrenome == 'undefined'){

    localStorage.sobrenome = prompt("Informe seu sobrenome")
  
}
sobrenome = localStorage.sobrenome;

document.getElementById("sobrenome").innerHTML = sobrenome;



var idade = '';

if(typeof localStorage.idade =='undefined'){

    localStorage.idade = prompt("informa sua idade")
}
 idade = localStorage.idade;
 document.getElementById("idade").innerHTML = idade;
