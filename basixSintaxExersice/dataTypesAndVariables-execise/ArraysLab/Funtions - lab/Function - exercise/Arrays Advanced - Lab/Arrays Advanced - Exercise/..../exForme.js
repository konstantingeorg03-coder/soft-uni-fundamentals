function solve(arr){
    let phones = arr.shift().split(', ');
    
    let command = arr.shift();

    while(command !== 'End'){
        let tokens = command.split(' - ');

        let action = tokens[0];

        if(action === 'Add'){
            let phone = tokens[1];

            if(!phones.includes(phone)){
                phones.push(phone);
            }
        }else if(action === 'Remove'){
            let phone = tokens[1];

            if(phones.includes(phone)){
                let index = phones.indexOf(phone);

                phones.splice(index, 1);
            }
        }else if(action === 'Bonus phone'){
            let phoneTokens = tokens[1].split(':');

            let oldPhone = phoneTokens[0];

            let newPhone = phoneTokens[1];

            if(phones.includes(oldPhone)){
                let index = phones.indexOf(oldPhone);

                phones.splice(index + 1, 0, newPhone);
            }
        }else if(action === 'Last'){
            let phone = tokens[1];
            
            if(phones.includes(phone)){
                let index = phones.indexOf(phone);

                phones.splice(index, 1);

                phones.push(phone);
            }
        }

        command = arr.shift();
    }

    console.log(`${phones.join(', ')}`);
}
solve(['SamsungA50, MotorolaG5, IphoneSE',
'Add - Iphone10',
'Remove - IphoneSE',
'End']);