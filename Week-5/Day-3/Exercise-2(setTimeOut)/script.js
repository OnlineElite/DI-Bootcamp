/*----------------------Exo(setTimeOut & setInterval)---------------------*/
var banner = document.getElementById('banner')
var val = 11, inter;

function showDiv() {
    banner.style.display = "block";
    inter = setInterval(countDown, 1000)
}
setTimeout(showDiv, 5000);

function countDown() {
    var time = document.getElementById('time');

    val--;
    time.textContent = val;
    if(val === 0){
        clearInterval(inter)
        banner.style.display = "none";
    }
}
