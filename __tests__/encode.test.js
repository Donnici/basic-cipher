const encode = require('../lib/encode');

test("Encode 'secret' with codeword 'key' to equal '2i 1iê'", () => {
    expect(encode('secret', 'key')).toBe('2i 1iê');
});