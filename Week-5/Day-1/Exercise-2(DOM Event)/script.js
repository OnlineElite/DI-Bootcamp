/*---------------------------Exo2(DOM Event)-----------------------*/
var button = document.getElementById("jsstyle");

button.addEventListener("mouseover", RespondMouseOver);
function RespondMouseOver(e) {
    e.target.style.backgroundColor = "red";
    e.target.style.color = "yellow"

}

button.addEventListener('click', RespondOnClick);
function RespondOnClick() {
    button.classList.add('sty');
}

button.addEventListener('mouseout', RespondMouseOut);
function RespondMouseOut() {
    button.style.backgroundColor = "green";
    
}


