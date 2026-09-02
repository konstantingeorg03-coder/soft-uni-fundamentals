function solve(arr){
    let dragonsCount = Number(arr.shift());

    let dragonsStats = {};

    for(let dragonChars = 0; dragonChars < dragonsCount; dragonChars++){
        let tokens = arr.shift().split('|');

        let dragon = tokens[0];

        let health = Number(tokens[1]);

        let energy = Number(tokens[2]);

        let gold = Number(tokens[3]);

        dragonsStats[dragon] = {health, energy, gold};
    }

    let command = arr.shift();

    while(command !== 'End'){
        let tokens = command.split('=>');

        let action = tokens[0];

        if(action === 'Fight'){
            let dragon = tokens[1];

            let damage = Number(tokens[2]);

            let energyCost = Number(tokens[3]);

            dragonsStats[dragon].health -= damage;

            dragonsStats[dragon].energy -= energyCost;

            console.log(`${dragon} fought and lost ${damage} health and ${energyCost} energy.`);

            if(dragonsStats[dragon].health <= 0 || dragonsStats[dragon].energy <= 0){
                delete dragonsStats[dragon];

                console.log(`${dragon} has been eliminated!`);
            }

        }else if(action === 'Heal'){
            let dragon = tokens[1];

            let amount = Number(tokens[2]);

            if(dragonsStats[dragon].health + amount > 300){
                let addedHealth = 300 - dragonsStats[dragon].health;

                dragonsStats[dragon].health += addedHealth;

                console.log(`${dragon} healed for ${addedHealth} health.`);

            }else{
                dragonsStats[dragon].health += amount;

                console.log(`${dragon} healed for ${amount} health.`);
            }

        }else if(action === 'Rest'){
            let dragon = tokens[1];

            let amount = Number(tokens[2]);

            if(dragonsStats[dragon].energy + amount > 100){
                let addedEnergy = 100 - dragonsStats[dragon].energy;

                dragonsStats[dragon].energy += addedEnergy;

                console.log(`${dragon} restored ${addedEnergy} energy.`);
            }else{
                dragonsStats[dragon].energy += amount;

                console.log(`${dragon} restored ${amount} energy.`);
            }

        }else if(action === 'Win'){
            let dragon = tokens[1];

            let addedGold = Number(tokens[2]);

            dragonsStats[dragon].gold += addedGold;

            console.log(`${dragon} won ${addedGold} gold.`);

        }else if(action === 'BuyArmor'){
            let dragon = tokens[1];

            let cost = Number(tokens[2]);

            let healthBonus = Number(tokens[3]);

            if(dragonsStats[dragon].gold >= cost){
                dragonsStats[dragon].gold -= cost;

                if(dragonsStats[dragon].health + healthBonus > 300){
                let addedHealth = 300 - dragonsStats[dragon].health;

                dragonsStats[dragon].health += addedHealth;

                console.log(`${dragon} bought armor and gained ${addedHealth} health.`);

                }else{
                    dragonsStats[dragon].health += healthBonus;

                    console.log(`${dragon} bought armor and gained ${healthBonus} health.`);
                }
            }else{
                console.log(`Not enough gold for ${dragon}!`);
            }

        }else if(action === 'Train'){
            let dragon = tokens[1];

            let cost = Number(tokens[2]);

            let energyBonus = Number(tokens[3]);

            if(dragonsStats[dragon].gold >= cost){
                dragonsStats[dragon].gold -= cost;

                if(dragonsStats[dragon].energy + energyBonus > 100){
                let addedEnergy = 100 - dragonsStats[dragon].energy;

                dragonsStats[dragon].energy += addedEnergy;

                console.log(`${dragon} trained and gained ${addedEnergy} energy.`);

                }else{
                dragonsStats[dragon].energy += energyBonus;

                console.log(`${dragon} trained and gained ${energyBonus} energy.`);
                }
            }else{
                console.log(`Not enough gold for ${dragon}!`);
            }

        }else if(action === 'Steal'){
            let fromDragon = tokens[1];

            let toDragon = tokens[2];

            let amount = Number(tokens[3]);

            if(dragonsStats[fromDragon].gold >= amount){
                dragonsStats[fromDragon].gold -= amount;

                dragonsStats[toDragon].gold += amount;

                console.log(`${toDragon} stole ${amount} gold from ${fromDragon}.`);
            }else{
                console.log('Steal failed!');
            }

        }else if(action === 'Status'){
            let dragon = tokens[1];

            if(dragonsStats[dragon].health < 50 || dragonsStats[dragon].energy < 20 || dragonsStats[dragon].gold < 100){
                console.log(`${dragon} is in critical condition!`);
            }else{
                console.log(`${dragon} is ready for battle.`);
            }
        }

        command = arr.shift();
    }

    let count = Object.keys(dragonsStats).length;

    if(count > 0){
        console.log(`Dragons remaining: ${count}`);

        for(let dragon in dragonsStats){
            let health = dragonsStats[dragon].health;

            let energy = dragonsStats[dragon].energy;

            let gold = dragonsStats[dragon].gold;

            console.log(`${dragon} -> Health: ${health}, Energy: ${energy}, Gold: ${gold}`);
        }
    }else{
        console.log('No dragons left!');
    }
}
solve([
    '4',
    'Draco|250|80|500',
    'Shadow|180|100|750',
    'Inferno|290|60|300',
    'Frost|120|45|900',
    'Fight=>Draco=>70=>30',
    'Heal=>Draco=>150',
    'Rest=>Draco=>80',
    'BuyArmor=>Shadow=>300=>150',
    'Train=>Inferno=>200=>60',
    'Win=>Frost=>250',
    'Steal=>Shadow=>Draco=>200',
    'Status=>Draco',
    'Fight=>Frost=>130=>20',
    'Heal=>Shadow=>80',
    'BuyArmor=>Inferno=>500=>50',
    'Steal=>Inferno=>Shadow=>150',
    'Fight=>Shadow=>100=>90',
    'Status=>Inferno',
    'End'
]);