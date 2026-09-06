function solve(arr){
    let countTickets = Number(arr.shift());

    let pattern = /^@@(?<artist>[A-Z][a-z]{2,})##(?<zone>[A-D]):(?<seat>[1-9][0-9])!!$/;

    let sum = 0;

    for(let i = 0; i < countTickets; i++){
        let match = arr[i].match(pattern);

        if(match){
            let artist = match.groups.artist;

            let zone = match.groups.zone;

            let seat = match.groups.seat;

            console.log(`Artist: ${artist}, Zone: ${zone}, Seat: ${seat}`);

            sum++;

        }else{
            console.log('Invalid ticket!');
        }
    }

    console.log(`Valid tickets: ${sum}`);
}
solve([
    '7',
    '@@Metallica##A:25!!',
    '@@Queen##C:88!!',
    '@@AB##B:45!!',
    '@@Muse##B:10!!',
    '@@Adele##D:99!!',
    '@@queen##A:30!!',
    '@@Coldplay##X:55!!'
]);