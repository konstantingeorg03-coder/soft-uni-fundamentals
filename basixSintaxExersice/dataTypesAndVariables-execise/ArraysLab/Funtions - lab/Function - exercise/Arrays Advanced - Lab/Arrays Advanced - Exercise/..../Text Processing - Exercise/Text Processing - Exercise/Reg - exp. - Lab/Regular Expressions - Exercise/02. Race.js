function race(arr){
    let competitors = arr.shift().split(', ');

    let competitorsResults = {};

    for(let competitor of competitors){
        competitorsResults[competitor] = 0;
    }

    let command = arr.shift();

    let letterPattern = /[A-Za-z]/g;
    let digitPattern = /\d/g;

    while(command !== 'end of race'){
        let letterMatches = command.match(letterPattern);
        let participant = letterMatches.join('');

        let digitsMatches = command.match(digitPattern);
        let distance = digitsMatches.map(Number).reduce((acc, val) => acc + val);

        if(participant in competitorsResults){
            competitorsResults[participant] += distance;
        }

        command = arr.shift();
    }

    let entries = Object.entries(competitorsResults).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${entries[0][0]}`);
    console.log(`2nd place: ${entries[1][0]}`);
    console.log(`3rd place: ${entries[2][0]}`);

}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);