#!/usr/bin/env node

const axios = require('axios')

const dbSeeder = async (mode, seedDataLocation, apiUrl) => {
    console.log('FIRST ARG - mode', mode)
    console.log('SECOND ARG - seed data location', seedDataLocation)
    console.log('THIRD ARG - api url', apiUrl)

    const seedData = require(seedDataLocation)

    // show loading percentage
    const length = seedData.length

    /* using 20 to make the progress bar length 20 charactes, multiplying by 5 below to arrive to 100  */

    // main()

    try {
        // for (let item of seedData) {
        //     // await axios.post(apiUrl, item)
        // }

        for (let i = 0; i <= length; i++) {
            await axios.post(apiUrl, seedData[i])
            const dots = '.'.repeat(i)
            const left = length - i
            const empty = ' '.repeat(left)

            /* need to use  `process.stdout.write` becuase console.log print a newline character */
            /* \r clear the current line and then print the other characters making it looks like it refresh*/
            process.stdout.write(`\r[${dots}${empty}] ${i * 5}%`)
        }
    } catch (error) {
        console.log('')
        console.log('')
        console.log('THERE SEEMS TO BE A PROBLEM')
        console.log('')
        console.log('FIRST ARG - mode', mode)
        console.log('SECOND ARG - seed data location', seedDataLocation)
        console.log('THIRD ARG - api url', apiUrl)
        console.log('')
        console.log('')
        console.log('ERROR MESAGE:')
        consoleß.error(error.message)
    }
}

module.exports = dbSeeder
