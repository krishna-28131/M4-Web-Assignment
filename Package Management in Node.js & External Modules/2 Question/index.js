// Import boxen module
const boxen = require("boxen");

// Define message and title
const message = "I am using my first external module!";
const title = "Hurray!!!";

// Classic (default) style
console.log(
  boxen(message, {
    title: title,
    padding: 1
  })
);

// SingleDouble border style
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    borderStyle: "singleDouble"
  })
);

// Round border style
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    borderStyle: "round"
  })
);

// Bonus: Colored output
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    borderStyle: "round",
    backgroundColor: "green",
    borderColor: "yellow"
  })
);
