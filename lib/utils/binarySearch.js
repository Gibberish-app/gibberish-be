const wordArray = require('../../data/wordArray')

module.exports = (word) => {
    const array = wordArray();

    const end = array.length - 1;

    return recursiveFunction(array, word, 0, end)
}


const recursiveFunction = (array, word, start, end) => {

    if (start > end) return false;

    let middle = Math.floor((start + end) / 2);
    console.log(array[middle])
    if (array[middle] === word) return true;

    if (array[middle] > word)
        return recursiveFunction(array, word, start, middle - 1);
    else
        return recursiveFunction(array, word, middle + 1, end)
}