
/*---------------Exercises_XP------------------*/

/*------Exercise_4------*/
var allBooks = [
    {
        title : "The beauty of the night",
        author : "tomas kinidy",
        image : "images/book1.jpg",
        alreadyRead  : false
    },
    {
        title : "The snake followers",
        author : "john banner",
        image : "images/book2.jpg",
        alreadyRead  : true
    },
];

var dev = document.getElementsByClassName('listBooks')[0]
var tbl = document.createElement('table')
var tblBody = document.createElement('tbody')
var tblHead = document.createElement('thead')

for(let i=0; i<1; i++){
    var row = document.createElement('tr')
    for(let j=0; j<4; j++){
        var box = document.createElement('td')
        box.style.color = "black"
        box.style.fontWeight = "bold"
        box.style.padding = "5px"
        var text = document.createTextNode(Object.keys(allBooks[0])[j])
        box.appendChild(text)
        row.appendChild(box)
    }
    tblHead.appendChild(row)
}
tbl.appendChild(tblHead)

for(let i=0; i<2; i++){
    var row = document.createElement('tr')
    for(let j=0; j<4; j++){
        var box = document.createElement('td')
        box.style.padding = "5px"
        if(j==2){
            var img = document.createElement('img')
            img.setAttribute("src", Object.values(allBooks[i])[j])
            img.style.width = "100px"
            box.appendChild(img)
        }else{
            var text = document.createTextNode(Object.values(allBooks[i])[j])
            if(Object.values(allBooks[i])[j] == true){
                row.style.color = "red"
            }
            box.appendChild(text)
        }
        row.appendChild(box)
    }
    tblBody.appendChild(row)
}

tbl.appendChild(tblBody)
dev.appendChild(tbl)
tbl.setAttribute("border", "2")

