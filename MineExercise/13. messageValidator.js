function solve(arr){
    let countMessages = Number(arr.shift());

    let pattern = /^#(?<name>[A-Za-z]{3,})@(?<level>\d{1,2}):(?<code>\d{4})!$/;

    for(let i = 0; i < countMessages; i++){
        let match = arr[i].match(pattern);

        if(match){
            let name = match.groups.name;

            let level = Number(match.groups.level);

            let code = match.groups.code;

            let sum = 0;

            if(level >= 0 && level <= 99){
                for(let num of code){
                    sum += Number(num);
                }
            }

            console.log(`Name: ${name}, Level: ${level}, Code sum: ${sum}`);
        }else{
            console.log('Invalid message!');
        }
    }
}
solve([
    '6',
    '#Alpha@25:1234!',
    '#Test@7:9876!',
    '#Hi@20:1234!',
    '#Secret@99:5555!',
    '#Hero@120:4321!',
    '#Player@42:10A5!'
]);