const caeserCipher = require('../src/caeserCipher');

test('caeser cipher test 1', () => {
    expect(caeserCipher('GRFGVAT')).toBe('TESTING');
})

test('caeser cipher test 2', () => {
    expect(caeserCipher('CENPGVPR')).toBe('PRACTICE');
})

test('caeser cipher test 3', () => {
    expect(caeserCipher('OVAT PUVYYVAT')).toBe('BING CHILLING');
})

test('caeser cipher test 4', () => {
    expect(caeserCipher('ABBQYRF')).toBe('NOODLES');
})