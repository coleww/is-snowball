module.exports = function (text, reverse) {
  return text.split(' ').every(function (word, i, arr) {
    var last = i ? arr[i - 1].length : false
    var curr = word.length
    var diff = reverse ? last - curr : curr - last
    return !(last && diff !== 1)
  })
}
