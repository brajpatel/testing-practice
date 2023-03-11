const calculator = require('../src/calculator.js');

test('calculator add test 1', () => {
    expect(calculator.add(20, 40)).toBe(60);
})

test('calculator add test 2', () => {
    expect(calculator.add(1234, 4321)).toBe(5555);
})

test('calculator subtract test 1', () => {
    expect(calculator.subtract(15, 15)).toBe(0);
})

test('calculator subtract test 2', () => {
    expect(calculator.subtract(1021, 637)).toBe(384);
})

test('calculator multiply test 1', () => {
    expect(calculator.multiply(12, 12)).toBe(144);
})

test('calculator multiply test 2', () => {
    expect(calculator.multiply(238, 591)).toBe(140658);
})

test('calculator divide test 1', () => {
    expect(calculator.divide(1000, 10)).toBe(100);
})

test('calculator divide test 2', () => {
    expect(calculator.divide(23257, 13)).toBe(1789);
})