module.exports = {
  function: ResolveNums
}

var console = require("console")

function ResolveNums (weirdNumText) {
  
  var properNum = 0
  var rawNumText = weirdNumText
  var parsedNumText = rawNumText.split(" ")
  
  var units = [
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
    "sextillion",
    "septillion",
    "octillion"
  ]
  
  // "1 million 365"
  for (var i = 0; i < units.length; i++) {
    if(contains(parsedNumText,units[i])) {
      properNum = 1500001.00
      break
    }
  }
  return properNum
}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}