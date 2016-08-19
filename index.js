#!/usr/bin/env node

const wt = require('who-that')
const a1 = process.argv[2]
const a2 = process.argv[2]

if (!a1) {
  return console.log('usage: who-that githubUsername npmUsername')
}

wt({github : a1, npm: a2}).then(d => console.log(JSON.stringify(d, null, 2)))
