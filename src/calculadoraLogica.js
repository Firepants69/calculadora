let cadena = "1000000+1+1+10000+"

function separarPorVariosOperadores(string) {
    let numeros = []
    let numero = '';
    let separadores_internos = []
    for (let chart of string) {
        if (chart == '+' || chart == '-' || chart == '*' || chart == '/') {
            numeros.push(numero)
            separadores_internos.push(chart)
            numero = ''
        }
        else {
            numero += chart
        }
    }
    numeros.push(numero)
    if (numeros[numeros.length - 1] == "") {
        numeros.pop()
    }
    return [numeros, separadores_internos]

}

const calculo = separarPorVariosOperadores(cadena);

function formatoNumero(numero) {
    if (numero.search(",") != -1) {
        return numero;
    }
    var str = numero.toString().split('.');
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return str.join('.');
}

export function formatoOperacion(operacion) {

    const [numeros, separadores_internos] = separarPorVariosOperadores(operacion)

    let operacionFormateada = "";
    if (numeros.length === separadores_internos.length) {
        for (let i = 0; i < separadores_internos.length; i++) {
            operacionFormateada += formatoNumero(numeros[i])
            operacionFormateada += separadores_internos[i]
        }
        console.log(separadores_internos, numeros)
        return operacionFormateada
    } else {
        operacionFormateada = formatoNumero(numeros[0].toString())
        for (let i = 0; i < separadores_internos.length; i++) {
            operacionFormateada += separadores_internos[i]
            operacionFormateada += formatoNumero(numeros[i + 1])
        }
        console.log(separadores_internos, numeros)
        return operacionFormateada
    }
}

export function LimpiarOperacion(cadena) {
    if (cadena.search(",") === -1) {
        return cadena
    }
    let resultado = ""
    for (let chart of cadena) {
        if (chart != ",") {
            resultado += chart
        }
    }
    return resultado
}

const operacion = formatoOperacion("5000")
console.log(operacion)
console.log(LimpiarOperacion(operacion))