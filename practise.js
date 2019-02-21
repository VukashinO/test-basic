// 1.  Array Clean Up
// Write a function that will clean up an array, and return the cleaned up value. 
// The function must not modify the original array. Cleaning up of an array consists of removing the folowing values it they appear 
// as elements in the array:

// null
// undefined
// NaN
// "" (empty string)
// i.e. if the array is [NaN, 0, 15, false, -22, '',undefined, 47, null], the result of cleanUp(array) should be [0, 15, false, -22, 47]

// bonus If the array has an array as an element, that element should be cleaned up too. if the array is
// [1, NaN, 2, [3, Nan, 5] ], the result of cleanUp(array) should be [1, 2, [3, 5] ].
//  Note that this bonus would require techniques that we haven't covered yet, i.e. it's a hard bonus.



const falsy = [1, NaN, 2, [3, NaN, 5] ];


function cleanUp(array) {
    const cleanArray = []; 

    for (let i = 0; i < array.length; i++) { 
        if (array[i] || array[i] === 0 || array[i] === false) {
            if (array[i].length && typeof array[i] !== "string") { 
                cleanArray.push(cleanUp(array[i])) 
            }
            else {
                cleanArray.push(array[i]) 
            }
        }
    }

    return cleanArray; 
}

console.log(cleanUp(falsy))


// 2. Number checker
// Part 1
// Write a function that will give stats about an integer number.
// The function should return an object with the stats as properties. The stats required are:

// How many digits the number has (numDigits property)
// Is the number odd or even (isEven property)
// Is the number positive (isPositive property)
// Part 2
// Write user interface for the number checker.
// It should include an entry field for the number as well as a button to trigger the calculation. 
// After the calculation, and appropriate response should be shown on the page.

// I.e. if the user enters the number 25, the response should be

// The number 25 is a 2 digit number, it's odd and it's a positive number.

function getNumberStats(number){
    let obj = {};
    let n = number.toString().length
    
    if(number < 0){
        obj.isPositive = `negative number`;
        obj.numDigits = n - 1;
        obj.isEven = number % 2 === 0? `even` : `odd`
    }
    if(number > 0){
        obj.isPositive = `positive number`;
        obj.numDigits = n;
        obj.isEven = number % 2 === 0? `even` : `odd`
    } 
    
    return obj
}

const renderNumber = document.createElement('p');
const body = document.getElementsByTagName('body')[0];
let form = document.getElementById('num-checker');
form.addEventListener('submit', e => {
    e.preventDefault();
    let checkNumber = e.target.elements.textNumber.value;
    let getObj = getNumberStats(checkNumber);
    console.log(getObj)
   renderNumber.textContent = `The number ${checkNumber} is a ${getObj.numDigits} digit number, it's ${getObj.isEven}, and it's a ${getObj.isPositive}`
   body.appendChild(renderNumber);

   e.target.elements.textNumber.value = ''
});


//3. Write a Javascript function that will draw a christmass tree on the console.
//  The functions takes two parameters - the width of the tree and the height of the tree. 
//  Using those two values, it should generate a display that looks like this:

// drawChristmassTree(9, 7)
//         *  
//       * * *  
//     * * * * * 
//   * * * * * * * 
// * * * * * * * * *
//         *
//         *

// bonus Do proper validation of the input values



function christmassThree(n){

let txt = "";

for(i = 1; i <= n; i++){
  txt = "";
  for(j = i; j < n; j++) {
    txt += " ";
  }
  for(k = 0; k < (i * 2) - 1; k++) {
    txt += "*";
  }
  console.log(txt);
}

}

christmassThree(5)