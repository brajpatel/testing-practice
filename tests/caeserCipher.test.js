const caeserCipher = require('../src/caeserCipher');

test('caeser cipher test 1', () => {
    expect(caeserCipher('GRFGVAT')).toBe('TESTING');
})

test('caeser cipher test 2', () => {
    expect(caeserCipher('ABBQYRF')).toBe('NOODLES');
})

test('caeser cipher test 3', () => {
    expect(caeserCipher('ABBQYRF')).toBe('NOODLES');
})

test('caeser cipher test 4', () => {
    expect(caeserCipher('ABBQYRF')).toBe('NOODLES');
})