function solve(arr) {
    let decryptPattern = /[star]/gi;

    let countMsg = Number(arr.shift());

    let attacked = [];
    let destroyed = [];

    for (let currentMsg = 1; currentMsg <= countMsg; currentMsg++) {
        let textMsg = arr.shift();

        let match = textMsg.match(decryptPattern);
        let key = match ? match.length : 0;

        let decryptMsg = '';

        for (let char of textMsg) {
            let charCode = char.charCodeAt(0);
            let decryptedCharCode = charCode - key;
            let decryptedChar = String.fromCharCode(decryptedCharCode);

            decryptMsg += decryptedChar;
        }

        let usedPattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;

        let planetMatch = decryptMsg.match(usedPattern);

        if (planetMatch) {
            let planet = planetMatch.groups.planet;
            let type = planetMatch.groups.type;

            if (type === 'A') {
                attacked.push(planet);
            } else {
                destroyed.push(planet);
            }
        }
    }

    attacked.sort((a, b) => a.localeCompare(b));
    destroyed.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach(p => console.log(`-> ${p}`));

    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.forEach(p => console.log(`-> ${p}`));
}
solve(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']);