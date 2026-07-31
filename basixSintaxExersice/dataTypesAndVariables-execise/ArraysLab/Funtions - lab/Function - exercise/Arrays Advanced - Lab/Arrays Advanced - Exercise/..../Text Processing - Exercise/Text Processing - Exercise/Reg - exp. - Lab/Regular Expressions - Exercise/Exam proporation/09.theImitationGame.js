function solve(arr){
    let message = arr.shift();

    let command = arr.shift();

    while(command !== 'Decode'){
        let tokens = command.split('|');

        let action = tokens[0];

        if(action === 'Move'){
            let count = Number(tokens[1]);

            let firstPart = message.substring(0, count);

            let secondPart = message.substring(count);

            message = secondPart + firstPart;
        }else if(action === 'Insert'){
            let index = Number(tokens[1]);

            let value = tokens[2];

            let part = message.substring(0, index);

            let secondPart = message.substring(index);

            message = part + value + secondPart;

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