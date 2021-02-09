const { MongoClient } = require("mongodb");

const database = async (db) => {
  const { uri, dbName, collection } = db;
  let client;

  try {
    client = await MongoClient.connect(uri, {
      native_parser: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    const db = client.db(dbName);
    const data = await db.collection(collection).find({}).toArray();
    client.close();
    return { data, collection };
  } catch (err) {
    console.log(`There was an error`);
    console.log(err);
  }
};

module.exports = database;
