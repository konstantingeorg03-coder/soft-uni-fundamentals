function solve(arr) {
    let waitingPeople = Number(arr.shift());
    let wagons = arr.shift().split(' ').map(Number);

    for (let i = 0; i < wagons.length; i++) {
        let currentWagon = wagons[i];
        let freeSpaces = 4 - currentWagon;

        if (waitingPeople > freeSpaces) {
            wagons[i] = 4;
            waitingPeople -= freeSpaces;
        } else {
            wagons[i] += waitingPeople;
            waitingPeople = 0;
            break;
        }
    }

    let hasEmptySpots = false;

    for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] < 4) {
            hasEmptySpots = true;
            break;
        }
    }

    if (waitingPeople > 0) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
    } else if (hasEmptySpots) {
        console.log('The lift has empty spots!');
    }

    console.log(wagons.join(' '));
}
solve(['15',
'0 0 0 0']);