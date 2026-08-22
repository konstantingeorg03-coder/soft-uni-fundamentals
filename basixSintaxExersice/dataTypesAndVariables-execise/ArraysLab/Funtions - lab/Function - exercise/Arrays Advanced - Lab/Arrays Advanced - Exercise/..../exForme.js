function solve(arr){
    let str = arr.shift();

    let command = arr.shift();

    while(command !== 'Done'){
        let tokens = command.split(' ');

        let action = tokens[0];

        if(action === 'TakeOdd'){
            let newStr = '';

            for(let i = 0; i < str.length; i++){
                if(i % 2 === 1){
                    newStr += str[i];
                }
            }

            str = newStr;

            console.log(str);

        }else if(action === 'Cut'){
            let idx = Number(tokens[1]);

            let length = Number(tokens[2]);

            let first = str.substring(0, idx);

            let second = str.substring(idx + length);

            str = first + second;

            console.log(str);

        }else if(action === 'Substitute'){
            let substr = tokens[1];

            let substitute = tokens[2];

            if(str.includes(substr)){
                str = str.replaceAll(substr, substitute);

                console.log(str);
            }else{
                console.log('Nothing to replace!');
            }
        }

        command = arr.shift();
    }

    console.log(`Your password is: ${str}`);
}
solve(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr', 
'TakeOdd',
'Cut 15 3',
'Substitute :: -',
'Substitute | ^',
'Done']);