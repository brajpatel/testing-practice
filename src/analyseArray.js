function analyseArray(arr) {
    if(!arr.length) return 'no values in array'

    return {
        average: findAverage(arr),
        min: findMin(arr),
        max: findMax(arr),
        length: findLength(arr)
    }
}

function findAverage(arr) {
    return arr.reduce((prev, curr) => prev + curr) / arr.length;
}

function findMin(arr) {
    return arr.sort((a, b) => a - b)[0];
}

function findMax(arr) {
    return arr.sort((a, b) => a - b)[arr.length - 1];
}

function findLength(arr) {
    return arr.length;
}

module.exports = analyseArray;