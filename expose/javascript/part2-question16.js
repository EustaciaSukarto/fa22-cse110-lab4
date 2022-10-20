let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
// print value of the property if property starts with r or value of property is odd
for (const property in statistics) {
    if(property[0] == 'r' || statistics[property] % 2 == 1 ) {
        console.log(statistics[property]);
    }
}