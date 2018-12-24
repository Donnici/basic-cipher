# Basic Cipher (0.0.1)
npm package for encoding and decoding text containing alphanumeric charactersnpm package for encoding and decoding text containing alphanumeric characters.


# Example

## Encode
```javascript
var Cipher = require('basic-cipher');

var key = 'Hello Word!';

var mySecretText = Cipher.encode('This is a secret message', key);

console.log(mySecretText);
// '*****encode message*****'

```

## Decode
```javascript
var Cipher = require('basic-cipher');

var key = 'Hello Word!';

var myText = Cipher.decode('*****encode message*****', key);

console.log(myText);
// 'This is a secret message'
```