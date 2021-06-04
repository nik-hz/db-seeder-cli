module.exports = {
    usrChoiceHandler: (choice) => {
        switch (choice) {
            case 'Populate your db through POST requests to your api?':
                return 'auto'

            case 'Populate your db through direct connection?':
                return 'auto'

            case 'See documentation':
                return 'auto'

            case 'exit':
                return process.exit()
            default:
                return 'auto'
        }
    },
}
