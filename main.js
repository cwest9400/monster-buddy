//targets
///update display number(1-10) based on timer 
const hungerStat = document.querySelector('.hungerStat')
const sleepyStat = document.querySelector('.sleepyStat')
const boredomStat = document.querySelector('.boredomStat')
const deathMessage = document.querySelector('.deathMessage')
//age stat
const ageStat = document.querySelector('.ageStat')
///start the game(timer button)
const startTimer = document.querySelector('.startButton')
///decrement buttons
const feedButton = document.querySelector(".feedButton")
const lightsButton = document.querySelector(".lightsButton")
const playButton = document.querySelector(".playButton")
//pet name selectors
const form = document.querySelector("#form")
const userInput = document.querySelector("#userInput")
const nameDisplay = document.querySelector(".nameDisplay")

//nameyourpet
let userPetName

form.addEventListener('submit', function(e){
    e.preventDefault()
    userPetName = userInput.value
    nameDisplay.innerHTML = userPetName
    form.remove()     
    })




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
        hungerStat.textContent = "X"
        deathMessage.textContent = `OH NO! ${userPetName} died from hunger!`
    } 
    if (num <=3) {
        hungerStat.style.color = "greenyellow"
    } else if( num <= 6) {
        hungerStat.style.color = "goldenrod"
    }else {
        hungerStat.style.color = "red"
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
        sleepyStat.textContent = "X"
        deathMessage.textContent = `${userPetName} fell asleep...FOREVER!`
    }
    if (num2 <=3) {
        sleepyStat.style.color = "greenyellow"
    } else if( num2 <= 6) {
        sleepyStat.style.color = "goldenrod"
    }else {
        sleepyStat.style.color = "red"
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
        boredomStat.textContent = "X"
        deathMessage.textContent = `${userPetName} is bored to death!`
    } 
    if (num3 <=3) {
        boredomStat.style.color = "greenyellow"
    } else if( num3 <= 6) {
        boredomStat.style.color = "goldenrod"
    }else {
        boredomStat.style.color = "red"
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