/*

Problem Description

It occurs now and then in real life that people want to write about money, especially about a certain amount of money. If it comes to cheques or contracts for example some nations have laws that state that you should write out the amount in words additionally to the amount in numbers to avoid fraud and mistakes. So if you want to transfer 745 $ to someone via cheque you have to fill out to fields:

745.00 $ (amount in numbers)

seven hundred and fourty five dollars (amount in words)

Step 1

The Kata is now to write a little converter class or function (depends on your favourite language and flavour) to convert numbers into words.

Step 2

Convert it back.

Step 3

Do all of it test driven.


1. convert to array
2. check for length
  2.1. if length is one return Dic[number]
  2.2. if length is two
    2.2.1. if between 11-19 return Dic[number]
    2.2.2. if between 20+ iterate over the numbers
  2.3. if length is greater do the same

3. at the end add ' dollars';

*/

const Dictionary = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty'
};

function getNumber(num, index) {
	switch(index) {
		case 1:
			return `${Dictionary[num]}`;
		case 2:
			return `${Dictionary[num*10]}`;
		case 3:
			return `${Dictionary[num]} hundred`;
	    case 4:
			return `${Dictionary[num]} thousand`;
		default:
			return '';
	}
}

function convert(num) {
  const numbers = num.toString().split('');
  const length = numbers.length;
  let text = '';
  if (length === 0) {
    return text;
  } else if (length === 1) {
    return `${Dictionary[numbers[length-1]]} dollar`;
  } else if (length === 2) {
    let tmp = Dictionary[parseInt(numbers[0] + numbers[1], 10)];
	if (tmp) {
		return `${tmp} dollars`;
	} else {
		numbers.forEach(function(item, index) {
			text += `${getNumber(item, length-index)} `;
		});
	}
  } else {
	numbers.forEach(function(item, index) {
		if (parseInt(item, 10) !== 0) {
			text += getNumber(item, length-index);
		}
		if (length-index > 2 && parseInt(numbers[index+1], 10) !== 0) {
			text += ' and ';
		} else if (parseInt(numbers[index+1], 10) !== 0) {
			text += ' ';
		}
		if (length-index === 1) {
			text += 'dollars';
		}
	});
  }

  return text;
};

console.log(`4 =>  ${convert(4)}`);
console.log(`44 => ${convert(44)}`);
console.log(`40 => ${convert(40)}`);
console.log(`444 => ${convert(444)}`);
console.log(`4444 => ${convert(4444)}`);
console.log(`4400 => ${convert(4400)}`);
console.log(`4440 => ${convert(4440)}`);
console.log(`11 => ${convert(11)}`);
