/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
*/

/*
Write a function that takes a string input of a math word problem and then
returns the result of that problem.

Supported operations are: plus, minus, multiplied by, divided by

ex) Input: "What is 5 plus 3" Output: 8

- Talk through your thought process.
- Searching for help is allowed but not for the whole answer.
- Can ask the interviewers for help or clarification.
- This is not a pass fail challenge, we’re more interested in the problem solving.

Step 1 - Basic operations

calculate("What is 5 plus 3")
calculate("What is 234 plus 72")
calculate("What is 7 minus 5")
calculate("What is -2 plus -7")
calculate("What is 3 multiplied by 5")
calculate("What is 10 divided by 2")

Step 2 - Multiple operations

calculate("What is 1 plus 3 plus 7")
calculate("What is 3 minus 7 plus 4")

Step 3 - Error handling

calculate("What is 52 cubed")
calculate("What is plus 1 2")
calculate("What is")
*/

const operatorMap = {
  plus: "+",
  minus: "-",
  "multiplied by": "*",
  "divided by": "/",
};

const calculate = (str) => {
  // "What is 3 multiplied by 5"
  let result = 0;

  const withoutWhatIs = str.split("What is ")[1];

  const parts = withoutWhatIs.split(" ");

  // find multiplied by
  // Object.key(operatorMap)

  let operator = withoutWhatIs.replace("plus", "+");
  const keys = Object.keys(operatorMap);
  keys.forEach((key) => {
    if (str.includes(key)) {
      operator = withoutWhatIs.replace(key, operatorMap[key]);
    }
  });
  //console.log('operator: ', operator);

  return eval(operator);
};
const test = "What is 3 multiplied by 5";
const result = calculate(test);
console.log({ test, result });
