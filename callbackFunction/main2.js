console.log('Start')

function divide(a, b) {
  console.log(a / b)
}

function operation(val1, val2, callback) {
  callback(val1, val2)
}

operation(16, 4, divide)

console.log('End')
