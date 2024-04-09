// function uniqueValues(arr) {
//     try {
//       // Check if the input is an array
//       if (!Array.isArray(arr)) {
//         throw new TypeError('Input must be an array');
//       }
  
//       // Use Set to remove duplicates and convert back to an array
//       return Array.from(new Set(arr));
//     } catch (error) {
//       console.error(error.message);
//       return [];
//     }
//   }
  
//   // Example usage
//   const numbers = [1, 2, 3, 1, 2];
//   const uniqueNumbers = uniqueValues(numbers);
//   console.log(uniqueNumbers);  // Output: [1, 2, 3]
  
//   // Test case with non-array input
//   const notAnArray = 'invalid input';
//   const invalidResult = uniqueValues(notAnArray);
//   console.log(invalidResult);  // Output: Input must be an array; []
 
// try {
//     console.log("Work");
// } catch (error) {
//     console.log(error);
// }

//--------------VAZIFA----------------

// 1-masala
// function raqamlarMassivi(arr) {
//     let realSet = new Set(arr);

//     return [...realSet];
//   }
  
//   let numbers = [1, 2, 3, 1, 2, 4];
//   let barchaMassiv = raqamlarMassivi(numbers);
//   console.log(barchaMassiv);

//2-masala
// function noyobBelgilar(string) {
//   let charCountMap = new Map();

//   for (let char of string) {
//     let existingCount = charCountMap.get(char);
//     charCountMap.set(char, existingCount ? existingCount + 1 : 1);
//   }

//   return charCountMap;
// }

// let string = "Najot Ta'lim";
// let charCountMap = noyobBelgilar(string);

// console.log(charCountMap);

//3-masala
// function hasUniqueElements(arr) {
//   let uniqueSet = new Set(arr);

//   return uniqueSet.size === arr.length;
// }

// let myArray = [1, 2, 3, 4, 2];
// console.log(hasUniqueElements(myArray));

// let uniqueArray = [5, 6, 7, 8];
// console.log(hasUniqueElements(uniqueArray));

//4-masala

// function noyobElementlar(arr1, arr2) {
//   let barchaElementlar = new Set([...arr1, ...arr2]);

//   return Array.from(barchaElementlar);
// }

// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// let uniqueArr = noyobElementlar(arr1, arr2);
// console.log(uniqueArr);

//5-masala

// function countWords(str) {
//   str = str.toLowerCase();

//   let words = str.split(/\s+/);

//   let wordMap = new Map();

//   for (let word of words) {
//     if (wordMap.has(word)) {
//       wordMap.set(word, wordMap.get(word) + 1);
//     } else {
//       wordMap.set(word, 1);
//     }
//   }

//   return wordMap;
// }

// let str = "Darsimiz modme honasida 14:00da boladi";
// let wordCounts = countWords(str);

console.log(wordCounts);



  