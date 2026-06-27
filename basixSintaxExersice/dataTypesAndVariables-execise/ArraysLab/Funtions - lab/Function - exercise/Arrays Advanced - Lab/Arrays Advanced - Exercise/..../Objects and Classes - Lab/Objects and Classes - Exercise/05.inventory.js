function inventory(arr){
    let heroes = [];

    for(let heroesData of arr){
        let [heroName, heroLevel, heroItems] = heroesData.split(' / ');
        heroLevel = Number(heroLevel);

        let heroObj = {
            name: heroName,
            heroLevel: heroLevel,
            heroItems: heroItems
        };

        heroes.push(heroObj);
    }
    heroes.sort((a, b) => a.heroLevel - b.heroLevel);

    for(let heroObj of heroes){
        console.log(`Hero: ${heroObj.name}`);
        console.log(`level => ${heroObj.heroLevel}`);
        console.log(`items => ${heroObj.heroItems}`);
    }
}
inventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
])