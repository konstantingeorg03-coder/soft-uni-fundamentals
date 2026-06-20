function phoneShop(arr){
    let phones = arr.shift().split(', ');

    for(let command of arr){
        if(command === 'End'){
            break;
        }

        let [action, sellPhone] = command.split(' - ');

        if(action === 'Add'){

            if(!phones.includes(sellPhone)){
                phones.push(sellPhone);
            }

        }else if(action === 'Remove'){

            if(phones.includes(sellPhone)){
                let index = phones.indexOf(sellPhone);
                phones.splice(index, 1);
            }
        }else if(action === 'Bonus phone'){
            let [oldPhone, newPhone] = sellPhone.split(':');

            if(phones.includes(oldPhone)){
                let index = phones.indexOf(oldPhone);
                phones.splice(index + 1, 0, newPhone);

            }

        }else if(action === 'Last'){

            if(phones.includes(sellPhone)){
                let index = phones.indexOf(sellPhone);
                phones.splice(index, 1);
                phones.push(sellPhone);
            }

        }
    }

    console.log(phones.join(', '));
}
phoneShop(['SamsungA50, MotorolaG5, IphoneSE',
'Add - Iphone10',
'Remove - IphoneSE',
'End']);