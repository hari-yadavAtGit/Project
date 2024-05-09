// 1.count Occurrences


// function countOccurrences(str, char) {
//     // Write your code here
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == char) {
//             count++;
//         }
//     };
//     return count;
// };

// console.log(countOccurrences("hello world", "l"));

// console.log(countOccurrences("Elephant", "E"));

// Do not modify the below lines
// module.exports = { countOccurrences };


// 2.findLongestWord--------->

// function findLongestWord(str) {
//     let words = str.split(" ")
//     let maxLength = ""

//     for (let word of words) {
//         if (word.length > maxLength.length) maxLength = word;
//     }
//     return maxLength.length;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// console.log(findLongestWord("Coding is fun with fellow learners"));

// Do not modify the below lines
// module.exports = { findLongestWord };




// 3.Shopping Cart Total---------->










// Do not modify the below lines
// module.exports = { calculateTotal };



// 4.titleCase---------->

// function titleCase(sentence) {
//     // write your code here
//     const words = sentence.toLowerCase().split(' ').map(function(elem){
//         return elem[0].toUpperCase() + elem.slice(1);
//     })

    // for (let i = 0; i < words.length; i++) {
    // words[i] = words[i][0].toUpperCase() + words[i].substring(1);

// return words.join(' ');

// console.log(titleCase("Dream big, work hard, and stay focused"));

// Do not modify the below lines
// module.exports = { titleCase };