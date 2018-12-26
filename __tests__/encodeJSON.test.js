const encodeJSON = require('../lib/encode-json');

test("Encode myJSON with codeword 'Hello Word!' to equal `7\"4páô\"I\"W)Pwát6àWó9h#Yi4á 4Ũ6rj%\";`", () => {
    var myJSON = {
        text: 'This is a secret message'
    };
    expect(encodeJSON(myJSON, 'Hello Word!')).toBe("7\"4páô\"I\"W)Pwát6àWó9h#Yi4á 4Ũ6rj%\";");
});