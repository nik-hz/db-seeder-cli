#!/usr/bin/env node

const axios = require('axios')

const dbSeeder = async (seedDataLocation, apiUrl) => {
    console.log('FIRST ARG - seed data location', seedDataLocation)
    console.log('SECOND ARG - api url', apiUrl)

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
        console.log('THERE SEEMS TO BE A PROBLEM')
        console.log('')
        console.log('FIRST ARG - seed data location', seedDataLocation)
        console.log('SECOND ARG - api url', apiUrl)
        console.log('')
        console.log('')
        console.log('Error Mesage')
        console.log(error.message)
        console.log('')
        console.log('')
    }
}

dbSeeder(process.argv[2], process.argv[3])
