
'use strict';

if (4 ==2) {
    console.log('OK!');
} else {
    console.log('Error');
}

const num = 50;
if (num < 49) {
    console.log('Error')
} else if (num > 50) {
    console.log('Too much')
} else {
    console.log('ok')
}


(num === 50) ? console.log('Ok') : console.log('error')

const num2 = 50;
switch(num2) {
    case 49:
        console.log('falseee!');
        break;
    case 100:
        console.log('falseee!');
        break;
    case 51:
        console.log('falseee!');
        break;    
    case 50:
        console.log('Right!');
        break;
}