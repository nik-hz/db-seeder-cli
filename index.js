#!/usr/bin/env node
const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')
const dbSeeder = require('./dbseeder')

clear()

console.log(
    chalk.yellow(figlet.textSync('DB-Seeder', { horizontalLayout: 'full' }))
)

dbSeeder(process.argv[2], process.argv[3])
