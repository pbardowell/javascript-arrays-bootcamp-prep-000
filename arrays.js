var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {
return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
array.unshift(element)
return array
}
function addElementToEndOfArray(array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array,index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift()
return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
return array.slice(0, array.length-1)
}
=======
var array = [element, ...array]
return array
}
>>>>>>> d337620584dc650e0e48685cdb4e2b2f0301d56a
