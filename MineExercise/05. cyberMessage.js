function solve(arr){
    let message = arr.shift();

    let command = arr.shift();

    while(command !== 'Finish'){
        let tokens = command.split(' ');

        let action = tokens[0];

        if(action === 'Replace'){
            let currentChar = tokens[1];

            let newChar = tokens[2];

            message = message.replaceAll(currentChar, newChar);

            console.log(message);

        }else if(action === 'Cut'){
            let startIdx = Number(tokens[1]);

            let endIdx = Number(tokens[2]);

            if(startIdx >= 0 && endIdx >= 0 && endIdx < message.length){
                let first = message.substring(0, startIdx);

                let second = message.substring(endIdx + 1);

                message = first + second;

                console.log(message);
            }else{
                console.log('Invalid indices!');
            }

        }else if(action === 'Make'){
            let type = tokens[1];

            if(type === 'Upper'){
                message = message.toUpperCase();
            }else if(type === 'Lower'){
                message = message.toLowerCase();
            }

            console.log(message);
        }

        command = arr.shift();
    }
}
solve([
    'helloWorld123',
    'Replace l X',
    'Cut 2 5',
    'Make Upper',
    'Finish'
]);