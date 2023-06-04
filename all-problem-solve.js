// ANSWER - Recap:::::

// answer - 1

// addPostfix('asdfas', '-') // a-s-d-f-a-s using for loop

function addHypenInString(inputString, inputHypen) {
    let newHypenString = '';
    const stringLen = inputString.length;
    for (let indexOfString = 0; indexOfString < stringLen; indexOfString++) {
        // console.log(inputString[indexOfString])
        const stringOfTheIndex = inputString[indexOfString]
        if (indexOfString < stringLen - 1) {
            newHypenString = newHypenString + stringOfTheIndex + inputHypen;
        }
        else {
            newHypenString = newHypenString + stringOfTheIndex

        }

    }
    return newHypenString;
}

console.log(addHypenInString('asdfas', "-"))


// Answer-02
//findInArr([22, 3, 3, 2, 2], 3) // true usign for loop

function findNumberInArray(array, targetNumber) {
    let isArrayMatch = false;

    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
        // console.log(array[arrayIndex]);
        if (array[arrayIndex] === targetNumber) {
            isArrayMatch = true;

        }

        // first 
    }
    return isArrayMatch;

}

console.log(findNumberInArray([22, 3, 3, 2, 2], 3));

// answer-3
// declare 1 types of mathmatical operation custom function

function shoppingBill(productlist, VatApply, serviceChargeApply, discountGiven) {
    let totalShoppingBill = 0;
    const productLen = productlist.length;
    for (let productIndex = 0; productIndex < productLen; productIndex++) {
        totalShoppingBill = totalShoppingBill + productlist[productIndex];

    }
    totalShoppingBill = totalShoppingBill + (totalShoppingBill * VatApply / 100) + (totalShoppingBill * serviceChargeApply / 100) - (totalShoppingBill * discountGiven / 100);

    return totalShoppingBill;
}

const products = [2200, 2300, 2400, 1900, 3300, 14000, 2000]
const vat = 15;
const serviceCharge = 10;
const discount = 5;

console.log(shoppingBill(products, vat, serviceCharge, discount));


// Answer-4
//problem-4 write a function that return the parameter using all types of data type
function printingAnyTypeOfData(inputs) {
    let dataTypes = inputs + ">" + typeof inputs;

    return dataTypes;
}
console.log(printingAnyTypeOfData(true));
console.log(printingAnyTypeOfData(3));
console.log(printingAnyTypeOfData("Fahad"));
console.log(printingAnyTypeOfData([23]));

// answer-5
//problem-5 write a function that accept 2 parameter , first one is a number and second one is also a number and that function returns summation of both number

