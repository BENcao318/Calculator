const display1 = document.querySelector('.result-line-1');
const display2 = document.querySelector('.result-line-2');
const numberBtns = document.querySelectorAll('.btn-number');
const operatorBtns = document.querySelectorAll('.btn-operator');
const clearBtn = document.querySelector('.btn-clear');
const deleteBtn = document.querySelector('.btn-delete');

let numInput = '';
let numString1 = '';
let numString2 = '';
let signInput = '';
let num1 = 0;
let num2 = 0;
let result = 0;
let calcArr = [];
let outputArr = [];
let displayArr1 = [];
let displayArr2 = [];




numberBtns.forEach(btn => {
  btn.addEventListener('click', numValues)
});

operatorBtns.forEach(btn => {
  btn.addEventListener('click', signValues)
});

function numValues(btn) {
  numInput += btn.target.value;
  if(calcArr[1]) {
    calcArr[2] = numInput;
  } 

  // calcArr[0] = numInput;
  
  // console.log(`numInput" ${numInput}, calcArr[0]" ${calcArr[0]}`)

  updateDisplay2(numInput);
}

function signValues(btn) {
  signInput = btn.target.value;
  calcArr[2] ? operate() : 0;


  // if(outputArr[0] === '' || outputArr[0] === undefined) {numInput = 0};

  if(!calcArr[1] && signInput !== '=') {    //Adding first operator
    if(!calcArr[0]) {
      calcArr[0] = numInput;
    };
    calcArr[1] = signInput;
    outputArr = calcArr.slice(0, 2);
  } else if (calcArr[1] && signInput === '='){  //Adding equals 
    outputArr = calcArr;
    outputArr.push('=');
    calcArr = [];
    calcArr[0] = result;
  } else if(calcArr[1] && signInput !== '=') {  //Adding second operator
    if(calcArr[2]){
      calcArr[1] = signInput;
      calcArr[0] = result;
      calcArr.pop();
      outputArr = calcArr;
      outputArr[0] = result;
    } else {
      calcArr[1] = signInput;
      outputArr = calcArr;
    }

  } 
  
  numInput = '';
  
  
  console.log(`calcArr: ${calcArr}`);
  console.log(`outputArr: ${outputArr}`);
  
  updateDisplay1(outputArr.join(' '));

}


function operate() {
  num1 = parseFloat(calcArr[0]);
  num2 = parseFloat(calcArr[2]);

  result = mathItUp[calcArr[1]](num1, num2);

  // calcArr[0] = result;
  // outputArr[0] = result;
  updateDisplay2(result);
  updateDisplay1(outputArr.join(' '));

  // console.log(`num2: ${num2}`)
  // console.log(result)
}

function updateDisplay1(str) {
  display1.textContent = str;
  // console.log(outputArr)
}

function updateDisplay2(num) {
  display2.textContent = num;
}

const mathItUp = {
  '*': function(x, y) {return x * y},
  '-': function(x, y) {return x - y},
  '+': function(x, y) {return x + y},
  '/': function(x, y) {return x / y},
}

clearBtn.addEventListener('click', clearDisplayAndArr);

deleteBtn.addEventListener('click', deleteLastEntry);

function clearDisplayAndArr() {
  calcArr = [];
  numInput = '';
  outputArr = [];
  updateDisplay1(outputArr);
  updateDisplay2(outputArr);
}

function deleteLastEntry() {
  numInput = numInput.slice(0, -1)
  console.log(calcArr[2])
  updateDisplay2(numInput);
}
// function lineValue2(key) {
//   line2Content += key.target.value; 
//   console.log()

//   if(firstOperator){line2.textContent = '';}
  
//   line2.textContent = line2Content;

//   // console.log(typeof line2.textContent);
// }

// function lineValue1(key) {
//   if(firstOperator){
//     secondOperator = key.target.value;

//   } else {
//     firstOperator = key.target.value;
//     line2Content = '';
//   }

//   if(firstOperator !== '='){
//     if(line2.textContent) {
//       num1 = parseInt(line2.textContent);
//     } else {
//       num1 = 0;
//     }
//     line1.textContent = num1 + ' ' + firstOperator;
//   }
  
  

//   if(secondOperator){
//     operate(firstOperator);
//   }

//   console.log(line2Content);

// }

// function operate(operator) {
//   num2 = parseInt(line2.textContent);
//   let result = 0;
//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '÷':
//       result = num1 / num2;
//       break;
//   }

//   console.log(result);
// }

