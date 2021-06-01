const axios = require('axios')

module.exports.dbSeeder = async (seedData, apiUrl) => {
    try {
        for (let item of seedData) {
            const postreq = await axios.post(apiUrl, item)

            console.log(postreq, 'succesfully sent')
        }
    } catch (error) {
        console.log('')
        console.log('')
        console.log('THERE SEEMS TO BE A PROBLEM')
        console.log('FIRST ARG - seed data location, SECOND ARG - api url')
        console.log('')
        console.log('')
        console.error(error.message)
    }
}
