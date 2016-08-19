const wt = require('who-that')

wt({
  github: 'zacanger',
  npm: 'zacanger'
}).then(d => console.log(JSON.stringify(d)))
