module.exports = {
  function: FlipCoin
}

function FlipCoin (coinType) {
  
  var coinFaceResult
  var coinAnimationUrl
  
  var randomNum = Math.random()
  
  if(randomNum > 0.5) {
    coinFaceResult = "Heads"
    coinAnimationUrl = 
  } else {
    coinFaceResult = "Tails"
  }
  
  
  
  
  return {
    coinFaceResult: coinFaceResult,
    coinAnimationUrl: coinAnimationUrl
  }
}
