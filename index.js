//1. Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
 const arr1 = [3,7,34,90,12];
 const arr2 = [true, "green", "where",12,56];
const findLastElementArr1 = arr1[arr1.length-1]
const lastElementInArr2 = arr2[arr2.length-1]
 console.log(findLastElementArr1);
 console.log(lastElementInArr2);


 //2. Write a JS program that will join the following array elements into a string. myPets = ["Cow", "Bird", "Snake", "Dog"];
const myPets = ["Cow", "Bird", "Snake", "Dog"];
const joinedString  = myPets.join(", ");
console.log(joinedString);

//3. Write a JS script to sort the following array items. var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
 const sortedArr3 = arr3.sort();
 console.log(sortedArr3);

 //4. Write a program to remove duplicates from the following array. Console the array without duplicates, and console another array that only contains the duplicates
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
const uniqueArr = arr.filter((item,index)=> {
    return arr.indexOf(item) === index;
}
)
console.log(uniqueArr);
console.log(arr);

//5. Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found". let arr5 = ["the", "way", "x", 4];

let arr5 = ["the", "way", "x", 4];
console.log(arr5.includes("food"));
//6. Write a JS script to sort the following string:let word = "renniw"

let word = "renniw";
const splittedWord = word.split("");
const sortedWord = splittedWord.sort();
const joinSortedArray = sortedWord.join("");
console.log(joinSortedArray);

//7. Using an array of fruits with length 10 , insert 'Tomato' at the 5th index

let arrOfFruits = ["Apple","Banana","pineapple","pawpaw","water melon","Fig","Grapes","Kiwi","Mango","Orange"];
arrOfFruits.splice(5,0,"Tomato");
console.log(arrOfFruits)