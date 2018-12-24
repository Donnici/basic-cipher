var caracters = require('./consts').caracters;

module.exports = function (text, codeword) {
	var	result = "", cipher, a, b;

	if (!text || !codeword) {
		return null;
	}

	for (var i = 0; i < text.length; i++) {
		if (caracters.indexOf(text[i]) === -1) {
			result += text[i];
		} else {
			cipher = codeword[i % codeword.length];
			a = caracters.indexOf(cipher);
			b = caracters.indexOf(text[i]);
			result += caracters[(a + b) % caracters.length];
		}
	}

	return result;
};