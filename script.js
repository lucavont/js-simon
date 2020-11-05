function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
}

randomNums = [];

for (i = 0; i < 5; i++) {
    generatedNum = getRandomIntInclusive(1, 99)
    if (randomNums.includes(generatedNum)) {
        i--
    } else {
        randomNums.push(generatedNum)
    }
    console.log(randomNums)
}

for (i = 0; i < randomNums.length; i++) {
    alert(randomNums[i])
}


var userPickedNums = [];
var comparedNums = [];

function userPick() {
    for (i = 0; i < 5; i++) {
        var pickedNum = parseInt(prompt('Inserisci un numero'));

        if (userPickedNums.includes(pickedNum)) {
            alert('Numero già inserito! Riprova!')
            i--
        } else {
            userPickedNums.push(pickedNum);
        }
        if (randomNums.includes(pickedNum)) {
            comparedNums.push(pickedNum)
        }
    }
    document.getElementById('title').innerHTML = 'Hai indovinato: ' + comparedNums.length + ' numeri. <br>' +
        'I numeri da te indovinati sono: ' + comparedNums;
}


setTimeout(userPick, 5000)