//targets
///update display number(1-10) based on timer 
const hungerStat = document.querySelector('.hungerStat')
const sleepyStat = document.querySelector('.sleepyStat')
const boredomStat = document.querySelector('.boredomStat')
///start the game(timer button)
const startTimer = document.querySelector('.startButton')
///decrement buttons
const feedButton = document.querySelector(".feedButton")
const lightsButton = document.querySelector(".lightsButton")
const playButton = document.querySelector(".playButton")


//timer intervals
let intervalHungerStat
let intervalSleepyStat
let intervalBoredomStat

//stat counts
let countHunger = Number(hungerStat.textContent)
let countSleepiness = Number(sleepyStat.textContent)
let countBoredom = Number(boredomStat.textContent)


//timer functions
///hunger function
function updateHungerStat(num) {
    hungerStat.textContent = num
    
    if(num == 10) {
        clearInterval(intervalHungerStat)
        clearInterval(intervalSleepyStat)
        clearInterval(intervalBoredomStat)
        feedButton.disabled = true
        lightsButton.disabled = true
        playButton.disabled = true
        hungerStat.textContent = "OH NO!! Your pet doesn't look so great!"
    } 
        
    
}
///sleepy function
function updateSleepyStat(num2) {
    sleepyStat.textContent = num2
    
    if(num2 == 10) {
        clearInterval(intervalHungerStat)
        clearInterval(intervalSleepyStat)
        clearInterval(intervalBoredomStat)
        feedButton.disabled = true
        lightsButton.disabled = true
        playButton.disabled = true
        hungerStat.textContent = "OH NO!! Your pet doesn't look so great!"
    } 
}












////decrement functions
//decrement hunger
function decrementHunger () {
    if(countHunger > 0) {
        countHunger --
        hungerStat.textContent = countHunger  
}
}
//decrement sleepiness
function decrementSleepiness () {
    if(countSleepiness > 0) {
        countSleepiness --
        sleepyStat.textContent = countSleepiness  
}
}


    








//eventlisteners
//timers
///Hunger timer
startTimer.addEventListener("click", function () {
    intervalHungerStat = setInterval(() => {
      countHunger += 1
      updateHungerStat(countHunger)     
    }, 1000)
    intervalSleepyStat = setInterval(() => {
        countSleepiness += 1
        updateSleepyStat(countSleepiness)     
    }, 3000)
    startTimer.disabled = true
  })


 
 
 
  //decrement listners
feedButton.addEventListener('click', decrementHunger)
lightsButton.addEventListener('click', decrementSleepiness)