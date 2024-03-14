//Temporização

function acao(){

    document.write("Executando...<br/>")
}
//Executa de tempo em tempo em segundo
//se você colocar setInterval sem declarar em uma varivel ele não vai ter como parar utilizando clearInterval(timer)
var timer = setInterval(acao, 1000);
clearInterval
//setTimeout(acao,1000)