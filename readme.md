# Node MongoDB Backup

This project creates backups of Mongo DB collections on a set interval using [node-cron](https://github.com/kelektiv/node-cron).

## Set up

1. `git clone git@github.com:luke-rmaki/node_mongodb_backup.git`
2. `cd node_mongo_backup`
3. `npm install` or `yarn install`

4. Create a config.ts file, exporting the following information(see below for an example):
   1. Database URI (uri)
   2. Database name (dbName)
   3. Collection names (collections) -> This must be an array even if there is only one collection
5. Set a cron schedule in main.ts (see [Crontab Guru](https://crontab.guru/) for more help)
6. Install [pm2](https://github.com/Unitech/pm2) `npm i -g pm2`
7. Run `npm run deploy` or `yarn deploy`

### Example config.ts file

```javascript
module.exports.config = {
  uri:
    "mongodb+srv://<username>:<password>@database_url.mongodb.net/test?retryWrites=true&w=majority",
  dbName: "database_name",
  collections: ["collection_name", "collection_name_1"],
};
```
