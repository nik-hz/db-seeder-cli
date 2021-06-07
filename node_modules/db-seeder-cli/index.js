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
        const length = seedData.length

        for (let i = 0; i <= length; i++) {
            let countI = i
            let countLength = length

            if (length > 1000) {
                countI = Math.round(i / 200)
                countLength = Math.round(length / 200)
            }

            const dots = '|'.repeat(countI)
            const left = countLength - countI
            const empty = ' '.repeat(left)

            process.stdout.write(
                `\r[${dots}${empty}] ${i} / ${length}, ${Math.round(
                    (i / length) * 100
                )}%`
            )
            await axios.post(apiUrl, seedData[i])
            if (i === length) {
                break
            }
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
