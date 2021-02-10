/**
 * @param promises Array<Promise<any>>: An array of promises
 * @description Takes in an array of promises that fetches data and runs concurrently with Promise.all
 */
export async function runQueries(
  promises: Array<Promise<any>>
): Promise<Array<any>> {
  const values = await Promise.all(promises);
  return values;
}
