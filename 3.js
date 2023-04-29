// Ejercicio 3
// Dada una matriz en la que cada elemento númerico representa una medida,
// crea una función increasedMeasurements que retorne el número de días en los que ha existido un incremento respecto del día anterior.
// Ejemplo: en el caso de [1, 5, 3, 5] existen 2 incremetos ( el día 2 respecto al dia 1 y el dia 4 respecto al día 3 )

function increasedMeasurements(measurements) {
    let counter = 0
    for (const i in measurements) {
        if (measurements[i] > measurements[i - 1]) counter++
    }
    return counter
}

/**
 * TEST Ejercicio 3
 */
const measurements = [245, 248, 259, 190, 180, 185, 191, 185, 188, 189, 204, 213, 215, 227, 222, 221, 236, 235, 236, 232, 224, 221, 228, 234, 226, 227, 228, 230, 232, 234]
console.log(increasedMeasurements(measurements)) // 19