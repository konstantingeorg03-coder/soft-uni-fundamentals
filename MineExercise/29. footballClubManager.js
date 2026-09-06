function solve(arr){
    let count = Number(arr.shift());

    let clubsStats = {};

    for(let clubsChars = 0; clubsChars < count; clubsChars++){
        let tokens = arr.shift().split('|');

        let club = tokens[0];

        let players = Number(tokens[1]);

        let energy = Number(tokens[2]);

        let budget = Number(tokens[3]);

        clubsStats[club] = {players, energy, budget};
    }

    let command = arr.shift();

    while(command !== 'EndSeason'){
        let tokens = command.split('=>');

        let action = tokens[0];

        if(action === 'Match'){
            let club = tokens[1];

            let energyCost = Number(tokens[2]);

            let prize = Number(tokens[3]);

            let injured = Number(tokens[4]);

            if(clubsStats[club].energy >= energyCost){
                clubsStats[club].energy -= energyCost;

                clubsStats[club].budget += prize;

                clubsStats[club].players -= injured;

                console.log(`${club} played a match, earned ${prize} and lost ${injured} players.`);

                if(clubsStats[club].players <= 0){
                    delete clubsStats[club];

                    console.log(`${club} is out of the tournament!`);
                }

            }else{
                console.log(`${club} does not have enough energy!`);

            }

        }else if(action === 'Recover'){
            let club = tokens[1];

            let amount = Number(tokens[2]);

            if(clubsStats[club].energy + amount > 100){
                let addedEnergy = 100 - clubsStats[club].energy;

                clubsStats[club].energy += addedEnergy;

                console.log(`${club} recovered ${addedEnergy} energy.`);

            }else{
                clubsStats[club].energy += amount;

                console.log(`${club} recovered ${amount} energy.`);

            }

        }else if(action === 'SignPlayers'){
            let club = tokens[1];

            let amount = Number(tokens[2]);

            let cost = Number(tokens[3]);

            if(clubsStats[club].budget >= cost && clubsStats[club].players + amount <= 30){
                clubsStats[club].budget -= cost;

                clubsStats[club].players += amount;

                console.log(`${club} signed ${amount} new players.`);

            }else{
                console.log(`Signing failed for ${club}!`);
            }

        }else if(action === 'Sponsor'){
            let club = tokens[1];

            let amount = Number(tokens[2]);

            clubsStats[club].budget += amount;

            console.log(`${club} received ${amount} from a sponsor.`);

        }else if(action === 'SellPlayers'){
            let club = tokens[1];

            let amount = Number(tokens[2]);

            let income = Number(tokens[3]);

            if(clubsStats[club].players >= amount){
                clubsStats[club].players -= amount;

                clubsStats[club].budget += income;

                console.log(`${club} sold ${amount} players for ${income}.`);

            }else{
                console.log('Player sale failed!');
            }

        }else if(action === 'TransferBudget'){
            let fromClub = tokens[1];

            let toClub = tokens[2];

            let amount = Number(tokens[3]);

            if(clubsStats[fromClub].budget >= amount){
                clubsStats[fromClub].budget -= amount;

                clubsStats[toClub].budget += amount;

                console.log(`${fromClub} transferred ${amount} to ${toClub}.`);

            }else{
                console.log('Budget transfer failed!');
            }

        }else if(action === 'LoanPlayers'){
            let fromClub = tokens[1];

            let toClub = tokens[2];

            let amount = Number(tokens[3]);

            if(clubsStats[fromClub].players >= amount && clubsStats[toClub].players + amount <= 30){
                clubsStats[fromClub].players -= amount;

                clubsStats[toClub].players += amount;

                console.log(`${amount} players moved from ${fromClub} to ${toClub}.`);

            }else{
                console.log('Player loan failed!');
            }

        }else if(action === 'TrainingCamp'){
            let club = tokens[1];

            let cost = Number(tokens[2]);

            let energyBonus = Number(tokens[3]);

            if(clubsStats[club].budget >= cost){
                clubsStats[club].budget -= cost;

                if(clubsStats[club].energy + energyBonus > 100){
                    let addedEnergy = 100 - clubsStats[club].energy;

                    clubsStats[club].energy += addedEnergy;

                    console.log(`${club} completed training and gained ${addedEnergy} energy.`);

                }else{
                    clubsStats[club].energy += energyBonus;

                    console.log(`${club} completed training and gained ${energyBonus} energy.`);

                }

            }else{
                console.log(`Not enough budget for ${club}!`);
            }

        }else if(action === 'Fine'){
            let club = tokens[1];

            let amount = Number(tokens[2]);

            clubsStats[club].budget -= amount;

            console.log(`${club} was fined ${amount}.`);

            if(clubsStats[club].budget <= 0){
                delete clubsStats[club];

                console.log(`${club} has gone bankrupt!`);
            }

        }else if(action === 'Derby'){
            let club1 = tokens[1];

            let club2 = tokens[2];

            let energyLost = Number(tokens[3]);

            clubsStats[club1].energy -= energyLost;

            clubsStats[club2].energy -= energyLost;

            console.log(`${club1} and ${club2} played a fierce derby!`);

            if(clubsStats[club1].energy < 0){
                clubsStats[club1].energy = 0;
            } 
            
            if(clubsStats[club2].energy < 0){
                clubsStats[club2].energy = 0;
            }

        }else if(action === 'SwapPlayers'){
            let club1 = tokens[1];

            let club2 = tokens[2];

            let plClub1 = clubsStats[club1].players;

            clubsStats[club1].players = clubsStats[club2].players;

            clubsStats[club2].players = plClub1;

            console.log(`${club1} and ${club2} swapped their squads.`);

        }else if(action === 'Status'){
            let club = tokens[1];

            if(clubsStats[club].players < 11 || clubsStats[club].energy < 20 || clubsStats[club].budget < 500){
                console.log(`${club} is in critical condition!`);

            }else{
                console.log(`${club} is ready for the next match.`);

            }
        }

        command = arr.shift();
    }

    let countClubs = Object.keys(clubsStats).length;

    if(countClubs > 0){
        console.log(`Clubs remaining: ${countClubs}`);

        for(let club in clubsStats){
            let players = clubsStats[club].players;

            let energy = clubsStats[club].energy;

            let budget = clubsStats[club].budget;

            console.log(`${club} -> Players: ${players}, Energy: ${energy}, Budget: ${budget}`);
        }

    }else{
        console.log('No clubs remaining!');
    }
}
solve([
    '5',
    'Lions|22|70|1500',
    'Tigers|18|90|2200',
    'Wolves|25|55|1000',
    'Falcons|12|40|800',
    'Bulls|28|100|3000',

    'Match=>Lions=>25=>700=>2',
    'Recover=>Lions=>70',
    'SignPlayers=>Falcons=>5=>400',
    'Sponsor=>Wolves=>600',
    'SellPlayers=>Bulls=>4=>500',
    'TransferBudget=>Tigers=>Wolves=>500',
    'LoanPlayers=>Wolves=>Falcons=>3',
    'TrainingCamp=>Falcons=>300=>80',
    'Derby=>Lions=>Tigers=>30',
    'SwapPlayers=>Lions=>Bulls',
    'Status=>Falcons',

    'SignPlayers=>Bulls=>15=>500',
    'TransferBudget=>Falcons=>Tigers=>500',
    'Match=>Wolves=>70=>900=>4',
    'Recover=>Wolves=>30',
    'SellPlayers=>Tigers=>50=>1000',
    'Status=>Lions',

    'Fine=>Falcons=>150',
    'EndSeason'
]);