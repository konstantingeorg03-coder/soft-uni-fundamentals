function starEnigma(arr){
    let countMsg = Number(arr.shift());

    let starPattern = /[star]/gi;

    let decryptedMsgs = [];

    for(let currentMsg = 1; currentMsg <= countMsg; currentMsg++){
        let msgText = arr.shift();

        let starMatches = msgText.match(starPattern);
        let starCount = starMatches ? starMatches.length : 0;
        let decryptedMsg = '';

        for(let letter of msgText){
            let ascii = letter.charCodeAt();
            let newAscii = ascii - starCount;
            let newLetter = String.fromCharCode(newAscii);
            decryptedMsg += newLetter;
        }

        decryptedMsgs.push(decryptedMsg);
    }

    let planetsPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<typeAttack>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;

    let attackPlanets = [];
    let destroyedplanets = [];

    for(let msg of decryptedMsgs){
        let match = msg.match(planetsPattern);

        if(match){
            let name = match.groups.name;
            let typeAttack = match.groups.typeAttack;

            if(typeAttack === 'A'){
                attackPlanets.push(name);
            }else{
                destroyedplanets.push(name);
            }
        }
    }

    destroyedplanets.sort((a, b) => a.localeCompare(b));
    attackPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackPlanets.length}`);
    attackPlanets.forEach(p => console.log(`-> ${p}`));

    console.log(`Destroyed planets: ${destroyedplanets.length}`);
    destroyedplanets.forEach(p => console.log(`-> ${p}`));
}
starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']);
