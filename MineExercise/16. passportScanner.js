function solve(arr){
    let passportsCount = Number(arr.shift());

    let pattern = /^(?<species>[A-Za-z]{3,})#(?<planet>[A-Z][a-z]{2,})#(?<id>\d{5})$/;

    for(let i = 0; i < passportsCount; i++){
        let match = arr[i].match(pattern);

        if(match){
            let species = match.groups.species;

            let planet = match.groups.planet;

            let id = match.groups.id;

            let sum = 0;

            for(let num of id){
                sum += Number(num);
            }

            console.log(`Species: ${species}, Planet: ${planet}, ID sum: ${sum}`);

        }else{
            console.log('Invalid passport!');
        }
    }
}
solve([
    '7',
    'Martian#Mars#12345',
    'Zorgon#Venus#98765',
    'ET#Earth#12345',
    'Alien#earth#55555',
    'Robot#Saturn#10101',
    'Creature#Jupiter#99999',
    'Ghost#Moon#12A45'
]);