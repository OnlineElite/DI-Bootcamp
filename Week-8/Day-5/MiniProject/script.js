
/*--------------------MiniProject------------------*/
// Part I (Styling)
var sec = document.getElementsByTagName('section')[0]
sec.style.display = "flex"
sec.style.alignItems = "center"
sec.style.justifyContent = "center"
sec.style.position = "relative"

var con = document.getElementById('container')
con.style.display = "flex"
con.style.flexDirection = "column"
con.style.alignItems = "center"
con.style.justifyContent = "center"
con.style.backgroundColor = "rgb(1, 30, 109)"
con.style.width = "60vw"
con.style.height = "fit-content"
con.style.marginTop = "20px"
con.style.paddingTop = "20px"
con.style.paddingBottom = "20px"
con.style.borderRadius = "7px"

var car = document.getElementById('cards')
car.style.width = "95%"
car.style.minHeight = "400px"
car.style.border = "2px solid white"
car.style.borderRadius = "7px"
car.style.display = "flex"
car.style.flexWrap = "wrap"
car.style.alignItems = "center"
car.style.justifyContent = "center"
car.style.padding = "10px"
//incorrect city message
function cityErreur(){
    var win = document.createElement('div')
    win.classList.add('windowErreur')
    var para = document.createElement('p')
    para.classList.add('paraErreur')
    para.textContent = "The city name that you entered is not found please try again. "
    win.appendChild(para)
    con.appendChild(win)
    setTimeout(() => {
        win.style.display = "none"
    }, 3000);
}

// Functions
var inp = document.getElementById('search')
var submit = document.getElementById('submit')

submit.addEventListener('click', getCityInfo)
function getCityInfo(e){
    e.preventDefault()
    let req = new XMLHttpRequest();

    req.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`, true)

    req.send()

    req.responseType = 'json'

    req.onload = function(){
        if(req.status != 200){
            //alert("There is a problem with the server please try again.")
            if(req.status == 404){
                cityErreur()
            }
        }
        else{
            console.log(req.response) 
            // Creating elements
            var card = document.createElement('div')
            card.style.width = "230px"
            card.style.height = "300px"
            card.style.backgroundColor = "rgb(219, 121, 219)"
            card.style.borderRadius = "7px"
            card.style.boxShadow = "0 4px 8px 0 rgba(2, 2, 2, 2), 0 6px 20px 0 rgba(2, 2, 2, 2)"
            card.style.padding = "30px 20px"
            card.style.position = "relative"
            card.style.margin = "5px"
            //card.style.display ="none"

            var CityContry = document.createElement('div')
            CityContry.style.display = "flex"
            card.appendChild(CityContry)

            var cityName = document.createElement('p')
            cityName.style.fontSize = "22px"
            cityName.style.color = "white"
            cityName.style.fontWeight = "bold"
            CityContry.appendChild(cityName)

            var country = document.createElement('h2')
            country.style.fontWeight = "bold"
            country.style.fontSize = "10px"
            country.style.backgroundColor = "rgb(248, 150, 4)"
            country.style.borderRadius = "8px"
            country.style.padding = "4px"
            country.style.color = "white"
            country.style.marginLeft = "5px"
            country.style.marginBottom = "20px"
            CityContry.appendChild(country)

            var supTemp = document.createElement('div')
            supTemp.style.display = "flex"
            card.appendChild(supTemp)

            var temp = document.createElement('h1')
            temp.style.fontSize = "49px"
            temp.style.color = "rgb(10, 10, 10)"
            temp.style.fontWeight = "5px"
            temp.style.fontFamily = "'Segoe UI'"
            temp.setAttribute('class', 'temperateurs')
            supTemp.appendChild(temp)

            var sup = document.createElement('h2')
            sup.textContent = "°C"
            sup.style.fontWeight = "5px"
            sup.style.fontSize = "35px"
            sup.style.marginTop = "12px"
            supTemp.appendChild(sup)

            var logo = document.createElement('img')
            logo.style.width = "80px"
            logo.style.height = "80px"
            logo.style.marginTop = "10px"
            card.appendChild(logo)

            var desc = document.createElement('p')
            desc.style.color = "white"
            desc.style.fontSize = "20px"
            desc.style.fontWeight = "bold"
            card.appendChild(desc) 
            cityName.textContent = req.response.name;
            country.textContent = req.response.sys.country;
            temp.textContent = ((req.response.main.temp)-273.15).toFixed(1)
            desc.textContent = req.response.weather[0].description;
            spn1.textContent = req.response.wind.speed;
            spn2.textContent = req.response.sys.sunrise;
            spn3.textContent = req.response.sys.sunset;
            logo.setAttribute('src', `https://openweathermap.org/img/wn/${req.response.weather[0].icon}@2x.png`);
            car.appendChild(card)

            // Exit Button
            var exet = document.createElement('button')
            exet.textContent = "X"
            exet.style.fontWeight = "bold"
            exet.style.fontSize = "20px"
            exet.style.backgroundColor = "transparent"
            exet.style.border = "none"
            exet.style.color = "black"
            exet.style.position = "absolute"
            exet.style.top = "5px"
            exet.style.right = "5px"
            card.appendChild(exet)

            exet.addEventListener('click', exetCard)
            function exetCard(){
                car.removeChild(card)
            }
        }
    }
    inp.value = ""
}
// Wind info & position
var info = document.createElement('div')
    info.classList.add('info')

