function solve(str){
    let keyMaterialQtys = { motes: 0, fragments: 0, shards: 0};
    let junkMaterialQtys = {}
    let materiallegendaries = {motes: 'Dragonwrath', fragments: 'Valanyr', shards: 'Shadowmourne'};

    let infoEls = str.split(' ');

    for(let i = 0; i < infoEls.length; i += 2){
        let qty = Number(infoEls[i]);
        let material = infoEls[i + 1].toLowerCase();

        if(material in keyMaterialQtys){
            keyMaterialQtys[material] += qty;

            if(keyMaterialQtys[material] >= 250){

                console.log(`${materiallegendaries[material]} obtained!`);
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

    let keyEntries = Object.entries(keyMaterialQtys).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])); 
    let junkEntries = Object.entries(junkMaterialQtys).sort((a, b) => a[0].localeCompare(b[0]));

    for(let [material, qty] of keyEntries){
        console.log(`${material}: ${qty}`)
    }

    for(let [material, qty] of junkEntries){
        console.log(`${material}: ${qty}`); 
    }
}
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');