function solve(arr){
    let message = arr.shift();

    let command = arr.shift();

    while(command !== 'Decode'){
        let tokens = command.split('|');

        let action = tokens[0];

        if(action === 'Move'){
            let numberOfLetters = Number(tokens[1]);

            let firstPart = message.slice(0, numberOfLetters);

            let secondPart = message.slice(numberOfLetters);

            let result = secondPart + firstPart;

            message = result;

        }else if(action === 'Insert'){
            let index = Number(tokens[1]);

            let value = tokens[2];

            let firstPart = message.slice(0, index);

            let secondPart = message.slice(index);

            message = firstPart + value + secondPart;

        }else if(action === 'ChangeAll'){
            let substr = tokens[1];

            let replacement = tokens[2];

            message = message.split(substr).join(replacement);
        }

        command = arr.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}
solve(['zzHe',
'ChangeAll|z|l',
'Insert|2|o',
'Move|3',
'Decode']);