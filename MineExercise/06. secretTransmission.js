function solve(arr){
    let message = arr.shift();

    let command = arr.shift();

    while(command !== 'Decode'){
        let tokens = command.split('|');

        let action = tokens[0];

        if(action === 'Move'){
            let numOfLetters = Number(tokens[1]);

            let first = message.substring(0, numOfLetters);

            message = message.substring(numOfLetters);

            message = message + first;

        }else if(action === 'Insert'){
            let idx = Number(tokens[1]);

            let value = tokens[2];

            let first = message.substring(0, idx);

            let second = message.substring(idx);

            message = first + value + second;

        }else if(action === 'ChangeAll'){
            let substr = tokens[1];

            let replacement = tokens[2];

            message = message.replaceAll(substr, replacement);
        }

        command = arr.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}
solve([
    'helloWorld',
    'Move|3',
    'Insert|4|XYZ',
    'ChangeAll|o|0',
    'Decode'
]);