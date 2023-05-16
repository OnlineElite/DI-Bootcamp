/*---------------------Mini project---------------------- */
// Part I
var quotes = [
    {
        id: 0,
        author: "author1",
        quote: "I'm only responsible for what I say, not for what you understand.",
        like: 0
    },
    {
        id: 1,
        author: "author2",
        quote: "If you let peaple perseptions of you dectate your behavior you will never grow as a person, but if you let yourself open to experiences of life then you will learn and grow.",
        like: 0
    },
    {
        id: 2,
        author: "author3",
        quote: "Intelligence is the ability to adapt to change.(number1 for author3)",
        like: 0
    },
    {
        id: 3,
        author: "author3",
        quote: "test quote number2 for author3.",
        like: 0
    },
    {
        id: 4,
        author: "author3",
        quote: "test quote number3 for author3.",
        like: 0
    },
    {
        id: 5,
        author: "author2",
        quote: "test quote number2 for author2.",
        like: 0
    },
    {
        id: 6,
        author: "author2",
        quote: "test quote number3 for author2.",
        like: 0
    },
    {
        id: 7,
        author: "author1",
        quote: "test quote number2 for author1.",
        like: 0
    },
    {
        id: 8,
        author: "author1",
        quote: "test quote number3 for author1.",
        like: 0
    },
]

var btn = document.getElementById('btn')
var screen = document.getElementById('dis')
btn.addEventListener('click', displayQuote)
function displayQuote() {
    var randomId, quoteId;
    do {
        randomId = Math.floor(Math.random() * quotes.length);
        quoteId = quotes.find((x) => x.id == randomId)
    } while (screen.textContent === quoteId.quote)
    screen.textContent = quoteId.quote;
    screen.dataset.id = quoteId.id 
}

// Part II
var inpAuthor = document.getElementById('inpAuthor')
var inpQuote = document.getElementById('inpQuote')
var addBtn = document.getElementById('btnAdd')

var btnNOC = document.getElementById('btnNOC')
var btnNOCWS = document.getElementById('btnNOCWS')
var btnNOW = document.getElementById('btnNOW')
var btnLike = document.getElementById('btnLike')

var showNOC = document.getElementById('showNOC')
var showNOCWS = document.getElementById('showNOCWS')
var showNOW = document.getElementById('showNOW')
var showlike = document.getElementById('showlike')

addBtn.addEventListener('click', addFunction);
function addFunction(e) {
    e.preventDefault();
    var lastID = quotes.length
    var inpObj = {
        id: lastID,
        author: inpAuthor.value,
        quote: inpQuote.value,
        like : 0
    }
    quotes.push(inpObj);
    console.log(quotes[3]);
}

btnNOC.addEventListener('click', showNOCFunction)
function showNOCFunction(){
    var item = screen.textContent;
    let test=  item.replace(/ /g, "")
    showNOC.value = test.length
    console.log("noc :" +test)
}

btnNOCWS.addEventListener('click', showNOCWSFunction)
function showNOCWSFunction() {
    var item = screen.textContent;
    showNOCWS.value = item.length
    console.log("nocws :" +item.length)
}

btnNOW.addEventListener('click', showNOWFunction)
function showNOWFunction() {
    var item = screen.textContent;
    var array= item.split(" ")
    showNOW.value = array.length
    console.log("now :" +array.length)
}

btnLike.addEventListener('click', showLikeFunction)
function showLikeFunction() {
    var obj = quotes.find((y) => y.id == screen.dataset.id)
    obj.like ++
    showlike.value = obj.like;
    console.log("like :" +obj.like)
}

var searchBtn = document.getElementById('searchBtn')
var nextBtn = document.getElementById('next')
var previousBtn = document.getElementById('previous')
var searchArea = document.getElementById('searchArea')
var displayArea = document.getElementById('showquots')
var allQuots = []

searchBtn.addEventListener('click', searchFunction);
function searchFunction(){
    var serchValue = searchArea.value;
    for(let x in quotes){
        if(serchValue == quotes[x].author){
            displayArea.textContent = quotes[x].quote;
            allQuots.push(quotes[x].quote)
        }
        else{
            continue;
        }
    }
    
}
 console.log(allQuots)
nextBtn.addEventListener('click',nextFunction);
function nextFunction(){
    if(allQuots.includes(displayArea.textContent)){
        var index = allQuots.indexOf(displayArea.textContent)
        if(index == 0){
            index++
            displayArea.textContent = allQuots[index++]
        }
        else{ 
            index++
            displayArea.textContent = allQuots[index++]
        }        
    }
}

previousBtn.addEventListener('click', previousFunction);
function previousFunction(){
    if(allQuots.includes(displayArea.textContent)){
        var index = allQuots.indexOf(displayArea.textContent)
        if(index == allQuots.length-1){
            index--
            displayArea.textContent = allQuots[index--]
        }
        else{ 
            index--
            displayArea.textContent = allQuots[index--]
        }        
    } 
}
