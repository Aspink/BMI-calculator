function handleButtonClick() {
    var height = getInputValue('heightInput') / 100
    var weight = getInputValue('weightInput')

    var BMI = weight / (height * height)

    var category = 'nadwaga'
    if (BMI < 18.5) {
        category = 'niedowaga'
    } else if (BMI < 25) {
        category = 'waga prawidłowa'
    } 

    document.getElementById('result').innerText = BMI.toFixed(2) + ' - ' + category

    console.log("BMI: " + BMI + ", kategoria: " + category)
}

function getInputValue(id) {
    var input = document.getElementById(id)

    return Number(input.value)
}

document.getElementById("button").onclick = handleButtonClick


