#!/usr/bin/env node
const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')

const dbSeeder = require('./src/dbSeeder/dbseeder')
const { usrChoice, autoUsrConfig } = require('./src/config/usrConfig')
const { usrChoiceHandler } = require('./src/config/configHandler')

// clear()

const runHvy = async () => {
    console.log(
        chalk.yellow(figlet.textSync('DB-Seeder', { horizontalLayout: 'full' }))
    )

    try {
        // add mode to config object
        const choices = await usrChoice()

        switch (choices.choice) {
            case 'Populate your db through POST requests to your api?':
                const autoCreds = await autoUsrConfig()
                dbSeederAuto(creds)
                break
            case 'Populate your db through direct connection?':
                const manualCreds = await autoUsrConfig()
                // dbSeederDirect(creds)
                break
            case 'See documentation':
                // console.log(documentation)
                break
            case 'exit':
                process.exit()
            default:
                // config['mode'] = 'auto'
                console.log('something went wrong sorry')
                process.exit()
        }

        // add paths and url to config

        // choose which dbSeeder to run
        switch (config.mode) {
            case 'auto':
                dbSeeder(config.mode, config.dataPath, config.apiUrl)
        }
    } catch (error) {
        console.error(error.message)
        return 'something went wrong'
    }
}

const runLight = async (seedDataLocation, apiUrl) => {
    // clear console
    clear()

    console.log('FIRST ARG - seed data location', seedDataLocation)
    console.log('SECOND ARG - api url', apiUrl)

    try {
        const seedData = require(seedDataLocation)
        console.log('fetching seed data')
        console.log(seedData)
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
        console.log(error.message)
    }
}

const run = () => {
    if (!process.argv[2]) {
        return runHvy()
    }

    return runLight(process.argv[2], process.argv[3])
}

run()
// dbSeeder(process.argv[2], process.argv[3])
