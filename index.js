#!/usr/bin/env node

const dbSeeder = require('./dbseeder')

dbSeeder(process.argv[0], process.argv[1])
