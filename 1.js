// Ejercicio 1
// Dada una matriz de N elementos en la que todos los elementos son iguales excepto uno,
// crea una función findUniq que retorne el elemento único.

function findUniq(array) {
    const freq = {};
    array.forEach(element => {
        const _element = element
        if (freq[_element]) {
            freq[_element]++
        } else {
            freq[_element] = 1
        }
    });

    for (const element in freq) {
        if (freq[element] === 1) {
            return element;
        }
    }
}


/**
 * TEST Ejercicio 1
 */
console.log(findUniq(['12', 10, '12', 11, 1, 1, 40, 11, 10, '12']))
console.log(findUniq(['Capitán América', 'Hulk', 'Deadpool', 'Capitán América', 'Hulk', 'Wonder Woman', 'Deadpool', 'Iron Man', 'Iron Man']))
