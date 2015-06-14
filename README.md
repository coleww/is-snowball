is-snowball
----------------

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
