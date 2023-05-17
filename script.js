let numero = document.getElementById("numero");
let fibonacciList = document.getElementById("fibonacci-list");
let resultado = document.getElementById("resultado");

function verifique() {
    let n1 = 0;
    let n2 = 1;
    let n3 = 0;
    let list_fibo = [n1, n2];
    let inputNumber = parseInt(numero.value);

    while (n3 <= inputNumber) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        list_fibo.push(n3);
    }

    fibonacciList.innerHTML =
        "<p>Sequência gerada: " + list_fibo.join(", ") + "</p>";

    if (list_fibo.includes(inputNumber)) {
        resultado.innerHTML = "<p>O número " + inputNumber + " pertence à sequência de Fibonacci.</p>";
    } else {
        resultado.innerHTML = "<p>O número " + inputNumber + " não pertence à sequência de Fibonacci.</p>";
    }
}