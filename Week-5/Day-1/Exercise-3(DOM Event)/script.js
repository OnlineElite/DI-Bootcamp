/*---------------------------Exo3(DOM Event)-----------------------*/
var div = document.getElementsByTagName('div');
div.addEventListener("mouseover", function(){
    div.classList.add("back");
})
var butt = document.getElementById('jsstyle');
butt.addEventListener("click", function () {
    butt.classList.add("bold");
    butt.stopPropagation();
})