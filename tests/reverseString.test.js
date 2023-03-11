const reverseString = require('../src/reverseString.js');

test('reverseString test 1', () => {
    expect(reverseString('testing')).toBe('gnitset');
})

test('reverseString test 2', () => {
    expect(reverseString('Reversed')).toBe('desreveR');
})

test('reverseString test 3', () => {
    expect(reverseString('LmNoP')).toBe('PoNmL');
})

test('reverseString test 4', () => {
    expect(reverseString('Racecar')).toBe('racecaR');
})