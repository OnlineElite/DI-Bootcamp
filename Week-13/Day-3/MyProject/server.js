const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

let menu = [
    {
        name: "Margarita",
        price: 10,
        ingredients: ["Tomato Sauce", "Mozzarella", "Basil"]
    },
    {
        name: "Bianca",
        price: 13,
        ingredients: ["Ricotta", "Mozzarella", "Garlic"]
    },
    {
        name: "Etna",
        price: 14,
        ingredients: ["Tomato sauce", "Mozzarella", "Anchovies", "Capers", "Olives"]
    }
]

app.get('/', (req, res) => {
    res.render('index', { nameRestaurant: "Papa Pizza", pizzaMenu: menu }) 
})

//NEW ROUTE
app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));