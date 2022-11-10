//targets
const hungerStat = document.querySelector('.hungerStat')
const sleepyStat = document.querySelector('.sleepyStat')
const boredomStat = document.querySelector('.boredomStat')




const timer = setInterval(()=>console.log('hello'), 1000)
console.log('the interval reference', timer)
setTimeout(()=>clearInterval(timer), 10000)