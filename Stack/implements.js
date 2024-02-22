import Stack from './stack-array.js';

function testingStack() {
  const stack = new Stack();

  console.log(stack.isEmpty()); //true

  stack.push(1, 2, 3, 4, 5, 6, 9, 8, 7, 15, 47);

  console.log(stack.peek()); //47
  console.log(stack.size()); //11
  console.log(stack.isEmpty()); //false
}
