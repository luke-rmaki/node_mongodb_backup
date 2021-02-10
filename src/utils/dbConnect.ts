import { Db, MongoClient } from 'mongodb';

interface DBConnection {
  dbConnection: Db;
  cursor: MongoClient;
}

/**
 * @param uri string: URI for mongodb database
 * @param dbName: string Name of db

 */
export async function dbConnect(
  uri: string,
  dbName: string
): Promise<DBConnection> {
  console.log(`Connecting to database`);
  const client: MongoClient = await MongoClient.connect(uri, {
    native_parser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  return { dbConnection: client.db(dbName), cursor: client };
}

/**
 * @param cursor MongoDB Client
 */
export async function dbClose(cursor: any): Promise<void> {
  cursor.close();
  console.log(`Database conenction closed`);
}
