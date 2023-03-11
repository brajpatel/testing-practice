const analyseArray = require('../src/analyseArray');

test('analyse array test 1', () => {
    expect(analyseArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
})

test('analyse array test 2', () => {
    expect(analyseArray([400,20,750,1000,55,66,1111,1112])).toEqual({ average: 564.25, min: 20, max: 1112, length: 8 });
})

test('analyse array test 3', () => {
    expect(analyseArray([2])).toEqual({ average: 2, min: 2, max: 2, length: 1 });
})

test('analyse array test 4', () => {
    expect(analyseArray([])).toEqual('no values in array');
})