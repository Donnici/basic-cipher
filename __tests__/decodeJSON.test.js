const decodeJSON = require('../lib/decode-json');

test("Decode `7\"4páô\"I\"W)Pwát6àWó9h#Yi4á 4Ũ6rj%\";` with codeword 'Hello Word!' to equal {'text':'This is a secret message'};", () => {
    expect(decodeJSON("7\"4páô\"I\"W)Pwát6àWó9h#Yi4á 4Ũ6rj%\";", 'Hello Word!')).toMatchObject({"text":"This is a secret message"});
});