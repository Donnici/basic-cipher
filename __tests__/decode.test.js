const decode = require('../lib/decode');

test("Decode '2i 1iê with codeword 'key' to equal 'secret'", () => {
    expect(decode('2i 1iê', 'key')).toBe('secret');
});