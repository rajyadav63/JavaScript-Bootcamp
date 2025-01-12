//Module import file

//defualt import
import multiply from './mathOperator.js'

//named import
import { add, subtract } from './mathOperator.js'

console.log(multiply(2, 4));
console.log(add(2, 4));
console.log(subtract(5, 4));

