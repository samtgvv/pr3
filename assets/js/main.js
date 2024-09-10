'use strict'
// 1
let number = +prompt('введите стоимость товара', '0');
let price = +prompt('введите количесво денег', '0');
if(number == price) {
    alert('покупка совершена');
}
else if( number < 0 && price < 0) {
    alert ('неверный формат');
}
else if (number > price) {
    alert(`для покупки не хватает ${number-price}`);
}
else if (number < price) {
    alert(`сдача ${price-number}`);
}


// 2
let x = prompt('введите число', '1');
if(x > 0) {
    alert('1');
}
else if (x < 0) {
    alert ('-1');
}
else if (x == 0) {
    alert ('0');
}

// 3
let a = +prompt('введите число 1', '1');
let b = +prompt('введите число 1', '1');
let result = (a + b < 4) ? 'мало' : 'много';
alert(result);

// 4
let login = prompt('введите должность');
let message = (login == 'сотрудник') ? 'привет' : (login == 'директор') ? 'здравствуйте' : (login == '') ? 'нет логина' : '';
alert(message);

// 5
let log = prompt("введите логин"); 
if (log == 'админ') { 
    let pass = prompt('введите пароль'); 
    if (pass == 'я главный'){ 
        alert('здравствуйте') 
    }else if (pass === null && pass === '') { 
        alert('отменено') 
    }else { 
        alert('неверный пароль'); 
    } 
}else if (log === null || log === ''){ 
    alert('отменено') 
}else { 
    alert('я вас не знаю'); 
}
