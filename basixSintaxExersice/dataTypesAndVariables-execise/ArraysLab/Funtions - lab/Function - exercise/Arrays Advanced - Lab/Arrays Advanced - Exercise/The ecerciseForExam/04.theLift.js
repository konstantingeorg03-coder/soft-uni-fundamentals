function lift(arr) {
    let people = Number(arr.shift());
    let wagon = arr.shift().split(' ').map(Number);

    for (let i = 0; i < wagon.length; i++) {
        let currentWagon = wagon[i];

        while (currentWagon < 4 && people > 0) {
            currentWagon++;
            people--;
        }

        wagon[i] = currentWagon;
    }

    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(wagon.join(' '));
    } else {
        let hasEmptySpots = false;

        for (let i = 0; i < wagon.length; i++) {
            if (wagon[i] < 4) {
                hasEmptySpots = true;
                break;
            }
        }

        if (hasEmptySpots) {
            console.log('The lift has empty spots!');
        }

        console.log(wagon.join(' '));
    }
}
lift(["15", 
"0 0 0 0"]);