/*----------Exercises_XP------------*/
// Exercise-1
function compareToTen(num) {
    return new Promise((resolve, reject) =>{
        if(num <= 10){
            resolve('the num is less than or equal to 10');
        }
        else{
            reject('the num is greater than 10');
        }
    })
}

compareToTen(8)
    .then((result)=>{
        console.log(result);
    })
    .catch((errer)=>{
        console.log(errer)
    })

//Exercise-2
// 1)
const selfResolve = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('success')
    },4000)
})
.then((val)=>{
    console.log(val)
})
.catch((errer)=>{
    console.log(errer)
})

// 2)
const self = Promise.resolve(setTimeout(()=>{console.log('success')},4000))
self.then((val)=>{ console.log(val)})
.catch(()=>{console.log('Ooops something went wrong')})

//Exercise-3
// 1)
const resolv = Promise.resolve(3)
resolv.then((val)=>{
    console.log(val)
}).catch((err)=>{console.log(err)})

// 2)
const rejec = Promise.resolve('Boo!')
rejec.then((val)=>{
    console.log(val)
}).catch((err)=>{console.log(err)})