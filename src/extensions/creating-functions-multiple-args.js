// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function lowerAndUpper(lower, upper) {
  const array = []
  for (let i = lower; i <= upper; i++) {
    array.push(i)
  }
  return array
}

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below

function rewriteString(string, number) {
  let exclamationMarks = ''
  const capitalizedString = string.toUpperCase()

  for (let i = 0; i < number; i++) {
    exclamationMarks = exclamationMarks + '!'
  }
  return capitalizedString.concat(exclamationMarks)
}

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below

function showNewTime(string, minutes) {
  const timeArray = string.split(':')

  let existingHours = parseInt(timeArray[0])
  let existingMinutes = parseInt(timeArray[1]) + minutes

  while (existingMinutes >= 60) {
    existingMinutes = existingMinutes - 60
    if (existingHours === 23) {
      existingHours = 0
    } else {
      existingHours++
    }
  }

  let existingMinutesString
  let existingHoursString

  if (existingMinutes < 10) {
    existingMinutesString = '0' + existingMinutes.toString()
  } else {
    existingMinutesString = existingMinutes.toString()
  }

  if (existingHours === 0) {
    existingHoursString = '0' + existingHours.toString()
  } else {
    existingHoursString = existingHours.toString()
  }

  return '' + existingHoursString + ':' + existingMinutesString
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: lowerAndUpper, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: rewriteString, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: showNewTime // etc
}
