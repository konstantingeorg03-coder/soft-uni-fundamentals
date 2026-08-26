function solve(arr){
    let code = arr.shift();

    let command = arr.shift();

    while(command !== 'Decode'){
        let tokens = command.split('|');

        let action = tokens[0];

        if(action === 'Insert'){
            let idx = Number(tokens[1]);

            let text = tokens[2];

            let first = code.substring(0, idx);

            let second = code.substring(idx);

            code = first + text + second;

            console.log(code);

        }else if(action === 'Remove'){
            let startIdx = Number(tokens[1]);

            let count = Number(tokens[2]);

            let first = code.substring(0, startIdx);

            let second = code.substring(startIdx + count);

            code = first + second;

            console.log(code);

        }else if(action === 'Reverse'){
            let substr = tokens[1];

            if(code.includes(substr)){
                let index = code.indexOf(substr);

                let first = code.substring(0, index);

                let second = code.substring(index + substr.length);

                code = first + second;

                substr = substr.split('').reverse().join('');

                code = first + second + substr;

                console.log(code);
            }else{
                console.log('Error!');
            }

        }else if(action === 'Replace'){
            let substr = Number(tokens[1]);

            let replacement = tokens[2];

            if(code.includes(substr)){
                code = code.replaceAll(substr, replacement);

                console.log(code);
            }else{
                console.log('Nothing to replace!');
            }
        }

        command = arr.shift();
    }

    console.log(`Your secret code is: ${code}`);
}
solve([
    'ab12cd34',
    'Insert|2|XYZ',
    'Replace|12|AA',
    'Remove|5|2',
    'Reverse|cd',
    'Decode'
]);