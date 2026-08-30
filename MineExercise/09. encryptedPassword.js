function solve(arr){
    let password = arr.shift();

    let command = arr.shift();

    while(command !== 'Done'){
        let tokens = command.split('|');

        let action = tokens[0];

        if(action === 'Swap'){
            let firstChar = tokens[1];

            let secondChar = tokens[2];

            password = password.replaceAll(firstChar, secondChar);

            console.log(password);

        }else if(action === 'Insert'){
            let idx = Number(tokens[1]);

            let value = tokens[2];

            let first = password.substring(0, idx);

            let second = password.substring(idx);

            password = first + value + second;

            console.log(password);

        }else if(action === 'Remove'){
            let substr = tokens[1];

            if(password.includes(substr)){
                let index = password.indexOff(substr);

                let first = password.substring(0, index);

                let second = password.substring(index + substr.length);

                password = first + second;

                console.log(password);
            }else{
                console.log('Substring not found!');
            }

        }else if(action === 'Reverse'){
            let startIdx = Number(tokens[1]);

            let endIdx = Number(tokens[2]);

            let reversePass = password.substring(startIdx, endIdx + 1);

            reversePass = reversePass.split('').reverse().join('');

            let first = password.substring(0, startIdx);

            let second = password.substring(endIdx + 1);

            password = first + reversePass + second;

            console.log(password);
        }

        command = arr.shift();
    }

    console.log(`Your password is: ${password}`);
}
solve([
    'secretCode123',
    'Swap|e|X',
    'Insert|6|ABC',
    'Remove|Code',
    'Reverse|2|7',
    'Done'
]);