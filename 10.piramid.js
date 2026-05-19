function piramid(base, increment){
    let stone = 0;
    let marble = 0;
    let latis = 0;
    let gold = 0;
    let steps = 0;
    while(base > 2){
        steps++;
        let totalArea = base * base;
        let innerArea = (base - 2) * (base - 2);
        let outerArea = totalArea - innerArea;
        stone += innerArea * increment;
    }
}
piramid(11, 1);