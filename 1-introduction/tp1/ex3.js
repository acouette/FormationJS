

function tellMe(data){
    if(data){
        console.log('Yes, I can see your futur');
    }else{
        console.log('No, I can\' see much');
    }
}

const string1 = 'any string';
const string2 = '';
const number1 = 2;
const number2 = 0;
const boolean1 = true;
const boolean2 = false;
const undefined1 = undefined;
const null1 = null;
const symbol1 = Symbol('anything');

const array = [string1, string2, number1, number2, boolean1, boolean2, undefined1, null1, symbol1];

for(let item of array){
    tellMe(item);
}
