function solve(arr){
    let count = Number(arr.shift());

    let pattern = /^@@(?<movie>[A-Z][a-z]{2,})##(?<year>\d{4})!!(?<rating>[1-9][0-9])%%$/;

    let sum = 0;
    
    for(let i = 0; i < count; i++){
        let match = arr[i].match(pattern);

        if(match){
            let movie = match.groups.movie;

            let year = match.groups.year;

            let rating = match.groups.rating;

            console.log(`Movie: ${movie}`);
            console.log(`Year: ${year}`);
            console.log(`Rating: ${rating}`);

            sum++;
        }
    }

    console.log(`Valid movies: ${sum}`);
}
solve([
    '6',
    '@@Inception##2010!!95%%',
    '@@Avatar##2009!!88%%',
    '@@Up##2009!!91%%',
    '@@Titanic##1997!!97%%',
    '@@Matrix##1999!!9%%',
    '@@Gladiator##2000!!92%%'
]);