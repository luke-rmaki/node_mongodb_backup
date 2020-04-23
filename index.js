const cron = require("node-cron");
const express = require("express");

const database = require("./database");
const saveBackup = require("./save_backup");
const { config } = require("./config");

const backup = async (config) => {
  const { uri, dbName, collection, file } = config;
  const data = await database({
    uri: uri,
    dbName: dbName,
    collection: collection,
  });

  saveBackup(data, file);
};

cron.schedule("* * * * *", () => {
  backup(territory);
});

const app = express();
app.listen(3128);
