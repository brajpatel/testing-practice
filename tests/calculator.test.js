const calculator = require('../src/calculator.js');

test('calculator add test 1', () => {
    expect(calculator.add(20, 40)).toBe(60);
})

test('calculator add test 1', () => {
    expect(calculator.add(1234, 4321)).toBe(5555);
})