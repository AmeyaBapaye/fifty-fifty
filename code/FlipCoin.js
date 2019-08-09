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

    if(randomNum > 0.5) {
      numHeads++
    } else if (randomNum <= 0.5){
      numTails++
    }
  }  

 if (numHeads > numTails) {
    coinFaceResult = "Heads"
    coinAnimationUrl = "/gifs/LydiaCoinHeads.gif?" + ((Math.random()*1000) + "0" + (Math.random()*1000))
  } else if (numTails > numHeads) {
    coinFaceResult = "Tails"
    coinAnimationUrl = "/gifs/LydiaCoinTails.gif?" + ((Math.random()*1000) + "1" + (Math.random()*1000))
  } else if (numHeads == numTails) {
    coinFaceResult = "Balanced"
    coinAnimationUrl = "/gifs/LydiaCoinBalanced.gif?" + ((Math.random()*1000) + "2" + (Math.random()*1000))
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
