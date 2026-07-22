function solve(arr){
    let password = arr.shift();

    let command = arr.shift();

    while(command !== 'Done'){
        let tokens = command.split(' ');

        let action = tokens.shift();

        if(action === 'TakeOdd'){
            let newPass = '';
            for(let i = 1; i < password.length; i += 2){
                newPass += password[i];
            }

            password = newPass;

            console.log(password);
        }else if(action === 'Cut'){
            let [idx, length] = tokens.map(Number);

            let substr = password.substring(idx, idx + length);

            password = password.replace(substr, '');

            console.log(password);
        }else if(action === 'Substitute'){
            let [substring, substitude] = tokens;

            if(password.includes(substring)){
                password = password.split(substring).join(substitude);
                console.log(password);
            }else{
                console.log('Nothing to replace!');
            }
        }

        command = arr.shift();
    }

    console.log(`Your password is: ${password}`);
}
solve(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr', 
'TakeOdd',
'Cut 15 3',
'Substitute :: -',
'Substitute | ^',
'Done']);