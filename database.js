const { MongoClient } = require("mongodb");

const database = async (db) => {
  const { uri, dbName, collection } = db;
  let client;

  try {
    client = await MongoClient.connect(uri, {
      native_parser: true,
      useUnifiedTopology: true,
    });

    const db = client.db(dbName);
    const data = await db.collection(collection).find({}).toArray();
    client.close();
    return data;
  } catch (err) {
    console.log(err.stack);
  }
};

module.exports = database;
