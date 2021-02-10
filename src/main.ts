import cron from 'node-cron';
import express from 'express';

import {
  dbConnect,
  dbClose,
  createQuery,
  runQueries,
  saveBackups,
  handleError,
} from './utils';

import { config } from './config';

async function main() {
  // load config
  const { uri, dbName, collections } = config;

  // connect to db
  const { dbConnection, cursor } = await handleError(dbConnect)(uri, dbName);

  // create an array of promises using queryData function
  console.log(`Creating queries`);
  const promises: Array<Promise<any>> = collections.map((collection: string) =>
    handleError(createQuery)(dbConnection, collection)
  );

  console.log(`Fetching data`);

  // Fetch data from mongodb
  const values: Array<any> = await handleError(runQueries)(promises);

  // Write backups to file
  await handleError(saveBackups)(values);

  // Close db connect
  dbClose(cursor);
}

console.clear();

// cron.schedule("0 8 * * 1", () => {
// cron.schedule("* * * * *", () => {
console.log(`Running backup`);
handleError(main)();
// });

const app = express();
app.listen(3128);
