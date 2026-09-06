function solve(arr){
    let gameName = arr.shift();

    let command = arr.shift();

    while(command !== 'Play'){
        let tokens = command.split(':');

        let action = tokens[0];

        if(action === 'Replace'){
            let oldPart = tokens[1];

            let newPart = tokens[2];

            gameName = gameName.replaceAll(oldPart, newPart);

            console.log(gameName);

        }else if(action === 'Insert'){
            let idx = Number(tokens[1]);

            let text = tokens[2];

            if(idx >= 0 && idx <= gameName.length){
                let first = gameName.substring(0, idx);

                let second = gameName.substring(idx);

                gameName = first + text + second;

                console.log(gameName);

            }else{
                console.log('Invalid index!');
            }

        }else if(action === 'Remove'){
            let substr = tokens[1];

            if(gameName.includes(substr)){
                let index = gameName.indexOf(substr);

                let first = gameName.substring(0, index);

                let second = gameName.substring(index + substr.length);

                gameName = first + second;

                console.log(gameName);

            }else{
                console.log('Substring not found!');
            }

        }else if(action === 'Upper'){
            let startIdx = Number(tokens[1]);

            let endIdx = Number(tokens[2]);

            let first = gameName.substring(0, startIdx);

            let second = gameName.substring(startIdx, endIdx + 1);

            let third = gameName.substring(endIdx + 1);

            second = second.toUpperCase();

            gameName = first + second + third;

            console.log(gameName);

        }else if(action === 'Reverse'){
            let substr = tokens[1];

            if(gameName.includes(substr)){
                let index = gameName.indexOf(substr);

                let first = gameName.substring(0, index);

                let second = gameName.substring(index, index + substr.length);

                let third = gameName.substring(index + substr.length);

                second = second.split('').reverse().join('');

                gameName = first + third + second;

                console.log(gameName);
            }else{
                console.log('Substring not found!');

            }

        }else if(action === 'Check'){
            let substr = tokens[1];

            if(gameName.includes(substr)){
                console.log(`Game title contains ${substr}.`);

            }else{
                console.log(`Game title does not contain ${substr}.`);

            }

        }else if(action === 'Cut'){
            let startIdx = Number(tokens[1]);

            let count = Number(tokens[2]);

            let first = gameName.substring(0, startIdx);

            let second = gameName.substring(startIdx + count);

            gameName = first + second;

            console.log(gameName);

        }

        command = arr.shift();
    }

    console.log(`Final game title: ${gameName}`);
}
solve([
    'ShadowLegends',
    'Replace:Shadow:Dark',
    'Insert:4:X',
    'Check:Legends',
    'Upper:5:7',
    'Remove:X',
    'Reverse:Dark',
    'Insert:0:The',
    'Cut:3:2',
    'Check:Shadow',
    'Play'
]);