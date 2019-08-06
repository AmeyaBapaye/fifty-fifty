module.exports = {
  function: FlipCoin
}

var console = require("console")

function FlipCoin (coinType, desiredFlips) {

  var coinFaceResult
  var coinAnimationUrl
  var numHeads = 0
  var numTails = 0

  for (var i = 0; i < desiredFlips; i++) { 
    var randomNum = Math.random()
    console.log(randomNum)

    if(randomNum > 0.5) {
      numHeads++
    } else if (randomNum < 0.5){
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
    coinFaceResult = "Thanos"
    coinAnimationUrl = "/gifs/LydiaCoinTails.gif"
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
