let cadena = "1000000+1+1+10000"

function separarPorVariosOperadores(string) {
    let numeros = []
    let numero = '';
    let separadores_internos = []
    for (let chart of string) {
        if (chart == '+' || chart == '-' || chart == '*' || chart == '/') {
            numeros.push(parseFloat(numero))
            separadores_internos.push(chart)
            numero = ''
        }
        else {
            numero += chart
        }
    }
    numeros.push(parseFloat(numero))
    return [numeros, separadores_internos]

}

const calculo = separarPorVariosOperadores(cadena);

function calculadora(operadores, operandos) {
    let resultado = operandos[0];
    for (let i = 0; i < operandos.length - 1; i++) {
        switch (operadores[i]) {
            case '+':
                resultado += operandos[i + 1]
                break;
            case '-':
                resultado -= operandos[i + 1]
                break;
            case '*':
                resultado *= operandos[i + 1]
                break;
            case '/':
                resultado /= operandos[i + 1]
                break;
        }

    }
    return resultado
}

const resultado = calculadora(calculo[1], calculo[0])
console.log(resultado)


console.log(foramtearoperacion(calculo[0], calculo[1]))