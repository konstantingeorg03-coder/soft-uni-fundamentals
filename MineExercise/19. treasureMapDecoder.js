function solve(arr){
    let treasureMap = arr.shift();

    let command = arr.shift();

    while(command !== 'Sail'){
        let tokens = command.split(':');

        let action = tokens[0];

        if(action === 'Insert'){
            let idx = Number(tokens[1]);

            let text = tokens[2];

            let first = treasureMap.substring(0, idx);

            let second = treasureMap.substring(idx);
            
            treasureMap = first + text + second;

            console.log(treasureMap);

        }else if(action === 'Remove'){
            let startIndex = Number(tokens[1]);

            let count = Number(tokens[2]);

            let first = treasureMap.substring(0, startIndex);

            let second = treasureMap.substring(startIndex + count);

            treasureMap = first + second;

            console.log(treasureMap);

        }else if(action === 'Replace'){
            let oldPart = tokens[1];

            let newPart = tokens[2];

            treasureMap = treasureMap.replaceAll(oldPart, newPart);

            console.log(treasureMap);

        }else if(action === 'Move'){
            let count = Number(tokens[1]);

            let part = treasureMap.substring(0, count);

            let second = treasureMap.substring(count);

            treasureMap = second + part;

            console.log(treasureMap);

        }else if(action === 'Check'){
            let substr = tokens[1];

            if(treasureMap.includes(substr)){
                console.log(`Map contains ${substr}.`);
            }else{
                console.log('Substring not found!');
            }
        }

        command = arr.shift();
    }

    console.log(`Treasure map: ${treasureMap}`);
}
solve([
    'BlackPearlIsland',
    'Insert:5:Sea',
    'Replace:Island:Cove',
    'Move:3',
    'Remove:4:2',
    'Check:Pearl',
    'Sail'
]);