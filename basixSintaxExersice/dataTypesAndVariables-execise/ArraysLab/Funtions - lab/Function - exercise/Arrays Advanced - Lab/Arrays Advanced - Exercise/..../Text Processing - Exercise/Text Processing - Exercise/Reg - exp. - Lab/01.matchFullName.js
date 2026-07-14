function solve(input){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let result = input.matchAll(pattern);

    let output = [];
    
    for(let match of result){
        output.push(match[0]);
    }

    console.log(output.join(' '));
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")