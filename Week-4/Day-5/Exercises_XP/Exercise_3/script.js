
/*---------------Exercises_XP------------------*/

/*------Exercise_3------*/
var dev = document.getElementById('navBar')
console.log(dev)
dev.setAttribute('id', "socialNetworkNavigation")
var liItem = document.createElement('li')
var textA = document.createElement('a')
textA.setAttribute('href', "#")
textA.textContent = "Logout"
var ulItem = document.getElementsByTagName('ul')[0]
liItem.appendChild(textA)
ulItem.appendChild(liItem)

var frsLi = ulItem.firstElementChild.textContent;
var lasLi = ulItem.lastElementChild.textContent;

console.log(frsLi)
console.log(lasLi)