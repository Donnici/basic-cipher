const decode = require('../lib/decode');
const encode = require('../lib/encode');

var text = 'This is my secret phrase.';
var key = '@#_ourt12()';
var textEncoded = '';

test("Encoding the phrase with a key and dencoding the phrase with same key", () => {
    textEncoded = encode(text, key);
    expect(textEncoded).toBe("5+}6ûzáèóDG/(=5y0ôâ9.)/(p");
    expect(decode(textEncoded, key)).toBe(text);
});
