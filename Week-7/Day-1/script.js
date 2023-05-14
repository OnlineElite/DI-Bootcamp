let party = [
    {
        desert: 'chocolate Mouse',
        calories: 30,
    },
    {
        desert: 'Apple Pie',
        calories: 150,
    },
    {
        desert: 'Croissant',
        calories: 50,
    },
    {
        desert: 'straberry Icecream',
        calories: 5,
    }
]

var totalCalories = party.reduce((sum, obj) => {
    if (obj.desert != 'Apple Pie') {
        return sum + obj.calories
    } else
        return sum

},0)
console.log(totalCalories)