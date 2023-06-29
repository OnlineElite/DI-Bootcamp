/*-----------Exercise_XP_2---------------*/
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}
asyncCall();

// the outcome will be:
/*
=> calling
...after 2 seconds 
=> resolved

*/