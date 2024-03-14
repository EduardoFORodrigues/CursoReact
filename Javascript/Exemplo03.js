//Switch
document.write("<br/> Escolha seu pedido:</br>"); 
document.write("<br/> 0 - Pizza / 1 - Suco </br>"); 
document.write("<br/> 2 - Coca cola / 3 - Agua gelada:<br></br>");


function pedir(){

    x = prompt("O  que deseja pedir?");

    switch (x) {

        case "0":
            alert("Você pediu Pizza");
            break;
        case "1":
            alert("Você pediu Suco");
                break;
        case "2":
            alert("Você pediu Coca cola");
                break;
        case "3":
            alert("você pediu Agua gelada");
                break;
                default:
                alert("Este pedido não está no cardápio");    
      
    }
}