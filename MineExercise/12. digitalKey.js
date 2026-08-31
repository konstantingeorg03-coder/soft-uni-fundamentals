function solve(arr){
    let key = arr.shift();

    let command = arr.shift();

    while(command !== 'Complete'){
        let tokens = command.split('|');

        let action = tokens[0];

        if(action === 'Contains'){
            let substr = tokens[1];

            if(key.includes(substr)){
                console.log(`${key} contains ${substr}`);
            }else{
                console.log('Substring not found!');
            }

        }else if(action === 'Replace'){
            let current = tokens[1];

            let newValue = tokens[2];

            key = key.replaceAll(current, newValue);

            console.log(key);

        }else if(action === 'Cut'){
            let startIdx = Number(tokens[1]);

            let length = Number(tokens[2]);

            let first = key.substring(0, startIdx);

            let second = key.substring(startIdx + length);

            key = first + second;

            console.log(key);

        }else if(action === 'Insert'){
            let idx = Number(tokens[1]);

            let value = tokens[2];

            let first = key.substring(0, idx);

            let second = key.substring(idx);

            key = first + value + second;

            console.log(key);

        }else if(action === 'Reverse'){
            let substr = tokens[1];

            if(key.includes(substr)){
                let index = key.indexOf(substr);

                let first = key.substring(0, index);

                let second = key.substring(index + substr.length);

                key = first + second;

                let revSubstr = substr.split('').reverse().join('');

                key = first + second + revSubstr;

                console.log(key);
            }else{
                console.log('Substring not found!');
            }
        }

        command = arr.shift();
    }

    console.log(`Your digital key is: ${key}`);
}
solve([
    'ab12cd34ab',
    'Contains|cd',
    'Replace|ab|XY',
    'Insert|4|ZZ',
    'Cut|2|3',
    'Reverse|34',
    'Contains|AB',
    'Complete'
]);