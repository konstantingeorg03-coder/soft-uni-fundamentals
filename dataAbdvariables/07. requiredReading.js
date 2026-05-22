function requiredReading(pages, pagesForOneHour, daysForReading){
    let readingHours = pages / pagesForOneHour;

    let totalHours = readingHours / daysForReading;

    console.log(totalHours);
}
requiredReading(432, 15, 4);