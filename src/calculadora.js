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


function formatoNumero(resultado) {
    resultado = resultado.toString();
    let formateado = ''
    if (resultado.length % 5 == 0 || resultado.length % 8 == 0) {
        formateado = resultado.slice(0, 2) + ','
        for (let i = 1; i < resultado.length - 1; i++) {
            formateado += resultado[i]
            if (i % 3 == 0 && i != resultado.length - 2) {
                formateado += ','
            }

        }
    }
    else {
        for (let i = 0; i < resultado.length; i++) {
            formateado += resultado[i]
            if (i % 3 == 0 && i != resultado.length - 1) {
                formateado += ','
            }

        }
    }

    return formateado
}
console.log(formatoNumero(resultado))

function foramtearoperacion(operandos, operadores) {
    let calculoFormateado = formatoNumero(operandos[0].toString())
    for (let i = 0; i < operandos.length - 1; i++) {
        calculoFormateado += operadores[i]
        calculoFormateado += formatoNumero(operandos[i + 1].toString())
    }
    return calculoFormateado
}

console.log(foramtearoperacion(calculo[0], calculo[1]))