module.exports = function(text, reverse){
  var last, result = true
  var words = text.split(" ").forEach(function(word){
    var length = word.length
    var diff = reverse ? last - length : length - last
    if(last && diff !== 1) result = false
    last = length
  })
  return result
}
