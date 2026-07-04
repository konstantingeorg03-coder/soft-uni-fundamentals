function solve(arr){
    let companyEmploees = {};

    for(let emploeeStr of arr){
        let [company, emploeeId] = emploeeStr.split(' -> ');

        if(company in companyEmploees){
            if(!companyEmploees[company].includes(emploeeId)){
                companyEmploees[company].push(emploeeId);
            }
        
        }else{
                companyEmploees[company] = [emploeeId];
            }
    }
    let entries = Object.entries(companyEmploees).sort((a, b) => a[0].localeCompare(b[0]));

        for(let [company, emploeeId] of entries){
            console.log(`${company} `);

            for(let id of emploeeId){
                console.log(`-- ${id}`);
            }
        }
}
solve([
'SoftUni -> AA12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345'
]);