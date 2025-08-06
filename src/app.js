// Versión inicial
function saludar() {
    console.log("Hola mundo");
}

main();

function main() {
    saludar();
    const numero = 10
    sumar(numero);
    console.log("Fin");
}

function sumar(n) {
    let resultado = 0;
    for (let i = 0; i < n; i++) {
        resultado += i;
    }
    console.log(`La suma de los números del 0 al ${n} es: ${resultado}`);
}