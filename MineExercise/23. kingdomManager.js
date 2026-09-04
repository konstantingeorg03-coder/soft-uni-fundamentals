function solve(arr){
    let count = Number(arr.shift());

    let kingdomStats = {};

    for(let kingdomChars = 0; kingdomChars < count; kingdomChars++){
        let tokens = arr.shift().split('|');

        let kingdom = tokens[0];

        let army = Number(tokens[1]);

        let food = Number(tokens[2]);

        let gold = Number(tokens[3]);

        kingdomStats[kingdom] = {army, food, gold};
    }

    let command = arr.shift();

    while(command !== 'Peace'){
        let tokens = command.split('=>');

        let action = tokens[0];

        if(action === 'Battle'){
            let kingdom = tokens[1];

            let armyLost = Number(tokens[2]);

            let foodLost = Number(tokens[3]);

            kingdomStats[kingdom].army -= armyLost;

            kingdomStats[kingdom].food -= foodLost;

            console.log(`${kingdom} fought a battle and lost ${armyLost} soldiers and ${foodLost} food.`);

            if(kingdomStats[kingdom].army <= 0 || kingdomStats[kingdom].food <= 0){
                delete kingdomStats[kingdom];

                console.log(`${kingdom} has fallen!`);
            }

        }else if(action === 'Recruit'){
            let kingdom = tokens[1];

            let amount = Number(tokens[2]);

            if(kingdomStats[kingdom].army + amount > 300){
                let addedArmy = 300 - kingdomStats[kingdom].army;

                kingdomStats[kingdom].army += addedArmy;

                console.log(`${kingdom} recruited ${addedArmy} soldiers.`);

            }else{
                kingdomStats[kingdom].army += amount;

                console.log(`${kingdom} recruited ${amount} soldiers.`);
            }

        }else if(action === 'Tax'){
            let kingdom = tokens[1];

            let amount = Number(tokens[2]);

            kingdomStats[kingdom].gold += amount;

            console.log(`${kingdom} collected ${amount} gold in taxes.`);

        }else if(action === 'BuyWeapons'){
            let kingdom = tokens[1];

            let cost = Number(tokens[2]);

            let armyBonus = Number(tokens[3]);

            if(kingdomStats[kingdom].gold >= cost){
                kingdomStats[kingdom].gold -= cost;

                if(kingdomStats[kingdom].army + armyBonus > 300){
                    let addedArmy = 300 - kingdomStats[kingdom].army;

                    kingdomStats[kingdom].army += addedArmy;

                    console.log(`${kingdom} bought weapons and gained ${addedArmy} soldiers.`);

                }else{
                    kingdomStats[kingdom].army += armyBonus;

                    console.log(`${kingdom} bought weapons and gained ${armyBonus} soldiers.`);
                }

            }else{
                console.log(`Not enough gold for ${kingdom}!`);
            }

        }else if(action === 'Feast'){
            let kingdom = tokens[1];

            let cost = Number(tokens[2]);

            let foodBonus = Number(tokens[3]);
            
            if(kingdomStats[kingdom].gold >= cost){
                kingdomStats[kingdom].gold -= cost;

                if(kingdomStats[kingdom].food + foodBonus > 100){
                    let addedFood = 100 - kingdomStats[kingdom].food;

                    kingdomStats[kingdom].food += addedFood;

                    console.log(`${kingdom} held a feast and gained ${addedFood} food.`);

                }else{
                    kingdomStats[kingdom].food += foodBonus;

                    console.log(`${kingdom} held a feast and gained ${foodBonus} food.`);
                }

            }else{
                console.log(`Not enough gold for ${kingdom}!`);
            }

        }else if(action === 'SendGold'){
            let fromKingdom = tokens[1];

            let toKingdom = tokens[2];

            let amount = Number(tokens[3]);

            if(kingdomStats[fromKingdom].gold >= amount){
                kingdomStats[fromKingdom].gold -= amount;

                kingdomStats[toKingdom].gold += amount;

                console.log(`${fromKingdom} sent ${amount} gold to ${toKingdom}.`);

            }else{
                console.log('Gold transfer failed!');
            }

        }else if(action === 'SendArmy'){
            let fromKingdom = tokens[1];

            let toKingdom = tokens[2];

            let amount = Number(tokens[3]);

            if(kingdomStats[fromKingdom].army >= amount && kingdomStats[toKingdom].army + amount <= 300){
                kingdomStats[fromKingdom].army -= amount;

                kingdomStats[toKingdom].army += amount;

                console.log(`${amount} soldiers moved from ${fromKingdom} to ${toKingdom}.`);

            }else{
                console.log('Army transfer failed!');
            }

        }else if(action === 'Raid'){
            let attacker = tokens[1];

            let defender = tokens[2];

            let damage = Number(tokens[3]);

            kingdomStats[defender].army -= damage;

            console.log(`${attacker} raided ${defender} for ${damage} army damage.`);

            if(kingdomStats[defender].army <= 0){
                delete kingdomStats[defender];

                console.log(`${defender} has fallen!`);
            }

        }else if(action === 'Status'){
            let kingdom = tokens[1];

            if(kingdomStats[kingdom].army < 50 || kingdomStats[kingdom].food < 20 || kingdomStats[kingdom].gold < 100){
                console.log(`${kingdom} is in critical condition!`);

            }else{
                console.log(`${kingdom} is strong and stable.`);
            }

        }else if(action === 'Harvest'){
            let kingdom = tokens[1];

            let amount = Number(tokens[2]);

            if(kingdomStats[kingdom].food + amount > 100){
                let addedFood = 100 - kingdomStats[kingdom].food;

                kingdomStats[kingdom].food += addedFood;

                console.log(`${kingdom} harvested ${addedFood} food.`);

            }else{
                kingdomStats[kingdom].food += amount;

                console.log(`${kingdom} harvested ${amount} food.`);
            }
        }

        command = arr.shift();
    }

    let countKingdoms = Object.keys(kingdomStats).length;

    if(countKingdoms > 0){
        console.log(`Kingdoms remaining: ${countKingdoms}`);

        for(let kingdom in kingdomStats){
            let army = kingdomStats[kingdom].army;

            let food = kingdomStats[kingdom].food;

            let gold = kingdomStats[kingdom].gold;

            console.log(`${kingdom} -> Army: ${army}, Food: ${food}, Gold: ${gold}`);
        }

    }else{
        console.log('No kingdoms survived!');
    }
}
solve([
    '4',
    'Northrealm|180|70|500',
    'Ironvale|250|90|800',
    'Stormhold|120|50|300',
    'Westoria|280|40|1000',
    'Battle=>Northrealm=>40=>20',
    'Recruit=>Northrealm=>200',
    'Harvest=>Northrealm=>80',
    'Tax=>Ironvale=>250',
    'BuyWeapons=>Stormhold=>200=>220',
    'Feast=>Westoria=>300=>90',
    'SendGold=>Ironvale=>Northrealm=>400',
    'SendArmy=>Westoria=>Stormhold=>50',
    'Status=>Northrealm',
    'Raid=>Northrealm=>Stormhold=>180',
    'Battle=>Westoria=>100=>50',
    'BuyWeapons=>Ironvale=>900=>100',
    'Status=>Ironvale',
    'Peace'
]);