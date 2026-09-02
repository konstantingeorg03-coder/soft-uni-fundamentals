function solve(arr){
    let code = arr.shift();

    let command = arr.shift();

    while(command !== 'Unlock'){
        let tokens = command.split(':');

        let action = tokens[0];

        if(action === 'Check'){
            let substr = tokens[1];

            if(code.includes(substr)){
                console.log(`Code contains ${substr}.`);
            }else{
                console.log('Substring not found!');
            }

        }else if(action === 'Change'){
            let old = tokens[1];

            let newPart = tokens[2];

            code = code.replaceAll(old, newPart);

            console.log(code);

        }else if(action === 'Remove'){
            let startIdx = Number(tokens[1]);

            let count = Number(tokens[2]);

            let first = code.substring(0, startIdx);

            let second = code.substring(startIdx + count);

            code = first + second;

            console.log(code);

        }else if(action === 'Move'){
            let count = Number(tokens[1]);

            let first = code.substring(0, count);

            let second = code.substring(count);

            code = second + first;

            console.log(code);

        }else if(action === 'Add'){
            let idx = Number(tokens[1]);

            let value = tokens[2];

            let first = code.substring(0, idx);

            let second = code.substring(idx);

            code = first + value + second;

            console.log(code);

        }else if(action === 'Reverse'){
            let startIdx = Number(tokens[1]);

            let count = Number(tokens[2]);

            let first = code.substring(0, startIdx);

            let middle = code.substring(startIdx, startIdx + count);

            let second = code.substring(startIdx + count);

            middle = middle.split('').reverse().join('');

            code = first + middle + second; 
        }

        command = arr.shift();
    }

    console.log(`Your access code is: ${code}`);
}
solve([
    'A7bcD92xy',
    'Check:bcD',
    'Change:92:ZZ',
    'Add:2:KEY',
    'Remove:5:2',
    'Move:3',
    'Reverse:1:4',
    'Check:999',
    'Unlock'
]);