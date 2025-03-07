module.exports = {
  function: FlipCoin
}

var console = require("console")

function FlipCoin (coinType, desiredFlips) {

  var coinFaceResult
  var coinAnimationUrl
  var numHeads = 0
  var numTails = 0
  
  var numFlips = Math.floor(desiredFlips)
  
  
  for (var i = 0; i < numFlips; i++) { 
    var randomNum = Math.random()

    if(randomNum > 0.5) {
      numHeads++
    } else if (randomNum <= 0.5){
      numTails++
    }
  }  

 if (numHeads > numTails) {
    coinFaceResult = "Heads"
    coinAnimationUrl = "/gifs/LydiaCoinHeads.gif"
  } else if (numTails > numHeads) {
    coinFaceResult = "Tails"
    coinAnimationUrl = "/gifs/LydiaCoinTails.gif"
  } else if (numHeads == numTails) {
    coinFaceResult = "Balanced"
    coinAnimationUrl = "/gifs/LydiaCoinBalanced.gif"
  }

  console.log(coinFaceResult)
  console.log(coinAnimationUrl)

  return {
    coinFaceResult: coinFaceResult,
    coinAnimationUrl: coinAnimationUrl,
    numHeads: numHeads,
    numTails: numTails
  }
}
