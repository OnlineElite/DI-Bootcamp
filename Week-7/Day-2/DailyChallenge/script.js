/*--------------------DailyChallenge-------------------*/
// Part I
const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

function getCarHonda(carInventory){
    
    const firstHonda = carInventory.find((car) => {
        return car.car_make == "Honda";
    })
    return `This is a ${firstHonda.car_make} ${firstHonda.car_model} from ${firstHonda.car_year}`
}
console.log(getCarHonda(inventory))

// Part II
function sortCarInventoryByYear(carInventory){
    carInventory.sort(function (x, y) {
        let a = new Date(x.car_year),
            b = new Date(y.car_year);
        return a - b;
    });
    console.log(carInventory);
}
sortCarInventoryByYear(inventory)
