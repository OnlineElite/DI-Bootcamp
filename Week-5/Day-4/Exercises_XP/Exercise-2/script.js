
/*--------------Exercises_XP-Ex2----------------------*/

let btn = document.getElementById('clic')
let box = document.getElementById('box')
btn.addEventListener("click", boxPassing)

function boxPassing() {
    let start = Date.now();

    let timer = setInterval(() => {
        let parcour = Date.now() - start;
        box.style.left = parcour / 5.7 +'px';
        if (parcour > 2000) {
          clearInterval(timer);
        }
    }, 20);
}


