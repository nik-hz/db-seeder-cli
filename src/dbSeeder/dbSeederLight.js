const axios = require('axios')
const chalk = require('chalk')
const clear = require('clear')

const dbSeederLight = async (seedDataLocation, apiUrl) => {
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
        console.log(
            chalk.red('THERE SEEMS TO BE A PROBLEM'),
            chalk.yellow(error.message)
        )
        console.log('')
        console.log(
            chalk.red('FIRST ARG - seed data location:'),
            chalk.yellow(seedDataLocation)
        )
        console.log(chalk.red('SECOND ARG - api url:'), chalk.yellow(apiUrl))
        console.log('')
        console.log('')
        console.log(chalk.red('Error Mesage'))
        console.log(chalk.red(error.message))
        console.log('')
        console.log('')
    }
}

module.exports = dbSeederLight
