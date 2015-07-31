is-snowball
----------------

[![NPM](https://nodei.co/npm/is-snowball.png)](https://nodei.co/npm/is-snowball/)
[![Build Status](https://secure.travis-ci.org/coleww/is-snowball.png)](http://travis-ci.org/coleww/is-snowball)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)


[Snowball](https://en.wikipedia.org/wiki/Oulipo#Constraints)
"A poem in which each line is a single word, and each successive word is one letter longer."

### INSTALL

`npm install is-snowball`

### USE

```
var isSnowball = require('is-snowball')
var text = 'wow what magic swords'
if (isSnowball(text)) console.log(text.split(" ").join("\n"))
=>
    wow
    what
    magic
    swords
```

### API

`isSnowball(text, reverse=false)`
=> boolean
- text: a string to test for "snowballness"
- reverse: if true, check that each successive word is one letter shorter instead.