var tit = document.createElement('p')
    tit.classList.add('tit')
    tit.textContent = "Position Info"
    info.appendChild(tit)

var wind = document.createElement('p')
    wind.classList.add('wind')
    wind.textContent = "The wind speed: " 
    info.appendChild(wind) 
    var spn1 = document.createElement('span')
        spn1.classList.add('spn')
        wind.appendChild(spn1)

var sunrise = document.createElement('p')
    sunrise.classList.add('sunrise')
    sunrise.textContent = "Sunrise time: " 
    info.appendChild(sunrise) 
    var spn2 = document.createElement('span')
        spn2.classList.add('spn')
        sunrise.appendChild(spn2)

var sunset = document.createElement('p')
    sunset.classList.add('sunset')
    sunset.textContent = "Sunset time: " 
    info.appendChild(sunset)
    var spn3 = document.createElement('span')
        spn3.classList.add('spn')
        sunset.appendChild(spn3)
sec.appendChild(info)


//ChangeTemperateurUnite
var btns = document.createElement('div')
btns.classList.add('btns')

var kBtn = document.createElement('button')
kBtn.textContent = "To Kelvin"
kBtn.classList.add('kBtn')
btns.appendChild(kBtn)

var fBtn = document.createElement('button')
fBtn.textContent = "To Fahrenheit "
fBtn.classList.add('fBtn')
btns.appendChild(fBtn)
con.appendChild(btns)

//Fanction to change temperateur

var changetemp = document.getElementsByClassName('temperateurs')
// To kelvin
kBtn.addEventListener('click', toKelvin)
function toKelvin(){
    var ChangeUnit = kBtn.textContent;
    for(let t of changetemp){

        if(ChangeUnit === "To Kelvin"){
            var oldTemp = t.textContent;
            var newTemp = (Number(oldTemp) +273.15).toFixed(1);
            t.textContent = newTemp;
            kBtn.textContent = "To Celsius"
            //sup.textContent = "K"
        }
        else{
            var oldTemp = t.textContent;
            var newTemp = (Number(oldTemp)-273.15).toFixed(1)
            t.textContent = newTemp;
            kBtn.textContent = "To Kelvin"
            //sup.textContent = "°C"
        }
    }
}

// To Fahrenheit
fBtn.addEventListener('click',toFahrenheit)
function toFahrenheit(){
    var ChangeUnit = fBtn.textContent;
    for(let t of changetemp){

        if(ChangeUnit === "To Fahrenheit"){
            var oldTemp = t.textContent;
            var newTemp = ((Number(oldTemp) *(9/5))+32).toFixed(1);
            t.textContent = newTemp;
            fBtn.textContent = "To Celsius"
            //sup.textContent = "F"
        }
        else{
            var oldTemp = t.textContent;
            var newTemp = ((Number(oldTemp)-32)*(5/9)).toFixed(1)
            t.textContent = newTemp;
            fBtn.textContent = "To Fahrenheit"
            //sup.textContent = "°C"
        }
    }
}



