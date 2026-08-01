function solve(arr){
    let str = arr.shift();

    let command = arr.shift();

    while(command !== 'Done'){
        let tokens = command.split(' ');

        let action = tokens[0];

        if(action === 'Change'){
            let char = tokens[1];

            let replacement = tokens[2];

            str = str.split(char).join(replacement);

            console.log(str);
        }else if(action === 'Includes'){
            let substr = tokens[1];

            if(str.includes(substr)){
                console.log('True');
            }else{
                console.log('False');
            }
        }else if(action === 'End'){
            let substr = tokens[1];

            if(str.endsWith(substr)){
                console.log('True');
            }else{
                console.log('False');
            }
        }else if(action === 'Uppercase'){
            str = str.toUpperCase();

            console.log(str);
        }else if(action === 'FindIndex'){
            let char = tokens[1];

            let index = str.indexOf(char);

            console.log(index);
        }else if(action === 'Cut'){
            let startIdx = Number(tokens[1]);

            let count = Number(tokens[2]);

            str = str.slice(startIdx, startIdx + count);

            console.log(str);
        }

        command = arr.shift();
    }
}
solve(['//Th1s 1s my str1ng!//', 'Change 1 i', 'Includes string', 'End my', 'Uppercase', 'FindIndex I', 'Cut 5 5', 'Done']);