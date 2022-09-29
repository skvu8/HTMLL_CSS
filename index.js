//let a = 7, b = 8;
//console.log(a+b)

// var name
// var surname
// var dni
// var zp


name = prompt("Укажите ваше имя")
if (name === '' || 'Андрей' || 'Иван' || 'Айдар') {
    alert('Ошибка')
    while (name === '' || 'Андрей' || 'Иван' || 'Айдар'){
    name = prompt("Укажите ваше имя") 
        }
    }
surname = prompt("Укажите вашe фамилию")
if (surname === '') {
    alert('Ошибка')
    while (surname === ''){
        surname = prompt('Введите фамилию:')
        }
    }
dni = prompt("Количество отработанных дней за месяц?") 
if (dni === '') {
    alert('Ошибка')
    while (dni === ''){
        dni = prompt("Количество отработанных дней за месяц?")
        }
    }
zp = prompt("Ваша зарплата?") 
if (zp === '') {
    alert('Ошибка')
    while (zp === ''){
        zp = prompt("Ваша зарплата?")
        }
    }
var moizp = zp/24 * dni
alert('Зарплата: ' + moizp)
const worker = {
    name: userName,
    secondName: userSecondName,
    workingDay: userWorkingDay,
    salary: userSalary,
}

for (const [key, value] of Object.entries(worker)) {
    console.log(key + ':' + value.toLowerCase());
} 
console.log(worker)




// function myFuntion (a, b) {
//     return a + b
// }

// function myFuntion (a, b) {
//     return Math.pow(a, b)
// }



// let a = prompt ('Введите первое число: ')
// if(isNaN(Number(a))) {
//     alert('Ошибка введите число')
// }  while (isNaN(Number(a))) {
//     a = prompt ('Введите первое число: ')

// }
// let b = prompt ('Введите второе число: ')
// if(isNaN(Number(b))) {
//     alert('Ошибка введите число')
// }
// while (isNaN(Number(b))) {
//     b = prompt ('Введите второе число: ')
// }

// let c = prompt ('Введите операцию + - / * : ')
// if(c === '+') {
//     alert(Number(a) + Number(b))
// }

// else if (c === '-') {
//     alert(Number(a) - Number(b))
// }

// else if (c === '*') {
//     alert(Number(a) * Number(b))
// }

// else if (c === '/') {
//     alert(Number(a) / Number(b))
// }

// else {
//     alert('Ошибка, неверная операция')
// }
