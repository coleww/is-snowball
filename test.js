var tap = require('tape')
var isSnowball = require('./')

var snowball = 'wow what magic swords'
var notball = 'cowabunga video masterpiece theater'
var reverse = 'extreme guitar burns'

tap.test('returns true if it is a snowball', function (t) {
  t.plan(1)
  t.ok(isSnowball(snowball))
})

tap.test('returns false if it is not a snowball', function (t) {
  t.plan(1)
  t.ok(!isSnowball(notball))
})

tap.test('detects reverse snowballs', function (t) {
  t.plan(2)
  t.ok(isSnowball(reverse, true))
  t.ok(!isSnowball(snowball, true))
})
