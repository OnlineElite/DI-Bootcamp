/*--------- DOM Tree 2---------------*/
var divDom1 = document.getElementById('container');
var divDom2 = document.getElementsByTagName('div')[0];
console.log(divDom1);
console.log(divDom2);

var ulDom1 = document.querySelectorAll('ul')
var ulDom2 = document.getElementsByClassName('list')
 for(let i in ulDom2){
   console.log(ulDom2[i].children)
 }

var liDom = document.querySelectorAll('ul>li:first-child')
console.log(liDom)