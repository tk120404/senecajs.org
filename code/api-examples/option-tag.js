var seneca = require('seneca')({tag: 'foo'})

// prints foo
console.log(seneca.tag)

// prints .../foo
console.log(seneca.id)

