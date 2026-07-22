function solve(str){
    let pattern = /([=\/])(?<name>[A-Z][A-Za-z]{2,})\1/g;
     
    let destinations = [];

    let travelPoints = 0;

    let match = pattern.exec(str);

    while(match){
        let name = match.groups.name;

        destinations.push(name);

        travelPoints += name.length;

        match = pattern.exec(str);
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
solve('1=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');