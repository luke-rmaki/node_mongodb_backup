# Node MongoDB Backup

This project creates backups of Mongo DB collections on a set interval using [node-cron](https://github.com/kelektiv/node-cron).

## Set up

1. `git clone git@github.com:luke-rmaki/node_mongodb_backup.git`
2. `cd node_mongo_backup`
3. `npm install`
4. Create a config.js file, exporting the following information(see below for an example):
   1. Database URI (uri)
   2. Database name (dbName)
   3. Collection name (collection)
   4. Name of file to write to (file)
5. Deploy (see below for some tips on deployment)

### Example config.js file

```javascript
module.exports.config = {
  uri:
    "mongodb+srv://<username>:<password>@database_url.mongodb.net/test?retryWrites=true&w=majority",
  dbName: "database_name",
  collection: "collection_name",
  file: "database_backup.json",
};
```

### Deployment

- I deployed this using a Digital Ocean droplet, but any server should work. As far as I know, if the device is not running at the scheduled time, node-cron won't run it later when the app is running
- If you have your own server or Digital Ocean droplet, I'd recommend a npm package called [pm2](https://github.com/Unitech/pm2) `npm i -g pm2`. This package allows you to run a node app in the background.
