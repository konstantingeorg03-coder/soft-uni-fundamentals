function solve(arr){
    let activityKey = arr.shift();

    let command = arr.shift();

    while(command !== 'Generate'){
        let tokens = command.split('>>>');

        let action = tokens[0];

        if(action === 'Contains'){
            let substr = tokens[1];

            if(activityKey.includes(substr)){
                console.log(`${activityKey} contains ${substr}`);
            }else{
                console.log('Substring not found!');
            }
        }else if(action === 'Flip'){
            let type = tokens[1];

            let startIdx = Number(tokens[2]);

            let endIdx = Number(tokens[3]);

            let part = activityKey.slice(startIdx, endIdx);

            if(type === 'Upper'){
                part = part.toUpperCase();

            }else if(type === 'Lower'){
                part = part.toLowerCase();
            }

            let firstPart = activityKey.slice(0, startIdx);

            let secondPart = activityKey.slice(endIdx);

            activityKey = firstPart + part + secondPart;

            console.log(activityKey);
        }else if(action === 'Slice'){
            let startIdx = Number(tokens[1]);

            let endIdx = Number(tokens[2]);

            let firstPart = activityKey.slice(0, startIdx);

            let secondPart = activityKey.slice(endIdx);

            activityKey = firstPart + secondPart;

            console.log(activityKey);
        }

        command = arr.shift();
    }

    console.log(`Your activation key is: ${activityKey}`);
}
solve(['abcdefghijklmnopqrstuvwxyz',
'Slice>>>2>>>6',
'Flip>>>Upper>>>3>>>14',
'Flip>>>Lower>>>5>>>7',
'Contains>>>def',
'Contains>>>deF',
'Generate'])