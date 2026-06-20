function experienceGaining(arr){
    let neededExp = Number(arr.shift());
    let battlesCount = Number(arr.shift());
    let totalExp = 0;
    let battlesNum = 0;

    for(let i = 0; i < battlesCount; i++){
        let currentBattleExp = Number(arr[i]);
        battlesNum = i + 1;

        if(battlesNum % 3 === 0){
            currentBattleExp += 0.15 * currentBattleExp;
        }

        if(battlesNum % 5 === 0){
            currentBattleExp -= 0.10 * currentBattleExp;
        }

        if(battlesNum % 15 === 0){
            currentBattleExp += 0.05 * currentBattleExp;
        }

        totalExp += currentBattleExp;

        if(totalExp >= neededExp){
            break;
        }
    }

    if(totalExp >= neededExp){
        console.log(`Player successfully collected his needed experience for ${battlesNum} battles.`)
    }else{
        console.log(`Player was not able to collect the needed experience, ${(neededExp - totalExp).toFixed(2)} more needed.`)
    }

}
experienceGaining([500,
5,
50,
100,
200,
100,
30])