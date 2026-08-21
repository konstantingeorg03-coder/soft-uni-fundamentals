function solve(arr){
    let message = arr.shift();

    let command = arr.shift();

    while(command !== 'Reveal'){
        let tokens = command.split(':|:');

        let action = tokens[0];

        if(action === 'InsertSpace'){
            let idx = Number(tokens[1]);

            let first = message.substring(0, idx);

            let second = message.substring(idx);

            message = first + ' ' + second;

            console.log(message);

        }else if(action === 'Reverse'){
            let substr = tokens[1];

            if(message.includes(substr)){
                let index = message.indexOf(substr);

                let first = message.substring(0, index);

                let second = message.substring(index + substr.length);
            
                message = first + second;

                substr = substr.split('').reverse().join('');

                message += substr;
            }

            console.log(message);

        }else if(action === 'ChangeAll'){
            let substr = tokens[1];

            let replacement = tokens[2];

            message = message.replaceAll(substr, replacement);

            console.log(message);
        }

        command = arr.shift();
    }

    console.log(`You have a new text message: ${message}`);
}
solve(['heVVodar!gniV',
'ChangeAll:|:V:|:l',
'Reverse:|:!gnil',
'InsertSpace:|:5',
'Reveal']);