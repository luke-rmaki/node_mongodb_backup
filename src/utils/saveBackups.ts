import { promises } from 'fs';

/**
 * @param data Array: Values resolved from runQueries
 */
export async function saveBackups(data: Array<string | any>): Promise<void> {
  await promises.mkdir(`./backups`, { recursive: true });

  // Create a time stamp
  const now: Date = new Date();
  const timeStamp: string = `${now.getFullYear()}_${
    now.getMonth() + 1
  }_${now.getDate()}`;

  // Create an array of promises that will resolve to writeFiles
  const fileWrites: Array<Promise<any>> = data.map((backup) =>
    promises.writeFile(
      `./backups/${timeStamp}_${backup.collection}.json`,
      JSON.stringify(backup.data)
    )
  );

  // Run promises
  await Promise.all(fileWrites);

  console.log(`Files written`);
}
