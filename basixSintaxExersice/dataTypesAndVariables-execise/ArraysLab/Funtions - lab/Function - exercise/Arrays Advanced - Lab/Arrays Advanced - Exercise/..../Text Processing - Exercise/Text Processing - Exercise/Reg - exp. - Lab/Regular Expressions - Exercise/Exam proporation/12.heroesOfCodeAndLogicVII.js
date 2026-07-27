function solve(arr){
    let countHeroes = Number(arr.shift());

    let heroStats = {};

    for(let hero = 0; hero < countHeroes; hero++){
        let current = arr.shift();

        let tokens = current.split(' ');

        let heroName = tokens[0];

        let hP = Number(tokens[1]);

        let mP = Number(tokens[2]);

        heroStats[heroName] = {hP, mP};
    }

    let command = arr.shift();

    while(command !== 'End'){
        let tokens = command.split(' - ');

        let action = tokens[0];

        if(action === 'CastSpell'){
            let heroName = tokens[1];

            let neededMp = Number(tokens[2]);

            let spellName = tokens[3];

            if(heroStats[heroName].mP >= neededMp){
                heroStats[heroName].mP -= neededMp;

                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroStats[heroName].mP} MP!`);
            }else{
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        }else if(action === 'TakeDamage'){
            let heroName = tokens[1];

            let damage = Number(tokens[2]);

            let attacker = tokens[3];

            heroStats[heroName].hP -= damage;

            if(heroStats[heroName].hP <= 0){
                delete heroStats[heroName];

                console.log(`${heroName} has been killed by ${attacker}!`);
            }else{
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroStats[heroName].hP} HP left!`);
            }
        }else if(action === 'Recharge'){
            let heroName = tokens[1];

            let amount = Number(tokens[2]);

            let oldMp = heroStats[heroName].mP;

            heroStats[heroName].mP += amount;

            if(heroStats[heroName].mP > 200){
                heroStats[heroName].mP = 200;
            }

            let recovered = heroStats[heroName].mP - oldMp;

            console.log(`${heroName} recharged for ${recovered} MP!`);
        }else if(action === 'Heal'){
            let heroName = tokens[1];

            let amount = Number(tokens[2]);

            let oldHp = heroStats[heroName].hP;

            heroStats[heroName].hP += amount;

            if(heroStats[heroName].hP > 100){
                heroStats[heroName].hP = 100;
            }

            let recovered = heroStats[heroName].hP - oldHp;

            console.log(`${heroName} healed for ${recovered} HP!`);
        }

        command = arr.shift();
    }

    for(let heroName in heroStats){
        let hP = heroStats[heroName].hP;

        let mP = heroStats[heroName].mP;

        console.log(`${heroName}`);

        console.log(`HP: ${hP}`);

        console.log(`MP: ${mP}`);
    }
}
solve(['2',
'Solmyr 85 120',
'Kyrre 99 50',
'Heal - Solmyr - 10',
'Recharge - Solmyr - 50',
'TakeDamage - Kyrre - 66 - Orc',
'CastSpell - Kyrre - 15 - ViewEarth',
'End']);