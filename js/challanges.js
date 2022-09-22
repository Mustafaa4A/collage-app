//
const birthY = document.getElementById('birthY'),
    type = document.getElementById('type'),
    age = document.getElementById('age'),
    result = document.querySelector('.result'),
    message = document.querySelector('.error');;



let currentDate = new Date()
let currentYear = currentDate.getFullYear();



birthY.addEventListener('keyup', function (e) {
    if (!isNaN(e.key)) {
        message.style.display = 'none';
    }
    else {
        message.textContent = 'Please type a number'
    }
    
})



//functions
function intoYear() {
    let birthYear = parseInt(birthY.value);

    let Age = currentYear - birthYear;

    if (birthY.value != '' && birthY.value <= currentYear)  {
        type.textContent = 'Years';
        age.textContent = Age;
        message.style.display = 'none';
        result.style.display = '';
    }
    else {
        validateInput()
    }
}


function intoMonths() {
    let birthYear = parseInt(birthY.value);

    let Age = currentYear - birthYear;
    let Months = Age * 12;

    if (birthY.value != '' && birthY.value <= currentYear) {
        type.textContent = 'Months';
        age.textContent = Months;
        message.style.display = 'none';
        result.style.display = '';
    }
    else {
        validateInput()
    }
}
function intoDays() {
    let birthYear = parseInt(birthY.value);

    let Age = currentYear - birthYear;
    let Months = Age * 12;
    let Days = Age * 365;

    if (birthY.value != '' && birthY.value <= currentYear) {
        type.textContent = 'Days';
        age.textContent = Days;
        message.style.display = 'none';
        result.style.display = '';
    }
    else {
        validateInput()
    }
}



//validate inpur
function validateInput() {
    result.style.display = 'none';
    if (birthY.value == '') {
        message.textContent = 'Please Enter Year birth year';
        message.style.display = 'block';
    }
    if (birthY.value > currentYear) {
        message.textContent = `Invalid Year, Current year is ${currentYear}`;
        message.style.display = 'block';
    }
}