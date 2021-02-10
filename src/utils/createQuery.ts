/**
 * @param db any: Mongo client connection
 * @param collection string: Collection name
 * @description Creates a promises that will fetch data from database
 * @returns {data: object, collection: string}
 */
export async function createQuery(db: any, collection: string) {
  const data = await db.collection(collection).find({}).toArray();
  return { data, collection };
}
