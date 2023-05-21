
/*---------------------Exercises_XP----------------------*/

/*--------Exercise_3---------*/
var allBoldItems = []

var Items = document.getElementsByTagName('strong')

function getBoldItems(){
    for(let i=0; i < Items.length; i++){
        allBoldItems.push(Items[i].textContent)
    }
}
getBoldItems()

function highlight(){
    for(let i=0; i < Items.length; i++){
      Items[i].style.color = "blue"
      continue
    }
}

function returnItemsToDefault(){
    for(let i=0; i < Items.length; i++){
      Items[i].style.color = "black"
      continue
    }
}

for(let i=0; i < Items.length; i++){
    Items[i].addEventListener('mouseover',highlight )
    Items[i].addEventListener('mouseout', returnItemsToDefault)
    
}