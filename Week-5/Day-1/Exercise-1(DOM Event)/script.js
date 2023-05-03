/*---------------------------Exo1(DOM Event)-----------------------*/
function insertRow(){
    var table = document.getElementById('sampleTable')
    var newRow = table.insertRow(table.rows.length) 
    var cell1 = newRow.insertCell(0)
    var cell2 = newRow.insertCell(1)
    cell1.innerHTML = "new row cell 1"
    cell2.innerHTML = "new row cell 2"
}
document.getElementById('btn').onclick = function(){
    insertRow()
}

