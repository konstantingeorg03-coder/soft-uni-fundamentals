function solve(arr){
    let activationKey = arr.shift();

    let command = arr.shift();

    while(command !== 'Generate'){
        let tokens = command.split('>>>');

        let action = tokens[0];

        if(action === 'Contains'){
            let substr = tokens[1];

            if(activationKey.includes(substr)){
                console.log(`${activationKey} contains ${substr}`);
            }else{
                console.log('Substring not found!');
            }
        }else if(action === 'Flip'){
            let type = tokens[1];

            let startIdx = Number(tokens[2]);

            let endIdx = Number(tokens[3]);

            let part = activationKey.slice(startIdx, endIdx);

            if(type === 'Upper'){
                part = part.toUpperCase();
            }else if(type === 'Lower'){
                part = part.toLowerCase();
            }

            let startPart = activationKey.slice(0, startIdx); 
            let endPart = activationKey.slice(endIdx);

            activationKey = startPart + part + endPart;

            console.log(activationKey);
        }else if(action === 'Slice'){
            let startIdx = Number(tokens[1]);

            let endIdx = Number(tokens[2]);

            let firstPart = activationKey.slice(0, startIdx);

            let secondPart = activationKey.slice(endIdx);

            activationKey = firstPart + secondPart;

            console.log(activationKey);
        }

        command = arr.shift();
    }

    console.log(`Your activation key is: ${activationKey}`);
}
solve(['abcdefghijklmnopqrstuvwxyz',
'Slice>>>2>>>6',
'Flip>>>Upper>>>3>>>14',
'Flip>>>Lower>>>5>>>7',
'Contains>>>def',
'Contains>>>deF',
'Generate']);