//targets
//update display number(1-10) based on timer 
const hungerStat = document.querySelector('.hungerStat')
const sleepyStat = document.querySelector('.sleepyStat')
const boredomStat = document.querySelector('.boredomStat')
//start the game(timer button)
const startTimer = document.querySelector('.startButton')

//timer code

let intervalStat
///might have to fix this later
let count = Number(hungerStat.textContent)





/////timer functions

function updateStat(num) {
    hungerStat.textContent = num
    sleepyStat.textContent = num
    boredomStat.textContent = num
    if(num == 10) {
        clearInterval(intervalStat)
      } 
}
////decrement function






//eventlisteners
startTimer.addEventListener("click", function () {
    intervalStat = setInterval(() => {
      count += 1;
      updateStat(count);      
     }, 1000);
    startTimer.disabled = true;
  });
  
  