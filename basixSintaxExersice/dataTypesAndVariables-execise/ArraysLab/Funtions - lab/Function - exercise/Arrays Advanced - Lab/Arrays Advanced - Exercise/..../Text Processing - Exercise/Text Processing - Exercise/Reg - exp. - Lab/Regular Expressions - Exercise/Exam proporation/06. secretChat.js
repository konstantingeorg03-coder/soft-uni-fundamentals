function solve(arr){
    let message = arr.shift();

    let command = arr.shift();

    while(command !== 'Reveal'){
        let tokens = command.split(':|:');

        let action = tokens[0];

        if(action === 'InsertSpace'){
            let index = Number(tokens[1]);

            message = message.slice(0, index) + ' ' + message.slice(index);

            console.log(message);
        }else if(action === 'Reverse'){
            let substring = tokens[1];
            if(message.includes(substring)){
                let index = message.indexOf(substring);

                message = message.slice(0, index) + message.slice(index + substring.length);

                substring = substring.split('').reverse().join('');

                message = message + substring;

                console.log(message);
            }else{
                console.log('error');
            }
        }else if(action === 'ChangeAll'){
            let substring = tokens[1];

            let replacement = tokens[2];

            message = message.split(substring).join(replacement);

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