function solve(arr){
    let key = arr.shift();

    let command = arr.shift();

    while(command !== 'Generate'){
        let tokens = command.split('|');

        let action = tokens[0];

        if(action === 'Contains'){
            let substr = tokens[1];

            if(key.includes(substr)){
                console.log(`${key} contains ${substr}`);
            }else{
                console.log('Substring not found!');
            }
        }else if(action === 'Flip'){
            let type = tokens[1];

            let startIdx = Number(tokens[2]);

            let endIdx = Number(tokens[3]);

            if(type === 'Upper'){
                let part = key.substring(startIdx, endIdx);

                part = part.toUpperCase();

                let first = key.substring(0, startIdx);

                let second = key.substring(endIdx);

                key = first + part + second;

            }else if(type === 'Lower'){
                let part = key.substring(startIdx, endIdx);

                part = part.toLowerCase();

                let first = key.substring(0, startIdx);

                let second = key.substring(endIdx);

                key = first + part + second;

                console.log(key);
            }

            console.log(key);

        }else if(action === 'Slice'){
            let startIdx = Number(tokens[1]);

            let endIdx = Number(tokens[2]);

            let first = key.substring(0, startIdx);

            let second = key.substring(endIdx);

            key = first + second;

            console.log(key);
        }

        command = arr.shift();
    }

    console.log(`Your access key is: ${key}`);
}
solve([
    'MySecretKey123',
    'Contains|Secret',
    'Flip|Upper|2|8',
    'Slice|8|11',
    'Contains|123',
    'Generate'
]);