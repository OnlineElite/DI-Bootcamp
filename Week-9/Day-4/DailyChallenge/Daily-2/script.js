/*-----------------------2nd Challenge-------------------*/
const submit = document.getElementById('submit')

submit.addEventListener('click', getinfo)

function getinfo(e){
  e.preventDefault()
  let lati1 = document.getElementById('lati1').value
  let long1 = document.getElementById('long1').value
  let lati2 = document.getElementById('lati2').value
  let long2 = document.getElementById('long2').value
  let firstcity = document.getElementById('firstcity').textContent
  let secondtcity = document.getElementById('secondtcity').textContent
  console.log(firstcity, secondtcity)
  console.log([lati1, long1, lati2, long2])
  const promise1 = fetch(`https://api.sunrise-sunset.org/json?lat=${lati1}&lng=${long1}`).then((res)=> res.json())

  const promise2 = fetch(`https://api.sunrise-sunset.org/json?lat=${lati2}&lng=${long2}`).then((res)=> res.json())

  Promise.all([promise1, promise2])
  .then((res)=>{ 
    console.log(`${firstcity}  ` +[res[0].results.sunrise, res[0].results.sunset])
    console.log(`${secondtcity}  ` +[res[1].results.sunrise, res[1].results.sunset])
   })
  .catch((err)=>{ console.log(err) })
}


