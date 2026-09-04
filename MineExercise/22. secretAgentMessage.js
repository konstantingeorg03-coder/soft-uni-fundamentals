function solve(arr){
    let message = arr.shift();

    let command = arr.shift();

    while(command !== 'Complete'){
        let tokens = command.split(':');
        
        let action = tokens[0];

        if(action === 'Change'){
            let oldPart = tokens[1];
            
            let newPart = tokens[2];

            message = message.replaceAll(oldPart, newPart);

            console.log(message);

        }else if(action === 'Cut'){
            let startIdx = Number(tokens[1]);

            let count = Number(tokens[2]);

            let first = message.substring(0, startIdx);

            let second = message.substring(startIdx + count);

            message = first + second;

            console.log(message);

        }else if(action === 'Move'){
            let count = Number(tokens[1]);

            let first = message.substring(0, count);

            let second = message.substring(count);

            message = second + first;

            console.log(message);

        }else if(action === 'Reverse'){
            let substr = tokens[1];

            if(message.includes(substr)){
                let index = message.indexOf(substr);

                let first = message.substring(0, index);

                let second = message.substring(index + substr.length);

                let part = message.substring(index, index + substr.length);

                part = part.split('').reverse().join('');

                message = first + second + part;

                console.log(message);

            }else{
                console.log('Substring not found!');
            }

        }else if(action === 'Check'){
            let substr = tokens[1];

            if(message.includes(substr)){
                console.log(`Message contains ${substr}.`);

            }else{
                console.log(`Message does not contain ${substr}.`);
            }
        }else if(action === 'Insert'){
            let idx = Number(tokens[1]);

            let text = tokens[2];

            let first = message.substring(0, idx);

            let second = message.substring(idx);

            message = first + text + second;

            console.log(message);

        }

        command = arr.shift();
    }

    console.log(`Final message: ${message}`);
}
solve([
    'AgentShadowMission',
    'Change:Shadow:Secret',
    'Insert:5:X',
    'Cut:5:1',
    'Move:5',
    'Check:Mission',
    'Reverse:Secret',
    'Check:Shadow',
    'Complete'
]);