// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

function numbersTop(array) {
    const freq = {};
    array.forEach(element => {
        const _element = element
        if (freq[_element]) {
            freq[_element]++
        } else {
            freq[_element] = 1
        }
    });

    const array_sorteed = Object.entries(freq).sort((a, b) => b[1] - a[1])
    return array_sorteed.slice(0, 3).map(element => element[0])
}

/**
 * TEST Ejercicio 2
 */
console.log(numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]))
console.log(numbersTop(['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, '2', 'a', 3, '3', '3', '3', '3', '3']))
