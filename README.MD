# db seeder cli tool

a db seeder cli tool, run from the command line to seed or test under load your dbs through an existing api with data from a JSON file.

will iterate through large sets of data like JSON arrays and send objects one by one

## Usage

https://www.npmjs.com/package/db-seeder-cli

https://github.com/nik-hz/db-seeder-cli

```
npm i -g db-seeder-cli

```

to use in your console run below

```
db-seeder <location of seed data> <apiUrl>

```

the first argument should lead directly to a data file from (use pwd and add the /<filename>), the second one should be the url of your api for post requests.

this will iterate through arrays of data and send it one by one to your api so make sure your data is iterable
