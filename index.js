let num = ""
const meterEl = document.getElementById('meter')
const literEl = document.getElementById('liters')
const kilosEl = document.getElementById('kilos')
const btnCon = document.getElementById('btn-con')
const  btnText = document.getElementById('btn-text')
const numEl = document.getElementById('num-el')

function convert() {
    numEl.textContent = btnText.value
    num = btnText.value
    btnText.value = " "
    meterToFeet()
    litersToGallon()
    kilogramsToPounds()


}
function meterToFeet() {
    let sum1 = num * 3.2808399
    let sum2 = num / 3.2808399
    meterEl.textContent = num + " meters = " + sum1.toFixed(3) + " feet | " + num + " feet = " + sum2.toFixed(3) + " meters"
}

function litersToGallon() {
    let sum1 = num * 0.264172052
    let sum2 = num / 0.264172052
    literEl.textContent = num + " liters = " + sum1.toFixed(3) + " gallon | " + num + " gallon = " + sum2.toFixed(3) + " liters"
}

function kilogramsToPounds() {
    let sum1 = num * 2.20462262
    let sum2 = num / 2.20462262
    kilosEl.textContent = num + " kilos = " + sum1.toFixed(3) + " pounds | " + num + " pounds = " + sum2.toFixed(3) + " kilos "
}


// * 3.2808399
//  0.264172052
// 2.20462262
