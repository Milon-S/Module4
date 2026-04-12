const ages = [];
const number = [12, 33, 44, 55, 66, 77, 99, 45];

console.log(number);
number.push(88);
number.push(55);
number.push(85,66);
console.log(number);
number.pop();
number.pop();
console.log(number);

// Shift 1st element out
number.shift();
console.log(number);

// Unshift = Add 1 st elements

number.unshift('Milon');
console.log(number);

// includes 
console.log(number.includes('Milon'));
console.log(number.includes('Gelam'));

if(number.includes('Milon')){
    console.log('Party')

}
else {
        console.log('No food are fasting')

    }

    console.log(Array.isArray(number));
