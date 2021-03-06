# Basic Cipher
[![npm version](https://img.shields.io/npm/v/basic-cipher.svg?style=flat-square)](https://www.npmjs.com/package/basic-cipher)
[![install size](https://packagephobia.now.sh/badge?p=basic-cipher)](https://packagephobia.now.sh/result?p=basic-cipher)
[![npm downloads](https://img.shields.io/npm/dm/basic-cipher.svg?style=flat-square)](http://npm-stat.com/charts.html?package=basic-cipher)

npm package for encoding and decoding text containing alphanumeric characters


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

## Encode JSON
```javascript
var Cipher = require('basic-cipher');

var key = 'Hello Word!';
var myJSON = {
    text: 'This is a secret message'
};

var mySecretText = Cipher.encodeJSON(myJSON, key);

console.log(mySecretText);
// '*****encode message*****'

```

## Decode JSON
```javascript
var Cipher = require('basic-cipher');

var key = 'Hello Word!';

var myText = Cipher.decodeJSON('*****encode json*****', key);

console.log(myText);
// {'text':'This is a secret message'}
```