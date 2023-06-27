const form = document.getElementById('form');
const input = document.getElementById('height');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // impede que o evento padrão ocorra (ex.: seguir um link)

    const weight = document.getElementById('weight').value;
    // weight = peso 

    const height = input.value;


    const valid = isValid(height);
    if (!valid) {
        alert("Valor da altura não é válido.");
        return;
    }
    // height = altura 
    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso.'
    }

    else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal.";
        value.classList.remove('attention');
        value.classList.add('normal');
    }

    else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! Você está com sobrepeso.";
    }

    else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você está com obesidade moderada!.";
    }

    else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! Você está com obesidade severa!";
    }

    else {
        description = "Cuidado! Você está com obesidade morbida!";
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});

input.addEventListener("keyup", function (event) {
    input.value = onlyNumber(input.value); 
    
})

function isValid(value) {
    let valid = false;
    if (!isNaN(value)) {
        valid = true;
    } else {
        valid = false;
    }

    return valid;
}

function onlyNumber(value) {
    const number = value[value.length-1] >= 0 && value[value.length-1] <= 9;
    const points = value[value.length-1] ==="." || value[value.length-1] ===",";

    if (number || points) {
        return value;
    }

    return value.substring(0, value.length-1);
}