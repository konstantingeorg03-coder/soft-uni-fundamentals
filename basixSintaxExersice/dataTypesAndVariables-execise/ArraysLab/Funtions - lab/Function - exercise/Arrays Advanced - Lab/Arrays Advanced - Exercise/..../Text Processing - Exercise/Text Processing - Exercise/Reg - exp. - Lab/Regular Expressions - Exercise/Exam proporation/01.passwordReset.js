function solve(arr){
    let password = arr.shift();
    let command = arr.shift();

    while(command !== 'Done'){
        let tokens = command.split(' ');
        let action = tokens.shift();
        if(command === 'TakeOdd'){
            let newPass = '';

            for(let i = 1; i < password.length; i += 2){
                newPass += password[i];
            }

            password = newPass;
            console.log(password);

        }else if(action.includes('Cut')){
            let [idx, length] = tokens.map(Number);

            let substr = password.substring(idx, idx + length);

            password = password.replace(substr, '');

            console.log(password);
            
        }else if(action === 'Substitute'){
            let [substr, substitude] = tokens;

            if(password.includes(substr)){
                password = password.split(substr).join(substitude);
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