function sumOf2(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
console.log(sumOf2(5, 4))

// answer-6
// problem-6 const arr = [1, 3, 5, 67, 8]
// output> multiplyArr(arr, 100) // [100, 300, 500, 6700, 800]

function multiplyArray(array, multiplier) {
    let multiplyArr = [];
    const arrayLen = array.length;
    for (let arrayIndex = 0; arrayIndex < arrayLen; arrayIndex++) {
        // console.log(array[arrayIndex]);
        multiplyArr.push(array[arrayIndex] * multiplier);
    }
    return multiplyArr;
}
console.log(multiplyArray([1, 3, 5, 67, 8], 100))

// answer-7
// problem - 7 findSmallest([32, 53, 46, 56, 1, 57, 2]) // 

function findSmallest(array) {
    let smallestNumber = array[0];
    const arrayLen = array.length;
    for (let arrayIndex = 0; arrayIndex < arrayLen; arrayIndex++) {
        if (array[arrayIndex] < smallestNumber) {
            smallestNumber = array[arrayIndex];
        }
    }
    return smallestNumber;
}

console.log(findSmallest([32, 53, 46, 56, 57, 2]))



// Answer-8
// problem - 8 findEvens([3, 53, 2, 63, 41, 24, 634]) // [2, 24, 634]
function findevenNumber(inputArray) {
    let evenNumberArray = [];
    const arrayLen = inputArray.length;
    for (let indexOfArray = 0; indexOfArray < arrayLen; indexOfArray++) {
        const numberInArray = inputArray[indexOfArray]
        if (numberInArray % 2 === 0) {
            evenNumberArray.push(numberInArray);
        }
    }
    return evenNumberArray;
}

console.log(findevenNumber([3, 53, 2, 63, 41, 24, 634, 44, 78, 77, 33, 72]));


// Answer-9
// Problem-9 findOdds([3, 53, 2, 63, 41, 24, 634, 44, 78, 77, 33, 72])

function findOddNumber(inputArray) {
    let oddNumberArray = [];
    const arrayLen = inputArray.length;
    for (let indexOfArray = 0; indexOfArray < arrayLen; indexOfArray++) {
        const numberInsideArray = inputArray[indexOfArray];
        if (numberInsideArray % 2 !== 0) {
            oddNumberArray.push(numberInsideArray);
        }
    }
    return oddNumberArray;
}
console.log(findOddNumber([3, 53, 2, 63, 41, 24, 634, 44, 78, 77, 33, 72]));


// Answer-10
// problem-10 crossConcat([1,2,3], [4,5,6]) // [1,4,2,5,3,6]

function crossConcat(array1, array2) {
    let conctArray = [];
    const arrayLen1 = array1.length;
    const arrayLen2 = array2.length;
    for (let indexOfArray1 = 0, indexOfArray2 = 0; indexOfArray1 < arrayLen1, indexOfArray2 < arrayLen2; indexOfArray1++, indexOfArray2++) {

        conctArray.push(array1[indexOfArray1], array2[indexOfArray2]);
    }
    return conctArray;
}
console.log(crossConcat([1, 2, 3], [4, 5, 6]));


// Answer-11
// problem-11 largest string 

function findLargestString(inputArray) {
    const arrayLen = inputArray.length;
    let biggestLen = 0;
    let largestString = '';
    for (let indexOfArray = 0; indexOfArray < arrayLen; indexOfArray++) {
        const insideNumberOfArray = inputArray[indexOfArray];

        if (inputArray[indexOfArray].length > biggestLen) {
            biggestLen = inputArray[indexOfArray].length;
            largestString = insideNumberOfArray + " is " + "Bigest String>" + inputArray[indexOfArray].length;
        }
    }
    return largestString;
}
console.log(findLargestString(["Fahad", "Forhaddddd", "Mounaaaa"]));

// Answer-12
// problem-12 Smallest string 

function findSmallestString(inputArray) {
    const arrayLen = inputArray.length;
    let smallestString = inputArray[0];
    for (let indexOfArray = 0; indexOfArray < arrayLen; indexOfArray++) {
        const insideInArrayLen = inputArray[indexOfArray].length;
        if (insideInArrayLen < smallestString.length) {
            smallestString = inputArray[indexOfArray];
        }
    }
    return smallestString + " is Smallest-String" + " size>" + smallestString.length;

}
console.log(findSmallestString(["Fahad", "Fo", "Mounaaaa"]));

// answer-12
// problem - 12 unlimitedPLus(...arrPlus)

function sumOfNumbers(...array) {
    let sum = 0;
    const arrayLen = array.length;
    for (let indexOfArray = 0; indexOfArray < arrayLen; indexOfArray++) {
        // console.log(array[indexOfArray]);
        sum = sum + array[indexOfArray]
    }
    return sum;
}
console.log(sumOfNumbers(2, 3, 4, 5, 6, 7, 9, 10, 23, 23))


// answer-13
// problem - 13
// return> highestValueInside > sumInsideArray;

function highestValueInsideArray(arrayOfNumbers) {
    const outerArrayLen = arrayOfNumbers.length;
    let higestValue = 0;
    for (let indexOfOuterArray = 0; indexOfOuterArray < outerArrayLen;
        indexOfOuterArray++) {
        // console.log(array[indexOfArray]); 
        const innerArrayLen = arrayOfNumbers[indexOfOuterArray].length;
        for (let indexOfInnerArray = 0; indexOfInnerArray < innerArrayLen; indexOfInnerArray++) {
            const elementInNestedArray = arrayOfNumbers[indexOfOuterArray][indexOfInnerArray];
            // console.log(array[indexOfOuterArray][indexOfInnerArray]);
            if (elementInNestedArray > higestValue) {
                higestValue = elementInNestedArray;
            }
        }


    }
    return higestValue;
}
const arr001 = [
    [1, 32, 4, 5],
    [1],
    [3, 45],
    [6, 7, 5, 2, 4, 2, 1],
    [3, 41, 3, 4]
]

console.log(highestValueInsideArray(arr001));

function sumInsideArray(arrayInput) {
    let innerArraySum = [];
    let outterArraySum = [innerArraySum];
    const outerArrayLen = arrayInput.length;
    for (let outerArrayIndex = 0; outerArrayIndex < outerArrayLen; outerArrayIndex++) {
        let totalSum = 0;

        const innerArrayLen = arrayInput[outerArrayIndex].length;
        for (let innerArrayIndex = 0; innerArrayIndex < innerArrayLen; innerArrayIndex++) {
            totalSum = totalSum + arrayInput[outerArrayIndex][innerArrayIndex]
        }
        innerArraySum.push([totalSum]);
    }

    return outterArraySum;
}

console.log(sumInsideArray(arr001));


// Problem-14
// show the nested array in one flatten array

// Answer-14
function flatMyNestedArray(inputArray) {
    let flatArray = [];
    const arrayLen = inputArray.length;
    for (let indexOfOuterArray = 0; indexOfOuterArray < arrayLen; indexOfOuterArray++) {

        const innerArrayLen = inputArray[indexOfOuterArray].length;

        for (let indexOfInnerArray = 0; indexOfInnerArray < innerArrayLen; indexOfInnerArray++) {

            flatArray.push(inputArray[indexOfOuterArray][indexOfInnerArray])
        }

    }
    return flatArray;
}

// Problem-15
// show the highest sum inside the the array
// Answer-15

function findHighestSumOfArray(inputArray) {
    let highestSum = 0;
    const outerArrayLen = inputArray.length;
    for (let indexOfOuterArray = 0; indexOfOuterArray < outerArrayLen; indexOfOuterArray++) {
        let sum = 0;
        const innerArrayLen = inputArray[indexOfOuterArray].length;
        for (let innerArrayIndex = 0; innerArrayIndex < innerArrayLen; innerArrayIndex++) {
            sum = sum + inputArray[indexOfOuterArray][innerArrayIndex];
        }
        if (highestSum < sum) {
            highestSum = sum;
        }
    }
    return highestSum;
}

// //Problem-16 
// Answer-16  show the higest length in the array

function findHigestLengthOfInnerArray(inputArray) {
    let higerInnerArrayLen = 0;
    let higestArray = 0;

    const outerArrayLen = inputArray.length;
    for (let outerArrayIndex = 0; outerArrayIndex < outerArrayLen; outerArrayIndex++) {
        const innerArrayLen = inputArray[outerArrayIndex].length;
        for (let innerArrayIndex = 0; innerArrayIndex < innerArrayLen; innerArrayIndex++) {
            const innerArrayNumber = inputArray[outerArrayIndex];
            if (innerArrayNumber.length > higerInnerArrayLen) {
                higerInnerArrayLen = innerArrayNumber.length;
                higestArray = innerArrayNumber;
            }

        }
    }
    let higerLengthInnerArray = [];
    higerLengthInnerArray.push(higestArray);
    higerLengthInnerArray.push("highest Length>" + higerInnerArrayLen)
    return higerLengthInnerArray;
}

// Problem-17
// show higest number inside the array
//  Answer-17

function findHighestNumberInsideArray(inputArray) {
    let higestNumber = 0;
    const outerLen = inputArray.length;
    for (let outerArrayIndex = 0; outerArrayIndex < outerLen; outerArrayIndex++) {
        // console.log(inputArray[outerArrayIndex]);
        // [1, 2, 5],
        //     [4, 4, 3, 6],
        //     [5, 6, 4, 2, 1, 9]
        const innerLen = inputArray[outerArrayIndex].length;
        for (let innerArrayIndex = 0; innerArrayIndex < innerLen; innerArrayIndex++) {
            // console.log(innerArrayIndex);
            // 1, 2, 5
            if (inputArray[outerArrayIndex][innerArrayIndex] > higestNumber) {
                higestNumber = inputArray[outerArrayIndex][innerArrayIndex]
            }

        }

    }
    return higestNumber + " is the highest Number of this Array";
}


const testingArray = [
    [1, 2, 5],
    [4, 4, 3, 6],
    [5, 6, 4, 2, 22, 9],
]
console.log(flatMyNestedArray(testingArray));
console.log(findHighestSumOfArray(testingArray));
console.log(findHigestLengthOfInnerArray(testingArray));
console.log(findHighestNumberInsideArray(testingArray));

// Problem - 18 find higest string in array
// Answer-18
function findTheLargestStringInArray(inputArray) {
    let highestStringIndexNumber = 0;
    let highestString = "";
    const outerLen = inputArray.length;
    for (let outerIndex = 0; outerIndex < outerLen; outerIndex++) {
        // console.log(inputArray[outerIndex]);
        // ['2,3,53'],
        //     ['2,3,3,345,325'],
        const innerLen = inputArray[outerIndex].length;
        for (let innerIndex = 0; innerIndex < innerLen; innerIndex++) {
            // console.log(inputArray[outerIndex][innerIndex]);
            if (inputArray[outerIndex][innerIndex].length > highestStringIndexNumber) {
                highestStringIndexNumber = inputArray[outerIndex][innerIndex].length;
                highestString = inputArray[outerIndex][innerIndex]
            }
        }

    }
    return highestString + " > is largest string, in a number > " + highestStringIndexNumber;
}

let y = [
    ['2,3,53'],
    ['2,3,3,345,3224fs6gknkg6e55'],
    ['2,3,3,345,325,35277863s3'],
    ['2,3,3,34'],
    ['2,3,'],
    ['2,3,asdada11111111111113'],
]

console.log(findTheLargestStringInArray(y));

// Problem-19
// Answer-19
// let ad = [2, 324, 234, 23, 423, 2342, 123, 1231, 23124, 4, 3534]
// let targetSingle = 2 > // function isItemExistInArr(arr, targetSingle) // false/true
function isItemExistInArray(inputArray, targetNumber) {
    const indexLen = inputArray.length;
    let isNumberExist = false;
    for (let arrayIndex = 0; arrayIndex < indexLen; arrayIndex++) {
        if (inputArray[arrayIndex] === targetNumber) {
            isNumberExist = true;
        }
        else {
            false
        }
    }
    return isNumberExist;
}
let arrayInput = [324, 234, 23, 423, 2342, 123, 1231, 23124, 4, 3534, 2]
console.log(isItemExistInArray(arrayInput, 324));


//  problem-20 >>>function findElements(arr, targetIndex[4,6]) // [68, 131]
// Answer-20

function findTheElements(inputArray, targetIndexInArray) {
    let targetElementInArray = [];
    const targetArrayLen = targetIndexInArray.length;
    for (let targetArrayIndex = 0; targetArrayIndex < targetArrayLen; targetArrayIndex++) {
        const arrayLen = inputArray.length;
        for (let arrayIndex = 0; arrayIndex < arrayLen; arrayIndex++) {
            if (targetIndexInArray[targetArrayIndex] === arrayIndex) {
                targetElementInArray.push(inputArray[arrayIndex]);
            }
        }
    }

    return targetElementInArray;
}

let arr = [
    22, 33, "abcd", "d7", 51, 34, "ijkl", 667, 903, "efgh",
]

let targetIndex = [2, 3, 6, 9]
console.log(findTheElements(arr, targetIndex));


//problem-21 
// let a = [
//     [2, 'khalid'],
//     [3, 'jarar'],
//     [4, 'kaka'],
//     [5, 'amor']
// ]

// let target = [5, 4]

// function findElements2(arr, target) // [[4,'kaka'], [5, 'amor']]

// Answer-21

function findArrayAccordingToIndex(inputArray, targetNumber) {
    let arrayWithTargetElement = []
    const targetLen = targetNumber.length;
    for (let targetNumberIndex = 0; targetNumberIndex < targetLen; targetNumberIndex++) {
        const outerArrayLen = inputArray.length;
        for (let outerArrayIndex = 0; outerArrayIndex < outerArrayLen; outerArrayIndex++) {
            const innerArrayLen = inputArray[outerArrayIndex].length;
            for (let innerArrayIndex = 0; innerArrayIndex < innerArrayLen; innerArrayIndex++)

                if (targetNumber[targetNumberIndex] === inputArray[outerArrayIndex][innerArrayIndex]) {
                    arrayWithTargetElement.push(inputArray[outerArrayIndex]);

                }
        }
    }
    return arrayWithTargetElement;
}
const givenArray = [
    [2, 'khalid'],
    [3, 'jarar'],
    [4, 'kaka'],
    [5, 'amor']
]

let target = [5, 4]
console.log(findArrayAccordingToIndex(givenArray, target))


//problem-22> merge two array such way the elements are all unique
// arr1 = [5, 3, 6, 8, 1]
// arr2 = [3, 7, 4, 2, 10]

// output = [7, 4, 2, 10, 5, 3, 6, 8, 1]

// Answer-22

function margeAndUniqueTheArray(inputArray1, inputArray2) {
    const array1Len = inputArray1.length;
    for (let indexOfArray1 = 0; indexOfArray1 < array1Len; indexOfArray1++) {
        let isDuplicate = false;
        const array2Len = inputArray2.length;
        for (let indexOfArray2 = 0; indexOfArray2 < array2Len; indexOfArray2++) {
            if (inputArray2[indexOfArray2] === inputArray1[indexOfArray1]) {
                isDuplicate = true;
            }
        }
        if (!isDuplicate) {
            inputArray2.push(inputArray1[indexOfArray1])
        }
    }
    return inputArray2;

}

const arr1 = [5, 3, 6, 8, 1]
const arr2 = [3, 7, 4, 2, 10]
console.log(margeAndUniqueTheArray(arr1, arr2));

//problem-23 > get the length of names from array of objects and create a new array
// input: [
//  {name: 'bitcode'},
//  {name: 'bitform'},
//  {},
//  {name: 'javascript'},
//  {name: 'react'},
// {name: ''}
// 
// ]

// output: [{name: 'bitcode', length:""},
//  {name: 'bitform', length:""},
//  {},
//  {name: 'javascript' length:""},
//  {name: 'react', length:""},
// {name: '', length:""}
// ]

// Answer-23

function getTheLengthOfObjectInAnArray(inputArray) {

    for (let indexOfArray = 0; indexOfArray < inputArray.length; indexOfArray++) {
        if (inputArray[indexOfArray].hasOwnProperty("name")) {
            inputArray[indexOfArray].length = inputArray[indexOfArray].name.length;
        }
        else {
            inputArray[indexOfArray].notName = undefined;
            inputArray[indexOfArray].length = 0;

        }
    }
    return inputArray;
}


const myNestyObject = [
    { name: 'bitcode' },
    { name: 'bitform' },
    {},
    { name: 'javascript' },
    { name: 'react' },
    { name: '' },
    { roll: "jk" }
]
console.log(getTheLengthOfObjectInAnArray(myNestyObject));





// problem-24> Flatten the nested object
// answer-24

function flatObject(obj) {
    let result = {};
    for (let x in obj) {
        // console.log(ob);
        if (typeof obj[x] === "object") {
            //             d1: {
            // //         e: 5,
            // //         f: 6,
            // //     },
            // //     d2: {
            // //         g: 7
            // //     },  

            for (let y in obj[x]) {
                result[y] = obj[x][y]

            }
        }
        else {
            result[x] = obj[x];
        }

    }
    return result;
}
// input
const ob = {
    a: 2,
    b: 3,
    c: 4,
    d1: {
        e: 5,
        f: 6
    },
    d2: {
        g: 7
    },
    h: 8
}
console.log(flatObject(ob));

// output
// let v = {
//     a: 2,
//     b: 3,
//     c: 4,
//     e: 5,
//     f: 6,
//     g: 7,
//     h: 8
// }





