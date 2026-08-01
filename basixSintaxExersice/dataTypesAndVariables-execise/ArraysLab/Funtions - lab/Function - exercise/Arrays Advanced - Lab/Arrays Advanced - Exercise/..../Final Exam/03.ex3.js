function solve(arr){
    let capacity = Number(arr.shift())

    let command = arr.shift();

    let usersStats = {};

    while(command !== 'Statistics'){
        let tokens = command.split('=');

        let action = tokens[0];

        if(action === 'Add'){
            let userName = tokens[1];

            let sent = Number(tokens[2]);

            let received = Number(tokens[3]);

            if(!(userName in usersStats)){
                usersStats[userName] = {sent, received};
            }
        }else if(action === 'Message'){
            let sender = tokens[1];

            let receiver = tokens[2];

            if(sender in usersStats && receiver in usersStats){
                usersStats[sender].sent++;

                usersStats[receiver].received++;

                if (usersStats[sender].sent + usersStats[sender].received >= capacity) {
                    console.log(`${sender} reached the capacity!`);
                    delete usersStats[sender];
                }

                if(usersStats[receiver].sent + usersStats[receiver].received >= capacity){
                    console.log(`${receiver} reached the capacity!`);

                    delete usersStats[receiver];
                }
            }
        }else if(action === 'Empty'){ 
            let userName = tokens[1]; 
            
            if(userName === 'All'){ 
                usersStats = {}; 
            }else if(userName in usersStats){ 
                delete usersStats[userName]; 
            } 
        }

        command = arr.shift();
    }

    console.log(`Users count: ${Object.keys(usersStats).length}`);

    for(let userName in usersStats){
        let totalMessages = usersStats[userName].sent + usersStats[userName].received;

        console.log(`${userName} - ${totalMessages}`);
    }
    
}
solve(['10',
'Add=Berg=9=0',
'Add=Kevin=0=0',
'Message=Berg=Kevin',
'Add=Mark=5=4',
'Statistics']);