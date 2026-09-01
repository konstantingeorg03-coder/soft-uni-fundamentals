function solve(arr){
    let countArmy = Number(arr.shift());

    let armyStats = {};

    for(let armyChars = 0; armyChars < countArmy; armyChars++){
        let tokens = arr.shift().split('|');

        let army = tokens[0];

        let soldiers = Number(tokens[1]);

        let energy = Number(tokens[2]);

        let credits = Number(tokens[3]);

        armyStats[army] = {soldiers, energy, credits};
    }

    let command = arr.shift();

    while(command !== 'End'){
        let tokens = command.split('=>');

        let action = tokens[0];

        if(action === 'Attack'){
            let army = tokens[1];

            let enemyPower = Number(tokens[2]);

            let soldiersLost = Number(tokens[3]);

            armyStats[army].energy -= enemyPower;

            armyStats[army].soldiers -= soldiersLost;

            console.log(`${army} fought bravely but lost ${soldiersLost} soldiers and ${enemyPower} energy.`);

            if(armyStats[army].energy <= 0 || armyStats[army].soldiers <= 0){
                delete armyStats[army];

                console.log(`${army} has been defeated!`);
            }

        }else if(action === 'Reinforce'){
            let army = tokens[1];

            let amount = Number(tokens[2]);

            if(armyStats[army].soldiers + amount > 300){
                let neededAmount = 300 - armyStats[army].soldiers;

                armyStats[army].soldiers += neededAmount;

                console.log(`${army} reinforced with ${neededAmount} soldiers.`);
            }else{
                armyStats[army].soldiers += amount;

                console.log(`${army} reinforced with ${amount} soldiers.`);
            }

        }else if(action === 'Recharge'){
            let army = tokens[1];

            let amount = Number(tokens[2]);

            if(armyStats[army].energy + amount > 100){
                let addedEnergy = 100 - armyStats[army].energy;

                armyStats[army].energy += addedEnergy;

                console.log(`${army} recharged with ${addedEnergy} energy.`);
            }else{
                armyStats[army].energy += amount;

                console.log(`${army} recharged with ${amount} energy.`);
            }

        }else if(action === 'Earn'){
            let army = tokens[1];

            let amount = Number(tokens[2]);

            armyStats[army].credits += amount;

            console.log(`${army} earned ${amount} credits.`);

        }else if(action === 'Upgrade'){
            let army = tokens[1];

            let cost = Number(tokens[2]);

            let soldiersBonus = Number(tokens[3]);

            if(armyStats[army].credits >= cost){
                armyStats[army].credits -= cost;

                if(armyStats[army].soldiers + soldiersBonus > 300){
                    let neededSols = 300 - armyStats[army].soldiers;

                    armyStats[army].soldiers += neededSols;

                    console.log(`${army} upgraded and gained ${neededSols} soldiers.`);
                }else{
                    armyStats[army].soldiers += soldiersBonus;

                    console.log(`${army} upgraded and gained ${soldiersBonus} soldiers.`);
                }
            }else{
                console.log(`Not enough credits for ${army}!`);
            }

        }else if(action === 'Transfer'){
            let fromArmy = tokens[1];

            let toArmy = tokens[2];

            let amount = Number(tokens[3]);

            if(armyStats[fromArmy].credits >= amount){
                armyStats[fromArmy].credits -= amount;

                armyStats[toArmy].credits += amount;

                console.log(`${fromArmy} transferred ${amount} credits to ${toArmy}.`);
            }else{
                console.log('Transfer failed!');
            }

        }else if(action === 'Status'){
            let army = tokens[1];

            if(armyStats[army].soldiers < 50 || armyStats[army].energy < 20 || armyStats[army].credits < 100){
                console.log(`${army} is in critical condition!`);
            }else{
                console.log(`${army} is ready for battle.`);
            }
        }

        command = arr.shift();
    }

    let count = Object.keys(armyStats).length;

    if(count > 0){
        console.log(`Armies remaining: ${count}`);

        for(let army in armyStats){
            let soldiers = armyStats[army].soldiers;

            let energy = armyStats[army].energy;

            let credits = armyStats[army].credits;

            console.log(`${army} -> Soldiers: ${soldiers}, Energy: ${energy}, Credits: ${credits}`);
        }
    }else{
        console.log('No armies left!');
    }
}
solve([
    '4',
    'Falcon|120|80|500',
    'Orion|200|60|700',
    'Titan|90|100|300',
    'Nova|150|40|900',
    'Attack=>Falcon=>30=>25',
    'Reinforce=>Falcon=>250',
    'Recharge=>Falcon=>80',
    'Upgrade=>Titan=>200=>50',
    'Earn=>Orion=>150',
    'Transfer=>Orion=>Falcon=>300',
    'Status=>Falcon',
    'Attack=>Nova=>50=>160',
    'Upgrade=>Titan=>500=>100',
    'Attack=>Titan=>100=>50',
    'Status=>Orion',
    'End'
]);