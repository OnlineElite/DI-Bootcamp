/*---------------------------Exo2(Form manipulation)-----------------------*/

let dropdown = document.getElementById('select1')

select = dropdown.options[1]
console.log(select.value)
dropdown.options[dropdown.options.length] = new Option('Work', 'work')
dropdown.insertBefore(new Option('Primary School', 'Primary School'), dropdown.options[0])
dropdown.options[3].selected = true

function check(){
    alert(dropdown.value)
}
