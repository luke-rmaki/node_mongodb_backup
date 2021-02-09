const cron = require("node-cron");
const express = require("express");

const database = require("./database");
const saveBackup = require("./save_backup");
const { config } = require("./config");

const backup = async () => {
  const { uri, dbName, collections } = config;
  console.log(`Creating queries`);
  const promises = collections.map((collection) =>
    database({ uri: uri, dbName: dbName, collection: collection })
  );

  console.log(`Fetching data`);
  Promise.all(promises).then((values) => {
    values.forEach((value) => {
      const { data, collection } = value;
      console.log(`Saving ${collection}`);
      saveBackup(data, collection);
    });
  });
  console.log(`Backups created`);
};

console.clear();

cron.schedule("0 8 * * 1", () => {
  console.log(`Running backup`);
  backup();
});

const app = express();
app.listen(3128);
