var caracters = require('./consts').caracters;

module.exports = function (text, codeword) {
	var	result = "", cipher, a, b;
	newText = JSON.stringify(text);

	if (!newText || !codeword) {
		return null;
	}

	for (var i = 0; i < newText.length; i++) {
		if (caracters.indexOf(newText[i]) === -1) {
			result += newText[i];
		} else {
			cipher = codeword[i % codeword.length];
			a = caracters.indexOf(cipher);
			b = caracters.indexOf(newText[i]);
			result += caracters[(a + b) % caracters.length];
		}
	}

	return result;
};