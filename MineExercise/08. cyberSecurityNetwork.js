function solve(arr){
    let count = Number(arr.shift());

    let securityStats = {};

    for(let survice = 0; survice < count; survice++){
        let tokens = arr.shift().split('|');

        let server = tokens[0];

        let securityLevel = Number(tokens[1]);

        let data = Number(tokens[2]);

        let users = Number(tokens[3]);

        securityStats[server] = {securityLevel, data, users};
    }

    let command = arr.shift();

    while(command !== 'Shutdown'){
        let tokens = command.split('=>');

        let action = tokens[0];

        if(action === 'Attack'){
            let server = tokens[1];

            let damage = Number(tokens[2]);

            let dataLost = Number(tokens[3]);

            securityStats[server].securityLevel -= damage;

            securityStats[server].data -= dataLost;

            console.log(`${server} was attacked! Security decreased by ${damage} and ${dataLost} data was lost.`);

            if(securityStats[server].securityLevel <= 0 || securityStats[server].data <= 0){
                console.log(`${server} has been destroyed!`);

                delete securityStats[server];
            }

        }else if(action === 'Upgrade'){
            let server = tokens[1];

            let amount = Number(tokens[2]);

            if(securityStats[server].securityLevel + amount > 100){
                let addedSecurity = 100 - securityStats[server].securityLevel;

                securityStats[server].securityLevel += addedSecurity;

                console.log(`${server} upgraded by ${addedSecurity}.`);
            }else{
                securityStats[server].securityLevel += amount;

                console.log(`${server} upgraded by ${addedSecurity}.`);
            }

        }else if(action === 'Transfer'){
            let server = tokens[1];

            let amount = Number(tokens[2]);

            if(securityStats[server].data < amount){
                console.log(`Not enough data on ${server}!`);
            }else{
                securityStats[server].data -= amount;

                console.log(`${server} transferred ${amount} data.`);
            }

        }else if(action === 'AddUsers'){
            let server = tokens[1];

            let count = Number(tokens[2]);

            if(securityStats[server].users + count > 50){
                let addedUsers = 50 - securityStats[server].users;

                securityStats[server].users += addedUsers;

                console.log(`${server} added ${addedUsers} users.`);
            }else{
                securityStats[server].users += count;

                console.log(`${server} added ${count} users.`);
            }

        }else if(action === 'Disconnect'){
            let server = tokens[1];

            let count = Number(tokens[2]);

            if(securityStats[server].users >= count){
                securityStats[server].users -= count;

                console.log(`${server} disconnected ${count} users.`);
            }else{
                console.log(`Not enough users on ${server}!`);
            }

        }else if(action === 'Restore'){
            let server = tokens[1];

            let amount = Number(tokens[2]);

            if(securityStats[server].data + amount > 1000){
                let addedData = 1000 - securityStats[server].data;

                securityStats[server].data += addedData;

                console.log(`${server} restored ${addedData} data.`);
            }else{
                securityStats[server].data += amount;

                console.log(`${server} restored ${amount} data.`);
            }
        }

        command = arr.shift();
    }

    let serversCount = Object.keys(securityStats).length;

    if(serversCount === 0){
        console.log('All servers have been destroyed!');
    }else{
        console.log(`Servers remaining: ${serversCount}`);

        for(let server in securityStats){
        let securityLevel = securityStats[server].securityLevel;

        let data = securityStats[server].data;

        let users = securityStats[server].users;

        console.log(`${server} -> Security: ${securityLevel}, Data: ${data}, Users: ${users}`);

        }
    }
}
solve([
    '4',
    'Alpha|80|500|25',
    'Beta|60|300|15',
    'Gamma|90|700|40',
    'Delta|45|900|48',
    'Attack=>Beta=>30=>50',
    'Upgrade=>Alpha=>40',
    'Transfer=>Gamma=>200',
    'AddUsers=>Delta=>10',
    'Restore=>Alpha=>600',
    'Disconnect=>Gamma=>15',
    'Attack=>Beta=>40=>100',
    'Transfer=>Alpha=>1200',
    'Upgrade=>Delta=>70',
    'Restore=>Gamma=>400',
    'Shutdown'
]);