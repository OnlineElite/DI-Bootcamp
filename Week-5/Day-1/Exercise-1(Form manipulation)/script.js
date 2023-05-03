/*---------------------------Exo1(Form manipulation)-----------------------*/
var form = document.forms[0]
var fname = form.elements.fname
var lname = form.elements.lname;
var sub = document.getElementById('butt')

sub.addEventListener("mouseout",getData);
function getData(){
    console.log("First name: " + fname.value);
    console.log("Last name: " + lname.value);
}
