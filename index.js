module.exports = function(text, reverse){
  var last, result = true
  return text.split(" ").every(function(word){
    var length = word.length
    var diff = reverse ? last - length : length - last
    if(last && diff !== 1) result = false
    last = length
    return result
  })
}
