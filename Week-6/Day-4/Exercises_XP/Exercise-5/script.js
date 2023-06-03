
/*---------------------------Exercise_XP-5----------------------*/


function makeJuice(beverageSize){

    const ingredients = [];
    function addIngredients(ing1, ing2, ing3){
        ingredients.push(ing1, ing2, ing3)
    }
    
    function displayJuice(ingredient){
        const display = document.getElementById('display');
        let firstPart = `The client wants a ${beverageSize} juice, containing: `
        let secondPart = ``;
        ingredient.forEach((ingrade, index )=> {
            let isTheLast = (index === (ingredients.length-1))? '.' : ', '
            secondPart += ingrade + isTheLast;
        });
        let msg = firstPart + secondPart;
        display.textContent = msg;
    }
    addIngredients('Orange', 'milk', 'Mango')
    addIngredients('Apple', 'Kiwi', 'Carrot')
    displayJuice(ingredients)
}
makeJuice('large')



