//targets
//update display number(1-10) based on timer 
const hungerStat = document.querySelector('.hungerStat')
const sleepyStat = document.querySelector('.sleepyStat')
const boredomStat = document.querySelector('.boredomStat')
//start the game(timer button)
const startTimer = document.querySelector('.startButton')
//decrement buttons
const feedButton = document.querySelector(".feedButton")
const lightsButton = document.querySelector(".lightsButton")
const playButton = document.querySelector(".playButton")


//timer code
let intervalHungerStat

///might have to fix this later(hungerStat name)
let count = Number(hungerStat.textContent)


/////timer functions

function updateStat(num) {
    hungerStat.textContent = num
    // sleepyStat.textContent = num
    // boredomStat.textContent = num
    if(num == 10) {
        clearInterval(intervalHungerStat)
      } 
}

////decrement functions
//decrement hunger
function decrementHunger () {
    if(count > 0) {
        count --
        hungerStat.textContent = count
    } 
}



    








//eventlisteners
//timers

startTimer.addEventListener("click", function () {
    intervalStat = setInterval(() => {
      count += 1
      updateStat(count)     
     }, 1000)
    startTimer.disabled = true
  })
  
 //decrement listners
feedButton.addEventListener('click', decrementHunger)