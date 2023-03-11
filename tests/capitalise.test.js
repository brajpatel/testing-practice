const capitalise = require('../src/capitalise.js');

test('capitalise test 1', () => {
    expect(capitalise('testing practice')).toBe('Testing practice');
})

test('capitalise test 2', () => {
    expect(capitalise('yes')).toBe('Yes');
})

test('capitalise test 3', () => {
    expect(capitalise('cAPITALISE ME')).toBe('CAPITALISE ME');
})

test('capitalise test 4', () => {
    expect(capitalise('iiiiii')).toBe('Iiiiii');
})