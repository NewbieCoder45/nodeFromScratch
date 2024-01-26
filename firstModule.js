const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)

//Instead of running nodemon command everytime, 
//a better coding practice would be to run it as
//one of the scripts in package.json