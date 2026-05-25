function distanceBetweenPoints(x1, y1, x2, y2){
    let dx = x2 - x1;
    let dy = y2 - y1;

    let distance = Math.sqrt(dx * dx + dy * dy);
    console.log(distance);
}
distanceBetweenPoints(2, 4, 5, 0);