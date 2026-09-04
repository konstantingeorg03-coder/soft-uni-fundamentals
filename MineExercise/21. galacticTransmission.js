function solve(arr){
    let count = Number(arr.shift());

    let pattern = /^@(?<planet>[A-Z][a-z]{2,})#(?<code>\d{4})#(?<power>[1-9]\d)@$/;

    for(let galaxy = 0; galaxy < count; galaxy++){
        let planetChars = arr[galaxy];

        let match = planetChars.match(pattern);

        if(match){
            let planet = match.groups.planet;

            let code = match.groups.code;

            let power = match.groups.power;

            console.log(`Transmission from ${planet}: code ${code}, power ${power}.`);
        }else{
            console.log(`Invalid transmission!`);
        }
    }
}
solve([
    '6',
    '@Mars#4821#75@',
    '@Europa#1234#90@',
    '@Ve#5555#40@',
    'Titan#7777#65@',
    '@Jupiter#9087#55@',
    '@Neptune#3333#88@'
]);