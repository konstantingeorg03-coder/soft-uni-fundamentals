function solve(str) {
    let keyMaterialQtys = {shards: 0, fragments: 0, motes: 0}
    let junkMaterialQtys = {};
    let legendaryMaterial = {shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath'};

    let infoInput = str.split(' ');

    for(let i = 0; i < infoInput.length; i += 2){
        let qty = Number(infoInput[i]);
        let material = infoInput[i + 1].toLowerCase();

        if(material in keyMaterialQtys){
            keyMaterialQtys[material] += qty;

            if(keyMaterialQtys[material] >= 250){
                console.log(`${legendaryMaterial[material]} obtained`);
                keyMaterialQtys[material] -= 250;
                break;
            }
        }else{
            if(material in junkMaterialQtys){
                junkMaterialQtys[material] += qty;
            }else{
                junkMaterialQtys[material] = qty;
            }
        }
    }

    let sortKeyQtys = Object.entries(keyMaterialQtys).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let sortJunkQtys = Object.entries(junkMaterialQtys).sort((a, b) => a[0].localeCompare(b[0]));

    for(let [material, qty] of sortKeyQtys){
        console.log(`${material}: ${qty}`);
    }

    for(let [material, qty] of sortJunkQtys){
        console.log(`${material}: ${qty}`);
    }
}
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');