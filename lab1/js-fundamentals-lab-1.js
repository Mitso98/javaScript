// Create a function that transforms an array of user objects into the following user
// object format.

// Function input example:
var detailedUsers = [
  {
    firstName: "Ahmed",
    lastName: "Ali",
    dateOfBirth: "1995-10-10",
    address: "Alexadria, Egypt",
  },
  {
    firstName: "Hossam",
    lastName: "Mohamed",
    dateOfBirth: "1980-05-10",
    address: "Nasr City, Cairo, Egypt",
  },
  {
    firstName: "John",
    lastName: "James",
    dateOfBirth: "1975-03-05",
    address: "Nasr street, Nasr City, Cairo, Egypt",
  },
  {
    firstName: "Tarek",
    lastName: "Hassan",
    dateOfBirth: "1999-12-03",
    address: "15, street name, district, city, country",
  },
  {
    firstName: "Hussein",
    lastName: "Youssuf",
    dateOfBirth: "2005-12-03",
    address: "abc, street name, district, city, country",
  },
];

// Required function output:
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

function calcAge(dof) {
  var target = new Date(dof);
  var month_diff = Date.now() - target.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);

  return age;
}

function formattedObj(obj) {
  var result = [];
  var i = 0;
  for (var iterator of obj) {
    result[i] = {
      fullname: iterator.firstName + " " + iterator.lastName,
      age: calcAge(iterator.dateOfBirth),
    };

    var address_details = iterator.address.split(",");
    var address_length = address_details.length - 1;
    var address_keys = [
      "country",
      "city",
      "district",
      "streetName",
      "buildingNumber",
    ];
    var address_index = 0;
    for (var j = address_length; j >= 0; j--) {
      if (address_keys[address_index] !== "buildingNumber") {
        result[i][address_keys[address_index++]] = address_details[j];
      } else if (! isNaN(Number(address_details[j])) ) {
        result[i][address_keys[address_index++]] = Number(address_details[j]);
      }
    }

    i++;
  }
  return result;
}

var result = formattedObj(detailedUsers);
console.log(result);
/**
 * Notes:
 * - Address is always in the following format: 'building number, street name, district, city, country'
 * - Address has at least the city and country, if the rest is missing the missing properties
 *   should not exist in the user.
 * - Age should be an integer. If age is float, ignore the fraction and do not round, for
 *   example, 23.95 should be 23.
 * - buildingNumber should be a number not a string, if buildingNumber is not a valid number,
 *   it should be ignored.
 * - The original array should remain unchanged.
 */
