const inquirer = require('inquirer')

module.exports = {
    usrChoice: () => {
        const choices = [
            {
                type: 'list',
                name: 'choice',
                message: 'What do you want to do?',
                choices: [
                    'Populate your db through POST requests to your api?',

                    {
                        name: 'Populate your db through direct connection?',
                        disabled: 'Coming Soon',
                    },
                    new inquirer.Separator(),

                    {
                        name: 'See documentation',
                        disabled: 'Coming Soon',
                    },
                    {
                        name: 'exit',
                        // disabled: 'Unavailable at this time',
                    },
                ],
            },
        ]
        return inquirer.prompt(choices)
    },
    autoUsrConfig: () => {
        const questions = [
            /* Pass your questions in here */
            {
                name: 'dataPath',
                type: 'input',
                message: 'path to seed data',
                validate: (value) => {
                    if (!value) {
                        return 'enter a path to your data'
                    }
                    try {
                        const data = require(value)
                        if (!data) {
                            return 'enter a path to a valid data file'
                        }
                    } catch (error) {
                        return 'enter a path that leads to a valid data file'
                    }

                    return true
                },
            },
            {
                name: 'apiUrl',
                type: 'input',
                message: 'api url',
                validate: (value) => {
                    if (!value.length) {
                        return 'enter a path to your data'
                    }
                    return true
                },
            },
        ]
        return inquirer.prompt(questions)
    },
    // inquirer
    //     .prompt()
    //     .then((answers) => {
    //         // Use user feedback for... whatever!!
    //         console.log(answers)
    //     })
    //     .catch((error) => {
    //         if (error.isTtyError) {
    //             // Prompt couldn't be rendered in the current environment
    //         } else {
    //             // Something else went wrong
    //         }
    //     })
}
