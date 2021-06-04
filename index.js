#!/usr/bin/env node
const axios = require('axios')
const chalk = require('chalk')

const dbSeeder = async (seedDataLocation, apiUrl) => {
    console.log('')
    console.log('')
    console.log(chalk.green('FIRST ARG - seed data location', seedDataLocation))
    console.log(chalk.green('SECOND ARG - api url', apiUrl))

    // console.log(seedData)

    try {
        const seedData = require(seedDataLocation)
        for (let item of seedData) {
            const postreq = await axios.post(apiUrl, item)

            console.log(postreq, 'succesfully sent')
        }
    } catch (error) {
        console.log('')
        console.log('')
        console.log(chalk.red('THERE SEEMS TO BE A PROBLEM'))
        console.log('')
        console.log(
            chalk.red('FIRST ARG - seed data location', seedDataLocation)
        )
        console.log(chalk.red('SECOND ARG - api url', apiUrl))
        console.log('')
        console.log('')
        console.log(chalk.red('Error Mesage'))
        console.log(chalk.red(error.message))
        console.log('')
        console.log('')
    }
}

dbSeeder(process.argv[2], process.argv[3])
