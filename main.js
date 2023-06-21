const form = document.getElementById("formulario");
let numero1 = document.getElementById("valor-a");
let numero2 = document.getElementById("valor-b");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const successMessage = `O valor <b>B</b> é maior que o valor <b>A</b>!`
    const failedMessage = `O valor <b>B</b> não é maior que o valor <b>A</b>!`
    const equalMessage = `Os valores são iguais!`
    const containerMessage = document.querySelector(".mensagem");

    if(numero1.value < numero2.value){
        containerMessage.innerHTML = successMessage
        containerMessage.style.display = 'block';
    } 
    else if (numero1.value > numero2.value){
        containerMessage.innerHTML = failedMessage
        containerMessage.style.display = 'block';
    } 
    else{
        containerMessage.innerHTML = equalMessage
        containerMessage.style.display = 'block';
    }
    
})




