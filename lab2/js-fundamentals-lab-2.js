/*
  1. Calculate the average age of the formatted users of the previous lab only for users who
     are less than 40 years old.
     Use the reduce function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/
var formattedUsers = [
  {
    fullName: "Ahmed Ali",
    age: 27,
    country: "Egypt",
    city: "Alexadria",
  },
  {
    fullName: "Hossam Mohamed",
    age: 42,
    country: "Egypt",
    city: "Cairo",
    district: "Nasr City",
  },
  {
    fullName: "John James",
    age: 47,
    country: "Egypt",
    city: "Cairo",
    district: "Nasr City",
    streetName: "Nasr street",
  },
  {
    fullName: "Tarek Hassan",
    age: 23,
    country: "country",
    city: "city",
    district: "district",
    streetName: "street name",
    buildingNumber: 15,
  },
  {
    fullName: "Hussein Youssuf",
    age: 17,
    country: "country",
    city: "city",
    district: "district",
    streetName: "street name",
  },
];
// Write the implementation of reducerFunc.
function reducerFunc() {
  return formattedUsers.filter((obj) => obj.age < 40).map((obj) => obj.age);
}
var ages = reducerFunc();
var average =
  ages.reduce((accumulator, currentValue) => accumulator + currentValue) /
  ages.length;

console.log(average);
/*
  2. Calculate the number of occurrences of all characters including numbers and white 
     spaces in a string. The string may contain: numbers, upper and lower-case letters and 
     white spaces. 
     Ignore the character case, for example, 'aA' should be counted as 2 occurrences
     of the a character.
*/

// Example input
var input = "abbflmffchocC19 ieqvh";

function countOcurance(input) {
  var obj = {};

  for (let iterator of input) {
    iterator = iterator === " " ? "White space" : iterator.toLowerCase();

    if (obj[iterator]) obj[iterator] += 1;
    else obj[iterator] = 1;
  }
  return obj;
}

function formatOcurrance(obj) {
  var counter;
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      switch (obj[key]) {
        case 1:
          console.log(key + " ocurred" + " once");
          break;
        case 2:
          console.log(key + " ocurred" + " twice");
          break;
        default:
          console.log(key + " ocurred " + obj[key] + " times");
          break;
      }
    }
  }
}

var obj = countOcurance(input);

formatOcurrance(obj);
/* Output should be exactly like this in the console.
    1 ocurred once
    9 ocurred once
    a ocurred once
    b ocurred twice
    f ocurred 3 times
    l ocurred once
    m ocurred once
    c ocurred 3 times
    h ocurred twice
    o ocurred once
    White space ocurred once
    i ocurred once
    e ocurred once
    q ocurred once
    v ocurred once
*/
