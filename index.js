#!/usr/bin/env node

const axios = require('axios')

const dbSeeder = async (seedDataLocation, apiUrl) => {
    console.log('FIRST ARG - seed data location', seedDataLocation)
    console.log('SECOND ARG - api url', apiUrl)

    const seedData = require(seedDataLocation)
    console.log(seedData)

    try {
        for (let item of seedData) {
            const postreq = await axios.post(apiUrl, item)

            console.log(postreq, 'succesfully sent')
        }
    } catch (error) {
        console.log('')
        console.log('')
        console.log('THERE SEEMS TO BE A PROBLEM')
        console.log('')
        console.log('FIRST ARG - seed data location', seedDataLocation)
        console.log('SECOND ARG - api url', apiUrl)
        console.log('')
        console.log('')
        consoleß.error(error.message)
    }
}

dbSeeder(process.argv[2], process.argv[3])
