//code below

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var newBar = "foo"

function addElementToBeginningOfArray(chocolateBars, newBar) {
  var newArray = []
  newArray = chocolateBars.unshift(newBar)
  return newArray
}

addElementToBeginningOfArray()

function destructivelyAddElementToBeginningOfArray(chocolateBars, newBar) {
  chocolateBars = chocolateBars.unshift(newBar)
  return chocolateBars
}

destructivelyAddElementToBeginningOfArray()


addElementToEndOfArray


destructivelyAddElementToEndOfArray