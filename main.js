//targets
///update display number(1-10) based on timer 
const hungerStat = document.querySelector('.hungerStat')
const sleepyStat = document.querySelector('.sleepyStat')
const boredomStat = document.querySelector('.boredomStat')
//age stat
const ageStat = document.querySelector('.ageStat')
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
let intervalAgeStat

//stat counts
let countHunger = Number(hungerStat.textContent)
let countSleepiness = Number(sleepyStat.textContent)
let countBoredom = Number(boredomStat.textContent)
let countAge = Number(ageStat.textContent)


//timer functions
///hunger function
function updateHungerStat(num) {
    hungerStat.textContent = num
    
    if(num == 10) {
        clearInterval(intervalHungerStat)
        clearInterval(intervalSleepyStat)
        clearInterval(intervalBoredomStat)
        clearInterval(intervalAgeStat)
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
        clearInterval(intervalAgeStat)
        feedButton.disabled = true
        lightsButton.disabled = true
        playButton.disabled = true
        sleepyStat.textContent = "OH NO!! Your pet doesn't look so great!"
    } 
}

///boredom function
function updateBoredomStat(num3) {
    boredomStat.textContent = num3
    
    if(num3 == 10) {
        clearInterval(intervalHungerStat)
        clearInterval(intervalSleepyStat)
        clearInterval(intervalBoredomStat)
        clearInterval(intervalAgeStat)
        feedButton.disabled = true
        lightsButton.disabled = true
        playButton.disabled = true
        boredomStat.textContent = "OH NO!! Your pet is bored to death!"
    } 
}

function updateAgeStat(num4) {
    ageStat.textContent = num4
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
//decrement boredom
function decrementBoredom () {
    if(countBoredom > 0) {
        countBoredom --
        boredomStat.textContent = countBoredom 
}
}


    








//eventlisteners
///timer
startTimer.addEventListener("click", function () {
    intervalHungerStat = setInterval(() => {
      countHunger += 1
      updateHungerStat(countHunger)     
    }, 1000)
    intervalSleepyStat = setInterval(() => {
        countSleepiness += 1
        updateSleepyStat(countSleepiness)     
    }, 1500)
    intervalBoredomStat = setInterval(() => {
        countBoredom += 1
        updateBoredomStat(countBoredom)     
    }, 1200)
    intervalAgeStat = setInterval(() => {
        countAge += 1
        updateAgeStat(countAge)     
    }, 5000)
    startTimer.disabled = true
  })


 
 
 
  //decrement listners
feedButton.addEventListener('click', decrementHunger)
lightsButton.addEventListener('click', decrementSleepiness)
playButton.addEventListener('click', decrementBoredom)